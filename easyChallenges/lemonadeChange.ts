// First Approach - O(n) approach iterating over all bills and hash mapping their count, handling every change at a time checking if there's any possible change to each payment, and if not it returns false. (93ms - Beats 19.05%)
function lemonadeChange(bills: number[]): boolean {
	const billCount: Map<number, number> = new Map();

	for(let i = 0; i < bills.length; i++) {
		billCount.set(bills[i], (billCount.get(bills[i]) ?? 0) + 1);

		if(bills[i] === 10) {
			const fiveBillCount = billCount.get(5) ?? 0;
			if(fiveBillCount < 1)
				return false;

			billCount.set(5, fiveBillCount - 1);
			continue;
		}

		if(bills[i] === 20) {
			const fiveBillCount = billCount.get(5) ?? 0;
			const tenBillCount = billCount.get(10) ?? 0;

			if(tenBillCount > 0 && fiveBillCount > 0) {
				billCount.set(5, fiveBillCount - 1);
				billCount.set(10, tenBillCount - 1);
				continue;
			}

			if(fiveBillCount > 2) {
				billCount.set(5, fiveBillCount - 3);
				continue;
			}

			return false;
		}
	}

	return true;
};

// Second Approach - Switching from hash mapping to array counting, being zero to five bills, two to ten bills and three to twenty bills and doing the same algorithm from first approach. (82ms - Beats 49.21%)
function lemonadeChange(bills: number[]): boolean {
	const billCount: [number, number, number] = [0, 0, 0];

	for(let i = 0; i < bills.length; i++) {
		if(bills[i] === 5) {
			billCount[0]++;
		} else if(bills[i] === 10) {
			billCount[1]++;

			if(billCount[0] > 0) {
				billCount[0]--;
			} else {
				return false;
			}
		} else {
			billCount[2]++;

			if(billCount[0] > 0 && billCount[1] > 0) {
				billCount[0]--;
				billCount[1]--;
			} else if(billCount[0] > 2) {
				billCount[0] -= 3;
			} else {
				return false;
			}
		}
	}

	return true;
};

// Second Approach V2 - Same as second approach but with continue optimizations and don't counting three bills . (75ms - Beats 77.78%)
function lemonadeChange(bills: number[]): boolean {
	const billCount: [number, number] = [0, 0];

	for(let i = 0; i < bills.length; i++) {
		if(bills[i] === 5) {
			billCount[0]++;
			continue;
		}

		if(bills[i] === 10) {
			billCount[1]++;

			if(billCount[0] > 0) {
				billCount[0]--;
				continue;
			}

			return false;
		}

		if(billCount[0] > 0 && billCount[1] > 0) {
			billCount[0]--;
			billCount[1]--;
			continue;
		}

		if(billCount[0] > 2) {
			billCount[0] -= 3;
			continue;
		}

		return false;
	}

	return true;
}
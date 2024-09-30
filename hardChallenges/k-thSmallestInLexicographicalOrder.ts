// First Try - Same iterative algorithm from last submission but without previous numbers tracking and just returning by the index. (42 / 69 testcases passed - Time Limit Exceeded)
// function findKthNumber(n: number, k: number): number {
// 	let x = 1;
// 	for(let i = 0; i < n; i++) {
// 		if(i === k - 1) break;
// 		if(x * 10 > n) {
// 			if(x === n) x = Math.floor(x / 10);
// 			x++;
// 			while(x % 10 === 0) x = Math.floor(x / 10);
// 		} else x *= 10;
// 	}
// 	return x;
// };

// First Approach - Tracking the possible numbers count for each prefix and decrementing k by it's count if lesser than k, either decrementing once and incrementing current number. (https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5819085/beats-super-easy-beginners/?envType=daily-question&envId=2024-09-22)
function countSteps(n: number, curr: number, next: number): number {
	let steps = 0;

	while(curr <= n) {
		steps += Math.min(n + 1, next) - curr;
		curr *= 10;
		next *= 10;
	}

	return steps;
}

function findKthNumber(n: number, k: number): number {
	let current = 1;
	k--;

	while (k > 0) {
		const count = countSteps(n, current, current + 1);

		if(count <= k) {
			current++;
			k -= count;
		} else {
			current *= 10;
			k--;
		}
	}

	return current;
}
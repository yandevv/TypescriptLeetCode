// First Approach - Set method by iterating over banned nums and storing in a set object, and iterating with a for passing by every num until n, breaking when sum exceed maxSum. (52ms - Beats 100.00%)
function maxCount(banned: number[], n: number, maxSum: number): number {
	let bannedSet = new Set(banned);

	let sum = 0, numCount = 0;
	for(let num = 1; num <= n; num++) {
		if(!bannedSet.has(num)) {
			sum += num;
			numCount++;
		}

		if(sum + num >= maxSum)
			break;
	}

	return numCount;
};

const case1 = maxCount([1,6,5], 5, 6);
const case2 = maxCount([1,2,3,4,5,6,7], 8, 1);
const case3 = maxCount([11], 7, 50);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 7}`);
// First Approach - Hashmapping the count of index - nums[index] of every number and summing to ans the count of
// numbers which their difference is different than the actual number difference. (27ms - Beats 100.00%)
function countBadPairs(nums: number[]): number {
	const countByDiff: Map<number, number> = new Map();

	let ans = 0;
	for(let i = 0; i < nums.length; i++) {
		const difference = nums[i] - i;

		let diffCount = (countByDiff.get(difference) ?? 0) + 1;
		countByDiff.set(difference, diffCount);

		ans += i + 1 - diffCount;
	}

	return ans;
};

const case1 = countBadPairs([4,1,3,3]);
const case2 = countBadPairs([1,2,3,4,5]);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
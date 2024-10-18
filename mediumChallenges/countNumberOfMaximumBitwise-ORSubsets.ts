// First Approach - Backtracking approach which pre calculate maxOR value from by every number and count up subarray with this maxOR value, returning it at the end. (https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5928761/beats-96-00-step-by-step-breakdown/?envType=daily-question&envId=2024-10-18)
function countMaxOrSubsets(nums: number[]) {
	let maxOR = 0;

	for(let num of nums) {
		maxOR |= num;
	}

	let count = 0;

	function backtrack(index: number, currentOR: number) {
		if(currentOR === maxOR) {
			count++;
		}

		for(let i = index; i < nums.length; i++) {
			backtrack(i + 1, currentOR | nums[i]);
		}
	};

	backtrack(0, 0);

	return count;
};

const case1 = countMaxOrSubsets([3,1]);
const case2 = countMaxOrSubsets([2,2,2]);
const case3 = countMaxOrSubsets([3,2,1,5]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 7}`);
console.log(`case3: ${case3} // ${case3 === 6}`);
// First Approach - Interactively passing through array and summing up numbers which are strictly
// increasing and resetting whenever it's not true, maxing maxSum variable value. (0ms - Beats 100.00%)
function maxAscendingSum(nums: number[]): number {
	let maxSum = nums[0], actlSum = nums[0];
	for(let i = 1; i < nums.length; i++) {
		if(nums[i] > nums[i - 1]) {
			actlSum += nums[i];
		} else
			actlSum = nums[i];

		maxSum = Math.max(maxSum, actlSum);
	}

	return maxSum;
};

const case1 = maxAscendingSum([10,20,30,5,10,50]);
const case2 = maxAscendingSum([10,20,30,40,50]);
const case3 = maxAscendingSum([12,17,15,13,10,11,12]);
const case4 = maxAscendingSum([3,6,10,1,8,9,9,8,9]);

console.log(`case1: ${case1} // ${case1 === 65}`);
console.log(`case2: ${case2} // ${case2 === 150}`);
console.log(`case3: ${case3} // ${case3 === 33}`);
console.log(`case4: ${case4} // ${case4 === 19}`);
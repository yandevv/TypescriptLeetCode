// First Approach - Recursive method iterating over all combinations that increase
// and decrease every number, returning the number of leaves that match with target. (1295ms - Beats 28.68%)
function findTargetSumWays(nums: number[], target: number, actualSum: number = 0, index: number = 0): number {
	if(index === nums.length)
		return actualSum === target ? 1 : 0;

	return findTargetSumWays(nums, target, actualSum + nums[index], index + 1) + findTargetSumWays(nums, target, actualSum - nums[index], index + 1);
};

// Second Approach - DP method calculating the quantity of sums for each index of nums increasing interactively with last sum quantities. (17ms - Beats 88.37%)
function findTargetSumWays(nums: number[], target: number): number {
	const maxSumNums = nums.reduce((prev, num) => prev + num);

	const dp: number[][] = new Array(nums.length);
	for(let i = 0; i < dp.length; i++) {
		dp[i] = new Array(maxSumNums * 2 + 1).fill(0);
	}

	if(nums[0] === 0) {
		dp[0][maxSumNums] = 2;
	} else {
		dp[0][maxSumNums - nums[0]]++;
		dp[0][maxSumNums + nums[0]]++;
	}

	for(let i = 1; i < nums.length; i++) {
		const lastDp = dp[i - 1];
		for(let j = 0; j < lastDp.length; j++) {
			if(lastDp[j] !== 0) {
				dp[i][j + nums[i]] += lastDp[j];
				dp[i][j - nums[i]] += lastDp[j];
			}
		}
	}

	return dp[nums.length - 1][maxSumNums + target] ?? 0;
};

const case1 = findTargetSumWays([1,1,1,1,1], 3);
const case2 = findTargetSumWays([1], 1);
const case3 = findTargetSumWays([0,0,0,0,0,0,0,0,1], 1);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
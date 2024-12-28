// First Approach - Prefix Sum with DP precalculating the best indices from left and right to find the final three indices at the end.
// (https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/6195672/beats-80-users-with-java-typescript-array-dynamic-programming/?envType=daily-question&envId=2024-12-28)
function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
	const n = nums.length;
	const sumArr = new Array(n + 1).fill(0);
	for(let i = 0; i < n; i++) {
		sumArr[i + 1] = sumArr[i] + nums[i];
	}

	const left = new Array(n).fill(0);
	const right = new Array(n).fill(0);
	const result = [0, 0, 0];

	// Compute left array
	let maxLeftIndex = 0;
	for(let i = k - 1; i < n; i++) {
		if(sumArr[i + 1] - sumArr[i + 1 - k] > sumArr[maxLeftIndex + k] - sumArr[maxLeftIndex]) {
			maxLeftIndex = i + 1 - k;
		}
		left[i] = maxLeftIndex;
	}

	// Compute right array
	let maxRightIndex = n - k;
	for(let i = n - k; i >= 0; i--) {
		if(sumArr[i + k] - sumArr[i] >= sumArr[maxRightIndex + k] - sumArr[maxRightIndex]) {
			maxRightIndex = i;
		}
		right[i] = maxRightIndex;
	}

	// Find the maximum sum for the three subarrays
	let maxSum = 0;
	for(let i = k; i <= n - 2 * k; i++) {
		const l = left[i - 1];
		const r = right[i + k];
		const totalSum =
			(sumArr[l + k] - sumArr[l]) +
			(sumArr[i + k] - sumArr[i]) +
			(sumArr[r + k] - sumArr[r]);
		if(totalSum > maxSum) {
			maxSum = totalSum;
			result[0] = l;
			result[1] = i;
			result[2] = r;
		}
	}

	return result;
}

const case1 = maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2);
const case2 = maxSumOfThreeSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1], 2);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
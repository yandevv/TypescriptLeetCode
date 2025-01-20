// First Approach - Prefix Sum method precalculating all the nums and iterating over nums again counting up the splits. (20ms - Beats 41.18%)
function waysToSplitArray(nums: number[]): number {
	const prefixSum = [0], n = nums.length;
	for(let i = 0; i < n; i++) {
		prefixSum[i + 1] = prefixSum[i] + nums[i];
	}

	let splitCount = 0;
	for(let i = 0; i < n - 1; i++) {
		const firstSplitSum = prefixSum[i + 1];
		const secondSplitSum = prefixSum[n] - prefixSum[i + 1];

		if(firstSplitSum >= secondSplitSum)
			splitCount++;
	}

	return splitCount;
};

// Second Approach - Total Sum method precalculating all the nums sum and iterating over
// nums again subtracting from total the left sum, comparing with the right and counting
// up the splits. (Top submit on submissions graph - 9ms - Beats 90.20%)
function waysToSplitArray(nums: number[]): number {
	const n = nums.length;
	let total = 0;
	for(let i = 0; i < n; i++) {
		total += nums[i];
	}

	let left = 0;
	let splitCount = 0;
	for(let i = 0; i < n - 1; i++) {
		left += nums[i];
		const right = total - left;

		if(left >= right) {
			splitCount++;
		}
	}

	return splitCount;
};

const case1 = waysToSplitArray([10,4,-8,7]);
const case2 = waysToSplitArray([2,3,1,0]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
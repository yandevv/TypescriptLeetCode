// First Approach - One pass iteration comparing the last number with the actual, increasing,
// decreasing and resetting count variables maximizing the length of subarray. (0ms - Beats 100.00%)
function longestMonotonicSubarray(nums: number[]): number {
	let maxLength = 1, maxIncreasing = 1, maxDecreasing = 1;
	for(let i = 1; i < nums.length; i++) {
		if(nums[i] > nums[i - 1]) {
			maxIncreasing++;
			maxDecreasing = 1;
		} else if(nums[i] < nums[i - 1]) {
			maxDecreasing++;
			maxIncreasing = 1;
		} else {
			maxIncreasing = 1;
			maxDecreasing = 1;
		}

		maxLength = Math.max(maxLength, maxIncreasing, maxDecreasing);
	}

	return maxLength;
};

const case1 = longestMonotonicSubarray([1,4,3,3,2]);
const case2 = longestMonotonicSubarray([3,3,3,3]);
const case3 = longestMonotonicSubarray([3,2,1]);
const case4 = longestMonotonicSubarray([1]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === 3}`);
console.log(`case4: ${case4} // ${case4 === 0}`);
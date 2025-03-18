// First Approach - Sliding window method iterating over nums and checking if carrying bits ANDed with right number
// is equal to zero, if so it's ORed to usedBits and maxLength is updated. (https://leetcode.com/problems/longest-nice-subarray/solutions/6549421/sliding-window-python-c-java-js-c-go-rust-swift/?envType=daily-question&envId=2025-03-18)
function longestNiceSubarray(nums: number[]): number {
  let n = nums.length;
  let maxLength = 1;
  let left = 0;
  let usedBits = 0;

  for (let right = 0; right < n; right++) {
    while ((usedBits & nums[right]) !== 0) {
      usedBits ^= nums[left];
      left++;
    }

    usedBits |= nums[right];
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const case1 = longestNiceSubarray([1, 3, 8, 48, 10]);
const case2 = longestNiceSubarray([3, 1, 5, 11, 13]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
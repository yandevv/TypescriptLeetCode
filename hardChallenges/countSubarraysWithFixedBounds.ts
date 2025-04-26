// First Approach - Sliding Window method resetting the left pointer whenever it finds a number out of bounds of constraints
// and incrementing answer based on the minimum and maximum indexes of the last valid minK and maxK values on nums.
// (https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/6687374/sliding-window-in-single-loop-beats-100/?envType=daily-question&envId=2025-04-26)
function countSubarrays(nums: number[], minK: number, maxK: number): number {
  const s = nums.length;
  let ans = 0, maxI = -1, minI = -1;
  for(let r = 0, l = 0; r < s; r++) {
    const x = nums[r];
    if(x < minK || x > maxK) {
      l = r + 1;
      continue;
    }

    if(x === maxK)
      maxI = r;

    if(x === minK)
      minI = r;

    ans += Math.max(0, Math.min(maxI, minI) - l + 1);
  }

  return ans;
};

const case1 = countSubarrays([1,3,5,2,7,5], 1, 5);
const case2 = countSubarrays([1,1,1,1], 1, 1);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 10}`);
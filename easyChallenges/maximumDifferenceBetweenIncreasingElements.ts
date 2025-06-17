// First Approach - Suffix array with the maximum number ahead from the index, being able to track the biggest
// number to compare with the actual index. (1ms - Beats 60.00%)
function maximumDifference(nums: number[]): number {
  const n = nums.length;

  const maxNumber: number[] = [];
  maxNumber[n - 1] = nums[n - 1];

  for(let i = n - 2; i >= 0; i--)
    maxNumber[i] = Math.max(nums[i], maxNumber[i + 1]);

  let maxDiff = -1;
  for(let i = 0; i < n - 1; i++) {
    if(nums[i] < maxNumber[i + 1]) {
      maxDiff = Math.max(maxDiff, Math.abs(maxNumber[i + 1] - nums[i]));
    }
  }

  return maxDiff;
};

// Second Approach - Tracking the actual minimum number seen so far, comparing it with the current number if it's greater, updating the answer
// if the difference is greater than the previous one. (Editorial Solution)
function maximumDifference(nums: number[]): number {
  const n = nums.length;

  let ans = -1, premin = nums[0];
  for(let i = 1; i < n; ++i) {
    if(nums[i] > premin) {
      ans = Math.max(ans, nums[i] - premin);
    } else
      premin = nums[i];
  }
  return ans;
};

const case1 = maximumDifference([7,1,5,4]);
const case2 = maximumDifference([9,4,3,2]);
const case3 = maximumDifference([1,5,2,10]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
console.log(`case3: ${case3} // ${case3 === 9}`);
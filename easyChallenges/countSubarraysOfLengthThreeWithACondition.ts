// First Approach - Brute force iterating over the array comparing the sum times 2 with the
// middle element (to check if the sum is equal to middle element divided by 2).
// (0ms - Beats 100.00%)
function countSubarrays(nums: number[]): number {
  let ans = 0;
  for(let i = 2; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 2];
    ans += sum * 2 === nums[i - 1] ? 1 : 0;
  }

  return ans;
};

const case1 = countSubarrays([1,2,1,4,1]);
const case2 = countSubarrays([1,1,1]);
const case3 = countSubarrays([0,-4,-4]);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
// First Approach - Simple brute force iterating over all array comparing with adjacent elements and
// loop on the end to compare first and last elements. (0ms - Beats 100.00%)
function maxAdjacentDistance(nums: number[]): number {
  let maximumDifference = Math.abs(nums[0] - nums[1]);

  for(let i = 1; i < nums.length - 1; i++)
    maximumDifference = Math.max(maximumDifference, Math.abs(nums[i] - nums[i + 1]));

  maximumDifference = Math.max(maximumDifference, Math.abs(nums[nums.length - 1] - nums[0]));

  return maximumDifference;
};

const case1 = maxAdjacentDistance([1,2,4]);
const case2 = maxAdjacentDistance([-5,-10,-5]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 5}`);

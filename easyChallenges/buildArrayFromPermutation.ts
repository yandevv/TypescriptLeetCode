// First Approach - Brute force iterating and constructing the array based on the actual index. (0ms - Beats 100.00%)
function buildArray(nums: number[]): number[] {
  const result: number[] = [];
  for(let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }

  return result;
};

const case1 = buildArray([0,2,1,5,3,4]);
const case2 = buildArray([5,0,1,2,3,4]);

console.log(`case1: ${case1} // Should be: [0,1,2,4,5,3]`);
console.log(`case2: ${case2} // Should be: [4,5,0,1,2,3]`);
// First Approach - Sliding window method changing bits in order and, if gets off bound of
// sliding window it returns -1, otherwise the swap count. (4ms - Beats 100.00%)
function minOperations(nums: number[]): number {
  let swaps = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      if(i + 1 >= nums.length || i + 2 >= nums.length)
        return -1;

      nums[i + 1] = nums[i + 1] === 0 ? 1 : 0;
      nums[i + 2] = nums[i + 2] === 0 ? 1 : 0;

      swaps++;
    }
  }

  return swaps;
};

const case1 = minOperations([0,1,1,1,0,0]);
const case2 = minOperations([0,1,1,1]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
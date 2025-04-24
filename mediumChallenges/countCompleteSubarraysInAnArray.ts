// First Approach - Sliding window method hashmapping number count of actual window and their distinct
// number count based in the hashmap manipulation, and whenever the full array distinct number count
// is equal to the actual window distinct number count, we can add the remaining subarrays count
// to the answer, and then we can remove the first number of the window and check if the distinct
// number count is still equal to the full array distinct number count, if not we can remove it from
// the hashmap and decrease the actual window distinct number count. (6ms - Beats 87.50%)
function countCompleteSubarrays(nums: number[]): number {
  const distinctNums = new Set(nums);

  const numsCount = new Map<number, number>();
  let actlDistinctNums = 0, i = 0, ans = 0;
  for(let j = 0; j < nums.length; j++) {
    const num = nums[j];
    if(numsCount.has(num)) {
      numsCount.set(num, numsCount.get(num)! + 1);
    } else {
      numsCount.set(num, 1);
      actlDistinctNums++;
    }

    while(actlDistinctNums === distinctNums.size) {
      ans += nums.length - j;
      if(numsCount.get(nums[i])! > 1) {
        numsCount.set(nums[i], numsCount.get(nums[i])! - 1);
      } else {
        numsCount.delete(nums[i]);
        actlDistinctNums--;
      }
      i++;
    }
  }

  return ans;
};

// Second Approach - Same method as first approach but optimized and simpler. (3ms - Beats 100.00%)
function countCompleteSubarrays(nums: number[]): number {
  const distinctNums = new Set(nums).size, numsCount = new Map<number, number>();
  let i = 0, ans = 0;
  for(let j = 0; j < nums.length; j++) {
    const num = nums[j];
    numsCount.set(num, (numsCount.get(num) || 0) + 1);
    while(numsCount.size === distinctNums) {
      ans += nums.length - j;

      const leftestNum = nums[i];
      numsCount.set(leftestNum, numsCount.get(leftestNum)! - 1);

      if(numsCount.get(leftestNum) === 0)
        numsCount.delete(leftestNum);

      i++;
    }
  }

  return ans;
};

const case1 = countCompleteSubarrays([1,3,1,2,2]);
const case2 = countCompleteSubarrays([5,5,5,5]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 10}`);
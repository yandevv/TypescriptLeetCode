// First Approach - Summation and sliding window method, summating pairs based on the number
// of occurrences of each number. (34ms - Beats 100.00%)
function countGood(nums: number[], k: number): number {
  const numsCount: Map<number, number> = new Map(), n = nums.length;
  numsCount.set(nums[0], 1);

  let pairsCount = 0, ans = 0, l = 0;
  for(let r = 1; r < n; r++) {
    numsCount.set(nums[r], (numsCount.get(nums[r]) || 0) + 1);
    pairsCount += numsCount.get(nums[r])! - 1;

    while(pairsCount >= k) {
      ans += n - r;

      pairsCount -= numsCount.get(nums[l])! - 1;
      numsCount.set(nums[l], numsCount.get(nums[l])! - 1);
      l++;
    }
  }

  return ans;
};

const case1 = countGood([1,1,1,1,1], 10);
const case2 = countGood([3,1,4,3,2,2,4], 2);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
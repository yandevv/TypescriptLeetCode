// First Approach - Brute force method iterating over all pairs checking constraints. (1ms - Beats 100.00%)
function countPairs(nums: number[], k: number): number {
  const n = nums.length;

  let ans = 0;
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      if(i * j % k === 0 && nums[i] === nums[j]) {
        ans++;
      }
    }
  }

  return ans;
};

const case1 = countPairs([3,1,2,2,2,1,3], 2);
const case2 = countPairs([1,2,3,4], 1);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
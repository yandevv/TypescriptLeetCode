// First Approach - Two Pointer precomputing powers of 2 of size n, calculating possible subsequences
// based on the window size defined by the two pointers.
// (https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/6896464/beginner-freindly-java-c-python-js/?envType=daily-question&envId=2025-06-29)
function numSubseq(nums: number[], target: number): number {
  const MOD = 1e9 + 7, n = nums.length;
  nums.sort((a, b) => a - b);

  const power = Array(n).fill(1);
  for(let i = 1; i < n; i++) {
    power[i] = (power[i - 1] * 2) % MOD;
  }

  let left = 0, right = n - 1, count = 0;
  while(left <= right) {
    if(nums[left] + nums[right] > target) {
      right--;
    } else {
      count = (count + power[right - left]) % MOD;
      left++;
    }
  }

  return count;
};

const case1 = numSubseq([3,5,6,7], 9);
const case2 = numSubseq([3,3,6,8], 10);
const case3 = numSubseq([2,3,3,4,6,7], 12);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 6}`);
console.log(`case3: ${case3} // ${case3 === 61}`);

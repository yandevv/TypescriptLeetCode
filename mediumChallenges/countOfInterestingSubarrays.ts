// First Try - Sliding Window method to count interesting subarrays based on ongoing cnt of modulo
// resulted in k but wrong as cnt can change being not cnt % modulo === k. (253 / 617 testcases passed)
// function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
//   let left = 0, cnt = 0, ans = 0;
//   for(let right = 0; right < nums.length; right++) {
//     if(nums[right] % modulo === k) {
//       cnt++;
//     }

//     while(cnt % modulo === k && cnt > 0) {
//       ans += nums.length - right;

//       if(nums[left] % modulo === k) {
//         cnt--;
//       }

//       left++;
//     }
//   }

//   return ans + (k === 0 ? 1 : 0);
// };

// Second Try - Brute Force and Prefix sum method to count interesting subarrays with an
// O(n^2) for loop. (Time Limit Exceeded - 609 / 617 testcases passed)
// function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
//   const n = nums.length, prefixSum = [0];
//   for(let i = 0; i < n; i++) {
//     prefixSum[i + 1] = prefixSum[i] + (nums[i] % modulo === k ? 1 : 0);
//   }

//   let ans = 0;
//   for(let i = 0; i <= n; i++)
//     for(let j = i + 1; j <= n; j++)
//       if((prefixSum[j] - prefixSum[i]) % modulo === k)
//         ans++;

//   return ans;
// };

// First Approach - Prefix sum and Hashmap method used to calculated and track the count of interesting
// subarrays based in the index. (https://leetcode.com/problems/count-of-interesting-subarrays/editorial/?envType=daily-question&envId=2025-04-25)
function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
  const n = nums.length, cnt = new Map<number, number>();
  cnt.set(0, 1);

  let res = 0, prefix = 0;
  for(let i = 0; i < n; i++) {
    prefix += nums[i] % modulo === k ? 1 : 0;
    res += cnt.get((prefix - k + modulo) % modulo) || 0;
    cnt.set(prefix % modulo, (cnt.get(prefix % modulo) || 0) + 1);
  }

  return res;
}

const case1 = countInterestingSubarrays([3,2,4], 2, 1);
const case2 = countInterestingSubarrays([3,1,9,6], 3, 0);
const case3 = countInterestingSubarrays([11,12,21,31], 10, 1);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 5}`);
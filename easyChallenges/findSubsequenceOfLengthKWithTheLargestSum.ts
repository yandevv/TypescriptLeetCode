// First Try - DFSing nums to find the max subsequence of length k, both including or excluding the current
// number to the sequences, testing all possible subsequences.
// (Time Limit Exceeded - 12/49 testcases passed)
// function maxSubsequence(nums: number[], k: number): number[] {
//   let ans: number[] = [], maxSum = Number.NEGATIVE_INFINITY;
//   function dfs(stack: number[], index: number, sum: number) {
//     if(stack.length === k) {
//       if(sum > maxSum) {
//         maxSum = sum;
//         ans = stack;
//       }
//       return;
//     }

//     if(index >= nums.length) {
//       return;
//     }

//     dfs([...stack, nums[index]], index + 1, sum + nums[index]);

//     dfs([...stack], index + 1, sum);

//     return;
//   }

//   dfs([], 0, 0);

//   return ans;
// };

// First Approach - Sorting the array and taking the first k elements, then sorting them by their original
// index to maintain the order stated in problem. (4ms - Beats 85.00%)
function maxSubsequence(nums: number[], k: number): number[] {
  const sorted = nums.map((num, index) => ({ num, index }))
    .sort((a, b) => b.num - a.num)
    .slice(0, k)
    .sort((a, b) => a.index - b.index);

  return sorted.map(item => item.num);
};

const case1 = maxSubsequence([2,1,3,3], 2);
const case2 = maxSubsequence([-1,-2,3,4], 3);
const case3 = maxSubsequence([3,4,3,3], 2);
const case4 = maxSubsequence([-76,-694,44,197,357,-833,-277,358,724,-585,-960,214,465,-593,-431,625,-83,58,-889,31,765,8,-17,476,992,803,863,242,379,561,673,526,-447], 14);

console.log(`case1: ${case1} // Should be: [3,3]`);
console.log(`case2: ${case2} // Should be: [-1,3,4]`);
console.log(`case3: ${case3} // Should be: [3,4]`);
console.log(`case4: ${case4} // Should be: [357,358,724,465,625,765,476,992,803,863,379,561,673,526]`);

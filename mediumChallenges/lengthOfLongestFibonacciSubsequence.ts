// First Approach - Iterating over arr tracking with 2D DP array the number of longest fibonacci subsequence.
// (https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/6472833/two-pointers-dynamic-programming-longest-fibonacci-subsequence/?envType=daily-question&envId=2025-02-27)
function lenLongestFibSubseq(arr) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => Array(n).fill(0));
  let maxLen = 0;

  for(let curr = 2; curr < n; curr++) {
    let start = 0, end = curr - 1;
    while(start < end) {
      let pairSum = arr[start] + arr[end];

      if(pairSum > arr[curr]) {
        end--;
      } else if(pairSum < arr[curr]) {
        start++;
      } else {
        dp[end][curr] = dp[start][end] + 1;
        maxLen = Math.max(dp[end][curr], maxLen);
        end--;
        start++;
      }
    }
  }

  return maxLen === 0 ? 0 : maxLen + 2;
};

const case1 = lenLongestFibSubseq([1,2,3,4,5,6,7,8]);
const case2 = lenLongestFibSubseq([1,3,7,11,12,14,18]);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
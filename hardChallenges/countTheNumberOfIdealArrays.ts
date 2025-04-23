// First Approach - Dynamic programming and combinatorics method precalculating the possible chain
// of numbers (max. 14 based on constraints) to each i from 1 to maxValue, and with those values
// is possible to calculate the number of ways to form a ideal array of size n with
// combinatorics. (https://leetcode.com/problems/count-the-number-of-ideal-arrays/?envType=daily-question&envId=2025-04-22)
function idealArrays(n: number, maxValue: number): number {
  const MOD = 1e9 + 7;
  const MAX = 10001;
  const cnt: number[][] = Array.from({ length: MAX }, () => Array(14).fill(0));
  const dp: number[][] = Array.from({ length: MAX }, () => Array(14).fill(0));

  for(let i = 0; i < MAX; i++) {
    dp[i][0] = 1;
    for(let j = 1; j <= Math.min(i, 13); j++) {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
    }
  }

  for(let cur = 1; cur < MAX; cur++) {
    cnt[cur][0]++;
    for(let i = cur * 2; i < MAX; i += cur) {
      for(let bars = 0; bars < 13; bars++) {
        if(cnt[cur][bars]) {
          cnt[i][bars + 1] += cnt[cur][bars];
        }
      }
    }
  }

  let res = 0;
  for(let i = 0; i <= maxValue; i++) {
    for(let bars = 0; bars < Math.min(14, n); bars++) {
      res = (res + cnt[i][bars] * dp[n - 1][bars]) % MOD;
    }
  }
  return res;
}

const case1 = idealArrays(2, 5);
const case2 = idealArrays(5, 3);

console.log(`case1: ${case1} // ${case1 === 10}`);
console.log(`case2: ${case2} // ${case2 === 11}`);
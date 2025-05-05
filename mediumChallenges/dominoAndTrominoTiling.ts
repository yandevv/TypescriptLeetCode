// First Approach - Dynamic Programming method using tabulation to calculate and sum the number of ways
// to tile a 2 x n board with dominoes and trominoes. (https://leetcode.com/problems/domino-and-tromino-tiling/solutions/6715436/recursion-tabulation-math-bonus-o-1-at-end-with-images-hashmap-c-python-java/?envType=daily-question&envId=2025-05-05)
function numTilings(n: number): number {
  const mod = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);

  // Base cases
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;

  for(let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
  }

  return dp[n];
};

const case1 = numTilings(3);
const case2 = numTilings(1);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
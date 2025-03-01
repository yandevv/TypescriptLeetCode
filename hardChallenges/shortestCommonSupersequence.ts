// First Approach - Backtracking approach with LCS algo to find longest common subsequence, adding the characters
// that don't match in LCS at result and returning it. (https://leetcode.com/problems/shortest-common-supersequence/solutions/6476374/dynamic-programming-shortest-common-supersequence-optimized-approach/?envType=daily-question&envId=2025-02-28)
function shortestCommonSupersequence(str1: string, str2: string) {
  let m = str1.length, n = str2.length;

  let lcs = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for(let i = 1; i <= m; i++) {
    for(let j = 1; j <= n; j++) {
      if(str1[i - 1] === str2[j - 1]) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1];
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  let i = m, j = n;
  let result: string[] = [];

  while(i > 0 && j > 0) {
    if(str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--; j--;
    } else if(lcs[i - 1][j] > lcs[i][j - 1]) {
      result.push(str1[i - 1]);
      i--;
    } else {
      result.push(str2[j - 1]);
      j--;
    }
  }

  while(i > 0)
    result.push(str1[--i]);
  while(j > 0)
    result.push(str2[--j]);

  return result.reverse().join("");
};

const case1 = shortestCommonSupersequence("abac", "cab");
const case2 = shortestCommonSupersequence("aaaaaaaa", "aaaaaaaa");

console.log(`case1: ${case1} // ${case1 === 'cabac'}`);
console.log(`case2: ${case2} // ${case2 === 'aaaaaaaa'}`);
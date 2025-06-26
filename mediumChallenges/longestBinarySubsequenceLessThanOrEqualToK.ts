// First Approach - Greedy approach iterating s backwards adding zeros and ones if the sum of powers of
// two based on the binary length is less than or equal to k. (0ms - Beats 100.00%)
function longestSubsequence(s: string, k: number): number {
  let count = 0, actlPower = 1, sum = 0;
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === '0') {
      count++;
    } else if(s[i] === '1' && sum + actlPower <= k) {
      sum += actlPower;
      count++;
    }

    actlPower *= 2;
  }

  return count;
};

const case1 = longestSubsequence("1001010", 5);
const case2 = longestSubsequence("00101001", 1);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 6}`);

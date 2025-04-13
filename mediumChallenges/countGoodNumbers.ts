// First Approach - Math method using combinatorics to calculate based on the count of odd and even indices
// and applying exponentiation (with quick exponentiation algo) resulting the possibilities of arrangements.
// (https://leetcode.com/problems/count-good-numbers/editorial/?envType=daily-question&envId=2025-04-13)
function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
  let result = 1n;
  while(exp > 0n) {
    if(exp % 2n === 1n)
      result = (result * base) % mod;

    base = (base * base) % mod;
    exp = exp / 2n;
  }

  return result;
}

function countGoodNumbers(n: number | bigint): number {
  const mod = 1_000_000_007n;

  n = BigInt(n);

  const even = (n + 1n) / 2n;
  const odd = n / 2n;

  const pow5 = modPow(5n, even, mod);
  const pow4 = modPow(4n, odd, mod);

  return Number((pow5 * pow4) % mod);
}

const case1 = countGoodNumbers(1);
const case2 = countGoodNumbers(4);
const case3 = countGoodNumbers(50);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 400}`);
console.log(`case3: ${case3} // ${case3 === 564908303}`);
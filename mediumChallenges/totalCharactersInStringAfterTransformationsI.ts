// First Approach - Simulation method tracking the letter count by every transformation modulo 10^9+7,
// and reducing the letter count at the end. (215ms - Beats 100.00% LOL)
function lengthAfterTransformations(s: string, t: number): number {
  const letterCount: number[] = new Array(26).fill(0);

  for(let i = 0; i < s.length; i++) {
    letterCount[s.charCodeAt(i) - 97]++;
  }

  for(let i = 0; i < t; i++) {
    const oldCount = [...letterCount];
    letterCount[0] = oldCount[25] % 1_000_000_007;
    letterCount[1] = oldCount[0] % 1_000_000_007;
    letterCount[1] += oldCount[25] % 1_000_000_007;
    letterCount[2] = oldCount[1] % 1_000_000_007;
    letterCount[3] = oldCount[2] % 1_000_000_007;
    letterCount[4] = oldCount[3] % 1_000_000_007;
    letterCount[5] = oldCount[4] % 1_000_000_007;
    letterCount[6] = oldCount[5] % 1_000_000_007;
    letterCount[7] = oldCount[6] % 1_000_000_007;
    letterCount[8] = oldCount[7] % 1_000_000_007;
    letterCount[9] = oldCount[8] % 1_000_000_007;
    letterCount[10] = oldCount[9] % 1_000_000_007;
    letterCount[11] = oldCount[10] % 1_000_000_007;
    letterCount[12] = oldCount[11] % 1_000_000_007;
    letterCount[13] = oldCount[12] % 1_000_000_007;
    letterCount[14] = oldCount[13] % 1_000_000_007;
    letterCount[15] = oldCount[14] % 1_000_000_007;
    letterCount[16] = oldCount[15] % 1_000_000_007;
    letterCount[17] = oldCount[16] % 1_000_000_007;
    letterCount[18] = oldCount[17] % 1_000_000_007;
    letterCount[19] = oldCount[18] % 1_000_000_007;
    letterCount[20] = oldCount[19] % 1_000_000_007;
    letterCount[21] = oldCount[20] % 1_000_000_007;
    letterCount[22] = oldCount[21] % 1_000_000_007;
    letterCount[23] = oldCount[22] % 1_000_000_007;
    letterCount[24] = oldCount[23] % 1_000_000_007;
    letterCount[25] = oldCount[24] % 1_000_000_007;
  }

  return letterCount.reduce((acc, count) => acc + count, 0) % 1_000_000_007;
};

const case1 = lengthAfterTransformations("abcyy", 2);
const case2 = lengthAfterTransformations("azbk", 1);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
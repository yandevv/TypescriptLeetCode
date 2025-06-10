// Fist Approach - Mapping character count based on their ASCII value and then finding the maximum odd and
// minimum even counts to calculate the difference. (0ms - Beats 100.00%)
function maxDifference(s: string): number {
  const charCount: number[] = Array(26).fill(0);

  for(let i = 0; i < s.length; i++)
    charCount[s.charCodeAt(i) - 97]++;

  let minimumEven = Number.MAX_SAFE_INTEGER, maximumOdd = -1;

  for(const count of charCount) {
    if(count === 0)
      continue;

    if(count % 2 === 0) {
      minimumEven = Math.min(minimumEven, count);
    } else {
      maximumOdd = Math.max(maximumOdd, count);
    }
  }

  return maximumOdd - minimumEven;
};

const case1 = maxDifference("aaaaabbc");
const case2 = maxDifference("abcabcab");
const case3 = maxDifference("ililm");

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === -1}`);
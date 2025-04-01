// First Approach - Sorting approach through bag boundary definition between adjacent elements,
// sorting all possible boundaries and summing the first and last k - 1 cutting points,
// returning the last - first sums. (https://leetcode.com/problems/put-marbles-in-bags/?envType=daily-question&envId=2025-03-31)
function putMarbles(weights: number[], k: number): number {
  if(k === 1 || weights.length === k) {
    return 0;
  }

  const pairSums: number[] = [];
  for(let i = 0; i < weights.length - 1; i++) {
    pairSums.push(weights[i] + weights[i + 1]);
  }

  pairSums.sort((a, b) => a - b);

  console.log("🚀 ~ putMarbles ~ pairSums:", pairSums)

  let minScore = 0, maxScore = 0;
  for(let i = 0; i < k - 1; i++) {
    minScore += pairSums[i];
    maxScore += pairSums[pairSums.length - i - 1];
  }

  return maxScore - minScore;
};

const case1 = putMarbles([1,3,5,1], 2);
const case2 = putMarbles([1,3], 2);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
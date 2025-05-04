// First Try - Brute force checking every pair of dominoes and counting the equivalent
// ones. (Time Limit Exceeded - 18 / 19 testcases passed)
// function numEquivDominoPairs(dominoes: number[][]): number {
//   let ans = 0;
//   for(let i = 0; i < dominoes.length; i++) {
//     for(let j = i + 1; j < dominoes.length; j++) {
//       const [topI, bottomI] = dominoes[i];
//       const [topJ, bottomJ] = dominoes[j];

//       const topWithBottomValidation = topI === topJ && bottomI === bottomJ;
//       const bottomWithTopValidation = topI === bottomJ && bottomI === topJ;

//       if(topWithBottomValidation || bottomWithTopValidation)
//         ans++;
//     }
//   }

//   return ans;
// };

// First Approach - Greedy approach tracking every domino occurrence based on theirs tops and
// bottoms pieces on an array, therefore when a equivalent piece appears it is summed with
// answer. (4ms - Beats 100.00%)
function numEquivDominoPairs(dominoes: number[][]): number {
  const dominoesOccurrences: number[][] = [];
  let ans = 0;
  for(let i = 0; i < dominoes.length; i++) {
    ans += dominoesOccurrences[dominoes[i][0]]?.[dominoes[i][1]] || 0;

    if(dominoes[i][0] !== dominoes[i][1])
      ans += dominoesOccurrences[dominoes[i][1]]?.[dominoes[i][0]] || 0;

    if(!dominoesOccurrences[dominoes[i][0]]) {
      dominoesOccurrences[dominoes[i][0]] = [];
    }

    dominoesOccurrences[dominoes[i][0]][dominoes[i][1]] = (dominoesOccurrences[dominoes[i][0]][dominoes[i][1]] || 0) + 1;
  }

  return ans;
};

const case1 = numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]);
const case2 = numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]);
const case3 = numEquivDominoPairs([[1,1],[2,2],[1,1],[1,2],[1,2],[1,1]]);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
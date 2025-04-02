// First Try - Brute force DFSing every possible path of questions and maxing answer.
// (Time Limit Exceeded - 21 / 54 testcases passed)
// function mostPoints(questions: number[][], index = 0, carryPoints = 0): number {
//   if(index >= questions.length)
//     return carryPoints;

//   let bestCarrySum = 0;
//   for(let i = index; i < questions.length; i++) {
//     bestCarrySum = Math.max(bestCarrySum, mostPoints(questions, i + questions[i][1] + 1, carryPoints + questions[i][0]));
//   }

//   return bestCarrySum;
// };

// First Approach - DP method calculating from backwards ith max score based in scores previously calculated.
// (https://leetcode.com/problems/solving-questions-with-brainpower/solutions/6601759/1-5ms-clear-easy-with-explanation-1-5ms-beats-98-08-100-o-n-89-6-92mb-o-n/?envType=daily-question&envId=2025-04-01)
function mostPoints(questions: number[][]): number {
  const n = questions.length;

  const dp = new Float64Array(n + 1).fill(0);

  for(let i = n - 1; i >= 0; i--) {
    const nextIndex = i + questions[i][1] + 1;
    dp[i] = Math.max(dp[i + 1], questions[i][0] + dp[Math.min(nextIndex, n)]);
  }

  return dp[0];
}

const case1 = mostPoints([[3,2],[4,3],[4,4],[2,5]]);
const case2 = mostPoints([[1,1],[2,2],[3,3],[4,4],[5,5]]);
console.time('case3');
const case3 = mostPoints([[29,1],[90,5],[41,5],[46,3],[49,5],[49,2],[6,5],[36,5],[83,1],[60,2],[97,3],[54,2],[42,5],[42,2],[73,4],[38,4],[16,4],[44,2],[81,2],[76,3],[60,4],[83,4],[94,2],[13,5],[7,2],[77,2],[18,2],[91,2],[43,4],[84,2],[45,1],[42,5],[54,4],[18,4],[96,5],[44,3],[55,4],[49,3],[86,2],[41,3],[54,3],[66,2],[22,3],[35,5],[89,3],[61,2],[1,3],[72,1],[13,3],[70,4],[12,4],[35,5],[16,3],[67,3],[70,3],[5,4],[74,4],[36,1],[47,2],[72,1]]);
console.timeEnd('case3');

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 7}`);
console.log(`case3: ${case3} // ${case3 === 1113}`);
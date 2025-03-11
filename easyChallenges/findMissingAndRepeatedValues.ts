// First Approach - Math method with arithmetic progression to calculate the target total sum of matrix and
// discover missing number, and tracking the numbers with a Set to find the repeated number. (4ms - Beats 70.91%)
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length, termsQuantity = n ** 2, appearedNumbers: Set<number> = new Set();
  const targetSum = termsQuantity / 2 * (2 + termsQuantity - 1);

  let matrixSum = 0;
  const ans: number[] = [];
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(appearedNumbers.has(grid[i][j])) {
        ans[0] = grid[i][j];
        continue;
      }

      matrixSum += grid[i][j];
      appearedNumbers.add(grid[i][j]);
    }
  }

  ans[1] = targetSum - matrixSum;

  return ans;
};

const case1 = findMissingAndRepeatedValues([[1,3],[2,2]]);
const case2 = findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]);

console.log(`case1: ${case1} // Should be: [2,4]`);
console.log(`case2: ${case2} // Should be: [9,5]`);
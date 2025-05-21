// First Approach = Iterating over the matrix and storing the indexes of the zeros and then iterating over the indexes
// and setting the row to a new array of zeros and then setting the column values to zeros. (4ms - Beats 55.36%)
function setZeroes(matrix: number[][]): void {
  const n = matrix.length;
  const m = matrix[0].length;

  const zeroIndexes: number[][] = [];
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
      if(matrix[i][j] === 0) {
        zeroIndexes.push([i, j]);
      }
    }
  }

  for(let i = 0; i < zeroIndexes.length; i++) {
    const [row, col] = zeroIndexes[i];

    matrix[row] = Array(m).fill(0);

    for(let j = 0; j < n; j++) {
      matrix[j][col] = 0;
    }
  }
};

const case1Array = [[1,1,1],[1,0,1],[1,1,1]];
const case1 = setZeroes(case1Array);
const case2Array = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
const case2 = setZeroes(case2Array);

console.log(`case1: ${case1Array}`);
console.log(`case2: ${case2Array}`);
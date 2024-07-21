// First Try - Ascending sorting rowSum and colSum to get the lowest to highest ones, finding the lowest ones, finding their indexes and inserting at ans array. (20 / 84 testcases passed)
// function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
//      let ans: number[][] = [];
//      for(let i = 0; i < rowSum.length; i++) ans.push(new Array(colSum.length).fill(0));
//      const ascRowSum = [...rowSum].sort((a, b) => a - b);
//      let rowIndex = 0;
//      const ascColSum = [...colSum].sort((a, b) => a - b);
//      let colIndex = 0;
//      while(rowIndex < ascRowSum.length && colIndex < ascColSum.length) {
//           const matrixRowIndex = rowSum.findIndex((rowSumNum) => rowSumNum === ascRowSum[rowIndex]);
//           const matrixColIndex = colSum.findIndex((colSumNum) => colSumNum === ascColSum[colIndex]);
//           if(ascRowSum[rowIndex] <= ascColSum[colIndex]) {
//                ans[matrixRowIndex][matrixColIndex] = ascRowSum[rowIndex];
//                ascColSum[colIndex] -= ascRowSum[rowIndex];
//                colSum[matrixColIndex] = ascColSum[colIndex];
//                rowIndex++;
//                if(ascColSum[colIndex] <= 0) colIndex++;
//                continue;
//           }
//           ans[matrixRowIndex][matrixColIndex] = ascColSum[colIndex];
//           ascRowSum[rowIndex] -= ascColSum[colIndex];
//           rowSum[matrixRowIndex] = ascRowSum[rowIndex];
//           colIndex++;
//           if(ascRowSum[rowIndex] <= 0) rowIndex++;
//      }
//      return ans;
// };

// First Approach - Iterating over rowSum and colSum arrays, getting the lowest numbers at their indexes and assuming that value at ans array with their indexes (https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5503960/beats-100-explained-with-video-c-java-python-js-two-pointers-explained-in-detail/?envType=daily-question&envId=2024-07-20)
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    let ans: number[][] = [];
    for(let i = 0; i < rowSum.length; i++) ans.push(new Array(colSum.length).fill(0));
    let i = 0, j = 0;
    while(i < rowSum.length && j < colSum.length) {
         let num = Math.min(rowSum[i], colSum[j]);
         ans[i][j] = num;
         rowSum[i] -= num;
         if(rowSum[i] <= 0) i++;
         colSum[j] -= num;
         if(colSum[j] <= 0) j++;
    }
    return ans;
};
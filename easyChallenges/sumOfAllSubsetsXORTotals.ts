// First try (for loop with sliding window summing through window and summing total)
// function subsetXORSum(nums: number[]): number {
//     let sum: number = 0;
//     for(let i: number = 0; i < nums.length; i++) {
//         let l: number = 0;
//         let r: number = i;
//         while(r < nums.length) {
//             let actualSum: number = 0;
//             let arrTest: number[] = [];
//             for(let j: number = l; j <= r; j++) {
//                 actualSum = actualSum ^ nums[j];
//                 arrTest.push(nums[j]);
//             }
//             console.log(`arrTest: ${arrTest}\nactualSum: ${actualSum}\nsum:${sum}`);
//             sum += actualSum;
//             r++;
//             l++;
//         }
//     }
//     return sum;
// };

// First Approach (dfs through nums generating and summing up subsets)
function subsetXORSum(nums: number[]): number {
    function dfs(index: number, currentXorValue: number): number {
        if(index === nums.length) {
            return currentXorValue;
        }
        let include: number = dfs(index + 1, currentXorValue ^ nums[index]);
        let exclude: number = dfs(index + 1, currentXorValue);
        return include + exclude
    }
    return dfs(0, 0);
};

// Second Approach - Better developed approach first approach without defining a DFS function (1ms - Beats 80.00%)
function subsetXORSum(nums: number[], index = 0, xorSum = 0): number {
    if(index === nums.length)
      return xorSum;
  
    const leftSum = subsetXORSum(nums, index + 1, xorSum);
    const rightSum = subsetXORSum(nums, index + 1, xorSum ^ nums[index]);
  
    return leftSum + rightSum;
  };
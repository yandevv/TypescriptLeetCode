// First try looping through edges and comparing sums (54 / 717 testcases passed)
// function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
//     let hadChanged: boolean = true;
//     while(hadChanged) {
//         hadChanged = false;
//         for(let edge of edges) {
//             const xorSum: number = Math.abs(nums[edge[0]] - k) + Math.abs(nums[edge[1]] - k);
//             const defaultSum: number = nums[edge[0]] + nums[edge[1]];
//             if(xorSum > defaultSum) {
//                 nums[edge[0]] = Math.abs(nums[edge[0]] - k);
//                 nums[edge[1]] = Math.abs(nums[edge[1]] - k);
//                 hadChanged = true;
//             }
//         }
//     }
//     return nums.reduce((prev, curr) => curr + prev);
// };

// Nums iterate and recording difference Approach (https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176804/extreme-detailed-explanation-that-could-ever-exists/)
function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let initialSum: number = nums.reduce((prev, curr) => prev + curr);
    let totalDiff: number = 0, positiveCount: number = 0, minAbsDiff: number = Infinity;
    nums.forEach((num) => {
        const diff: number = (num^k) - num;
        if(diff > 0) {
            totalDiff += diff;
            positiveCount++;
        }
        minAbsDiff = Math.min(minAbsDiff, Math.abs(diff));
    });
    if(positiveCount % 2 === 1) {
        totalDiff = totalDiff - minAbsDiff;
    }
    return initialSum + totalDiff;
};
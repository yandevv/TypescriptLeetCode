// First Try - Min value from both minimum difference nums array ends (44 / 61 testcases passed)
// function minDifference(nums: number[]): number {
//     if(nums.length <= 4) return 0;
//     nums.sort((a, b) => a - b);
//     const biggestNumsDiff: number = Math.abs(nums[0] - nums[nums.length - 4]);
//     const smallestNumsDiff: number = Math.abs(nums[nums.length - 1] - nums[3]);
//     return Math.min(biggestNumsDiff, smallestNumsDiff);
// };

// First Approach - Enhanced first try by covering up two more cases than the extreme ones (O(n log n))
function minDifference(nums: number[]): number {
    if(nums.length <= 4) return 0;
    nums.sort((a, b) => a - b);
    const firstNumDiff: number = Math.abs(nums[0] - nums[nums.length - 4]);
    const secondNumDiff: number = Math.abs(nums[1] - nums[nums.length - 3]);
    const thirdNumDiff: number = Math.abs(nums[2] - nums[nums.length - 2]);
    const fourthNumDiff: number = Math.abs(nums[3] - nums[nums.length - 1]);
    return Math.min(firstNumDiff, secondNumDiff, thirdNumDiff, fourthNumDiff);
};
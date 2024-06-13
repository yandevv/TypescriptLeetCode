/**
 Do not return anything, modify nums in-place instead.
 */

// First Approach - Using built-in Javascript sorting method
 function sortColors(nums: number[]): void {
    nums.sort((a, b) => a - b);
};
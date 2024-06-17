/**
 Do not return anything, modify nums in-place instead.
 */

// First Approach - Using built-in Javascript sorting method
 function sortColors(nums: number[]): void {
    nums.sort((a, b) => a - b);
};

// Second Approach - Counting sorting through all 0s, 1s and 2s, and assembling array after count - (https://leetcode.com/problems/sort-colors/solutions/5299410/beats-100-00-of-users-with-java-counter-approach-simple-easy-explained-solution/?envType=daily-question&envId=2024-06-12)
function sortColors(nums: number[]): void {
    let zeroCounter: number = 0, oneCounter: number = 0, twoCounter: number = 0;
    for(let num of nums) {
        if(num === 0) zeroCounter++;
        if(num === 1) oneCounter++;
        if(num === 2) twoCounter++;
    }
    let arrayIterator: number = 0;
    for(let i: number = 0;i < zeroCounter; i++) {
        nums[arrayIterator] = 0;
        arrayIterator++;
    }
    for(let i: number = 0;i < oneCounter; i++) {
        nums[arrayIterator] = 1;
        arrayIterator++;
    }
    for(let i: number = 0;i < twoCounter; i++) {
        nums[arrayIterator] = 2;
        arrayIterator++;
    }
};
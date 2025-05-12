// First Approach - O(n) iterating through arr array and counting odd numbers
function threeConsecutiveOdds(arr: number[]): boolean {
    let oddNumbers: number = 0;
    for(let i: number = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            oddNumbers++;
        } else {
            oddNumbers = 0;
        }
        if(oddNumbers === 3) return true;
    }
    return false;
};

// Second Approach - Checking three numbers at time (https://leetcode.com/problems/three-consecutive-odds/?envType=daily-question&envId=2024-07-01)
function threeConsecutiveOdds(arr: number[]): boolean {
    if(arr.length < 3) return false;
    for(let i: number = 2; i < arr.length; i++) {
        let firstNumCheck: boolean = arr[i] % 2 === 1;
        let secondNumCheck: boolean = arr[i - 1] % 2 === 1;
        let thirdNumCheck: boolean = arr[i - 2] % 2 === 1;
        if(firstNumCheck && secondNumCheck && thirdNumCheck) return true;
    }
    return false;
};

// First Approach - Simple brute force approach iterating over arr checking three positions. (0ms - Beats 100.00% / 11-05-2025)
function threeConsecutiveOdds(arr: number[]): boolean {
    for(let i = 0; i < arr.length - 2; i++)
      if(arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0)
        return true;
  
    return false;
  };

const case1 = threeConsecutiveOdds([2,6,4,1]);
const case2 = threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]);

console.log(`case1: ${case1} // ${!case1}`);
console.log(`case2: ${case2} // ${case2}`);
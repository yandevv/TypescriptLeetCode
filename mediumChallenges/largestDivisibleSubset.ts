// First Try - DFS through nums array and checking with the biggest num of each subset if it's divisible with nums[index],
// if so it's starts a new recursion from there (besides of course of num skipping). Mathematically inaccurate. (Wrong Answer - 24 / 49 testcases passed)
// function largestDivisibleSubset(nums: number[], index: number = 0, path: number[] = [], biggestNum: number = 0): number[] {
//   if(index >= nums.length) {
//     return path;
//   }

//   let biggestSubset: number[] = [];

//   if(nums[index] % biggestNum === 0 || biggestNum % nums[index] === 0) {
//     const subsetFound = largestDivisibleSubset(nums, index + 1, [...path, nums[index]], Math.max(biggestNum, nums[index]));
//     if(subsetFound.length > biggestSubset.length)
//       biggestSubset = subsetFound;
//   }

//   const subsetFound = largestDivisibleSubset(nums, index + 1, [...path], biggestNum);
//   if(subsetFound.length > biggestSubset.length)
//       biggestSubset = subsetFound;

//   return biggestSubset;
// };

// First Approach - DP method calculating the maximum length of a valid subset to each index and, utilizing a
// prev array to track the previous index to the respective dp[i], and to return the answer it's basically
// backtrack to maximum length found through prev[i] to index in nums. (https://leetcode.com/problems/largest-divisible-subset/solutions/6621725/dynamic-programming-explanation-13-21ms-beats-48-51-95-45-o-n-2-55-9-58-6-o-n/?envType=daily-question&envId=2025-04-06)
function largestDivisibleSubset(nums: number[]): number[] {
  const n = nums.length;

  if(n === 0)
    return [];

  nums.sort((a, b) => a - b);

  const dp = new Uint16Array(n).fill(1);
  const prev = new Int16Array(n).fill(-1);

  let maxSize = 1;
  let maxIndex = 0;

  for(let i = 1; i < n; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }

    if(dp[i] > maxSize) {
      maxSize = dp[i];
      maxIndex = i;
    }
  }

  const result: number[] = [];
  while(maxIndex !== -1) {
    result.push(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  return result;
}

const case1 = largestDivisibleSubset([1,2,3]);
const case2 = largestDivisibleSubset([1,2,4,8]);
const case3 = largestDivisibleSubset([4,8,10,240]);
const case4 = largestDivisibleSubset([5,9,18,54,108,540,90,180,360,720]);

console.log(`case1: ${case1} // Should be: [1,2]`);
console.log(`case2: ${case2} // Should be: [1,2,4,8]`);
console.log(`case3: ${case3} // Should be: [4,8,240]`);
console.log(`case4: ${case4} // Should be: [9,18,90,180,360,720]`);
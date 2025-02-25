// First Try - Brute forcing sliding window calculating subarray sums and checking if it's odd, if so
// add on oddSumCount variable. (Time Limit Exceeded - 139 / 151 testcases passed)
// function numOfSubarrays(arr: number[]): number {
//   const n = arr.length;

//   let oddSumCount = 0;
//   for(let step = 0; step < n; step++) {
//     let subarraySum = 0;
//     for(let i = 0; i <= step; i++)
//       subarraySum += arr[i];

//     if(subarraySum & 1)
//       oddSumCount++;

//     let l = 0;
//     for(let r = step + 1; r < n; r++) {
//       subarraySum -= arr[l];
//       subarraySum += arr[r];

//       if(subarraySum & 1)
//         oddSumCount++;

//       l++;
//     }
//   }

//   return oddSumCount;
// };

// Second Try - Same approach as first try but using prefix summing to calculate subarray sum and check. (Time Limit Exceeded - 139 / 151 testcases passed)
// function numOfSubarrays(arr: number[]): number {
//   const n = arr.length;

//   const evenPrefixSum: number[] = [0];
//   const oddPrefixSum: number[] = [0];

//   for(let i = 0; i < n; i++) {
//     const num = arr[i];

//     if(num & 1) {
//       oddPrefixSum[i + 1] = oddPrefixSum[i] + num;
//       evenPrefixSum[i + 1] = evenPrefixSum[i];
//       continue;
//     }

//     evenPrefixSum[i + 1] = evenPrefixSum[i] + num;
//     oddPrefixSum[i + 1] = oddPrefixSum[i];
//   }

//   let oddSumCount = 0;
//   for(let step = 0; step < n; step++) {
//     for(let l = 0; l + step < n; l++) {
//       const evenSum = evenPrefixSum[l + step + 1] - evenPrefixSum[l];
//       const oddSum = oddPrefixSum[l + step + 1] - oddPrefixSum[l];

//       if((evenSum + oddSum) & 1)
//         oddSumCount++;
//     }
//   }

//   return oddSumCount;
// };

// First Approach - Prefix sum approach tracking the accumulated sum of array and checking how many times it was odd.
// (https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/6464951/beats-100-number-of-sub-arrays-with-odd-sum-optimized-approach/?envType=daily-question&envId=2025-02-25)
function numOfSubarrays(arr: number[]): number {
  let oddCount = 0, prefixSum = 0;
  for(const num of arr) {
    prefixSum += num;
    oddCount += prefixSum & 1;
  }

  oddCount += (arr.length - oddCount) * oddCount;
  return oddCount % 1000000007;
};

const case1 = numOfSubarrays([1,3,5]);
// console.log('---')
const case2 = numOfSubarrays([2,4,6]);
// console.log('---')
const case3 = numOfSubarrays([1,2,3,4,5,6,7]);
// console.log('---')
const case4 = numOfSubarrays([74,81,6,16,49,42,73,69,18,43,4,70,27,67]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 16}`);
console.log(`case4: ${case4} // ${case4 === 56}`);
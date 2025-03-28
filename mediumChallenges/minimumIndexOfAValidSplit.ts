// First Try - Prefix Summing and Binary Search method identifying the most frequent number, prefix summing it and
// then using binary search to find the minimum possible index. (Wrong Answer - 582 / 917 testcases passed)
// function minimumIndex(nums: number[]): number {
//   const numFreq: number[] = [];
//   let mostFrequentNum: number = nums[0];
//   numFreq[mostFrequentNum] = 1;

//   for(let i = 1; i < nums.length; i++) {
//     const num = nums[i];
//     if(numFreq[num] === undefined) {
//       numFreq[num] = 1;
//     } else
//       numFreq[num]++;

//     if(numFreq[num] > numFreq[mostFrequentNum]) {
//       mostFrequentNum = num;
//     }
//   }

//   const freqNumPrefixSum: number[] = [0];
//   for(let i = 0; i < nums.length; i++) {
//     freqNumPrefixSum[i + 1] = freqNumPrefixSum[i] + (nums[i] === mostFrequentNum ? 1 : 0);
//   }

//   let low = 0, high = nums.length - 1, minValidIndex = -1;
//   while(low <= high) {
//     const mid = low + Math.floor((high - low) / 2);

//     const leftFreq = freqNumPrefixSum[mid + 1];
//     const rightFreq = freqNumPrefixSum[nums.length] - freqNumPrefixSum[mid + 1];
//     if(leftFreq * 2 > mid + 1 && rightFreq * 2 > nums.length - mid - 1) {
//       minValidIndex = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return minValidIndex;
// };

// First Approach - Boyer-Moore Voting Algorithm method to find the majority element and then using prefix summing to find the minimum possible index.
// (https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/6584542/0-ms-js-c-las-vegas-and-boyer-moore-beats-100-00/?envType=daily-question&envId=2025-03-27)
function minimumIndex(nums: number[]): number {
  const n = nums.length;
  let major = nums[0];
  let count = 1;
  for(let i = 1; i < n; ++i) {
    if(count === 0)
      major = nums[i];

    count += ((major === nums[i] ? 1 : 0) << 1) - 1;
  }

  count = 0;
  for(let i = 0; i < n; ++i)
    count += major === nums[i] ? 1 : 0;

  const n1 = n - 1;
  for (let i = 0, lcount = 0; i < n; ++i) {
    lcount += major === nums[i] ? 1 : 0;

    if(lcount > ((i + 1) >> 1) && count - lcount > ((n1 - i) >> 1))
      return i;
  }

  return -1;
};

const case1 = minimumIndex([1,2,2,2]);
const case2 = minimumIndex([2,1,3,1,1,1,7,1,2,1]);
const case3 = minimumIndex([3,3,3,3,7,2,2]);
const case4 = minimumIndex([1,1,1]);
const case5 = minimumIndex([1,1,1,2]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
console.log(`case3: ${case3} // ${case3 === -1}`);
console.log(`case4: ${case4} // ${case4 === 0}`);
console.log(`case5: ${case5} // ${case5 === 0}`);
// First Approach - DP method reused from first question of that same question line, using DP to find the
// maximum K based in j index, checking a solution with i and j found interactively with O(n^2) loop.
// (Time Limit Exceeded - 591 / 599 testcases passed)
// function maximumTripletValue(nums: number[]): number {
//   const maxNumDP: number[] = new Array(nums.length + 1).fill(0), n = nums.length;

//   for(let i = n - 1; i >= 0; i--) {
//     maxNumDP[i] = Math.max(maxNumDP[i + 1], nums[i]);
//   }

//   let ans = 0;
//   for(let i = 0; i < n; i++) {
//     for(let j = i + 1; j < n; j++) {
//       const maxK = maxNumDP[j + 1];

//       if(i < 0 && j < 0 && maxK < 0) {
//         ans = 0;
//         continue;
//       }

//       ans = Math.max(ans, (nums[i] - nums[j]) * maxK);
//     }
//   }

//   return ans;
// };

// First Approach - Max prefix and suffix method, calculating for each index what is the biggest prefixes
// and suffixes and checking to each number from 1 to n - 1 and their prefixes and suffixes the max answer.
// (24ms - Beats 13.64%)
function maximumTripletValue(nums: number[]): number {
  const n = nums.length;

  const maxNumI: number[] = new Array(nums.length).fill(0);
  for(let i = 0; i < n; i++) {
    maxNumI[i] = Math.max(maxNumI[i - 1] ?? 0, nums[i]);
  }

  const maxNumK: number[] = new Array(nums.length).fill(0);
  for(let i = n - 1; i >= 0; i--) {
    maxNumK[i] = Math.max(maxNumK[i + 1] ?? 0, nums[i]);
  }

  let ans = 0;
  for(let j = 1; j < n - 1; j++) {
    const maxI = maxNumI[j - 1], numJ = nums[j], maxK = maxNumK[j + 1];

    if(maxI < 0 && numJ < 0 && maxK < 0)
      continue;

    ans = Math.max(ans, (maxI - numJ) * maxK);
  }

  return ans;
};

const case1 = maximumTripletValue([12,6,1,2,7]);
const case2 = maximumTripletValue([1,10,3,4,19]);
const case3 = maximumTripletValue([1,2,3]);

console.log(`case1: ${case1} // ${case1 === 77}`);
console.log(`case2: ${case2} // ${case2 === 133}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
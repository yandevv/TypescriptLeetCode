// First Try - Prefix and suffix summing nums checking if there is a point where the prefix
// sum equals the next index in suffix sum, resulting in a partition. (Wrong Answer - 73 / 144 testcases passed)
// function canPartition(nums: number[]): boolean {
//   nums.sort((a, b) => a - b);

//   const prefixSum: number[] = [], suffixSum: number[] = [];
//   for(let i = 0; i < nums.length; i++) {
//     prefixSum[i] = nums[i] + (prefixSum[i - 1] || 0);
//     suffixSum[nums.length - 1 - i] = nums[nums.length - 1 - i] + (suffixSum[nums.length - i] || 0);
//   }

//   for(let i = 0; i < nums.length - 1; i++) {
//     if (prefixSum[i] === suffixSum[i + 1]) {
//       return true;
//     }
//   }

//   return false;
// };

// Second Try - Using a greedy approach to split numbers through two distinct subsets based in their ongoing balance.
// (Wrong Answer - 122 / 144 testcases passed)
// function canPartition(nums: number[]): boolean {
//   nums.sort((a, b) => b - a);

//   let leftSubsetBalance = 0, rightSubsetBalance = 0;
//   for(const num of nums) {
//     if(leftSubsetBalance < rightSubsetBalance) {
//       leftSubsetBalance += num;
//       continue;
//     }
    
//     rightSubsetBalance += num;
//   }

//   return leftSubsetBalance === rightSubsetBalance;
// };

// Third Try - Dynamic programming method used to check the possibilities of subsets sums either skipping
// nums or summing up with other nums with Knapsack 0/1, that way, if totalSum / 2 is possible to do
// in one subset, the other one should be able too.
// (https://leetcode.com/problems/partition-equal-subset-sum/solutions/6623686/0-1-knapsack-dp-with-images-example-walkthrough-c-python-java/?envType=daily-question&envId=2025-04-07)
function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  if(totalSum % 2 !== 0)
    return false;

  const target = totalSum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for(const num of nums) {
    for(let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
      if(dp[target])
        return true;
    }
  }
  return dp[target];
};

const case1 = canPartition([1,5,11,5]);
const case2 = canPartition([1,2,3,5]);
const case3 = canPartition([2,2,1,1]);
const case4 = canPartition([3,3,3,4,5]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
console.log(`case3: ${case3} // ${case3}`);
console.log(`case4: ${case4} // ${case4}`);
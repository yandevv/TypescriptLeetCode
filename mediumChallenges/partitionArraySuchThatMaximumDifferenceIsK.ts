// First Approach - Greedy sorting method ordering nums array and splitting subsequences dynamically and optimally,
// increasing answer (count of subsequences) when the difference between the min number of actual subsequence and
// actual number, updating min number track.  (108ms - Beats 92.86%)
function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let ans = 1, lastNum = nums[0], minValue = nums[0];
  for(let i = 1; i < nums.length; i++) {
    const actualNum = nums[i];

    if(lastNum === actualNum)
      continue;

    if(actualNum - minValue > k) {
      ans++;
      minValue = actualNum;
    }

    lastNum = actualNum;
  }

  return ans;
};

const case1 = partitionArray([3,6,1,2,5], 2);
const case2 = partitionArray([1,2,3], 1);
const case3 = partitionArray([2,2,4,5], 0);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 3}`);
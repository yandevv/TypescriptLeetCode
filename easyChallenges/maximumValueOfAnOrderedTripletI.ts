// First Approach - DP method calculating the biggest possible K to be using in a n² loop through duplets. (1ms - Beats 73.91%)
function maximumTripletValue(nums: number[]): number {
  const maxNumDP: number[] = new Array(nums.length + 1).fill(0), n = nums.length;

  for(let i = n - 1; i >= 0; i--) {
    maxNumDP[i] = Math.max(maxNumDP[i + 1], nums[i]);
  }

  let ans = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      const maxK = maxNumDP[j + 1];

      if(i < 0 && j < 0 && maxK < 0) {
        ans = 0;
        continue;
      }

      ans = Math.max(ans, (nums[i] - nums[j]) * maxK);
    }
  }

  return ans;
};

const case1 = maximumTripletValue([12,6,1,2,7]);
const case2 = maximumTripletValue([1,10,3,4,19]);
const case3 = maximumTripletValue([1,2,3]);

console.log(`case1: ${case1} // ${case1 === 77}`);
console.log(`case2: ${case2} // ${case2 === 133}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
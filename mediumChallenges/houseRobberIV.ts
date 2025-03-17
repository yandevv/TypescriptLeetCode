// First Approach - Binary search through possible answers minimizing the quantity of iterations
// over nums. (https://leetcode.com/problems/house-robber-iv/solutions/6538852/clean-binary-search/?envType=daily-question&envId=2025-03-15)
function minCapability(nums: number[], k: number) {
  let L = nums.reduce((a, b) => Math.min(a, b));
  let R = nums.reduce((a, b) => Math.max(a, b));

  while(L < R) {
    const M = L + R >>> 1;

    let res = 0;
    for(let i = 0; i < nums.length && res < k; i++) {
      if(nums[i] <= M)
        ++res && i++;
    }

    res >= k ? R = M : L = M + 1;
  }

  return L;
}

const case1 = minCapability([2,3,5,9], 2);
const case2 = minCapability([2,7,9,3,1], 2);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
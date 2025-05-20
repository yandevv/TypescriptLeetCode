// First Approach - Difference array method to compute all the queries and check if every number in
// the array summed with the balance of difference array is greater than 0. (21ms - Beats 58.62%)
function isZeroArray(nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const numsBalance: number[] = new Array(n).fill(0);
  for(const query of queries) {
    const [start, end] = query;
    numsBalance[start] -= 1;
    if(end + 1 < n) {
      numsBalance[end + 1] += 1;
    }
  }

  let balance = 0;
  for(let i = 0; i < n; i++) {
    balance += numsBalance[i];
    if(nums[i] + balance > 0)
      return false;
  }

  return true;
};

const case1 = isZeroArray([1,0,1], [[0,2]]);
const case2 = isZeroArray([4,3,2,1], [[1,3],[0,2]]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
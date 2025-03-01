// First Approach - One pass dynamic programming approach counting positive and negative sums (nice trick "zeroing" positive and
// negative sum whenever it becomes negative or positive, respectively). (https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/6470626/0-ms-positive-and-negative-sum-o-n-o-1-beats-100-00/?envType=daily-question&envId=2025-02-26)
function maxAbsoluteSum(a: number[]) {
  let psm = 0; // positive sum max
  let nsm = 0; // negative sum max

  for(let i = 0, ps = 0, ns = 0; i < a.length; ++i) {
    ps = Math.max(a[i], ps + a[i]);
    psm = Math.max(psm, ps);
    ns = Math.min(a[i], ns + a[i]);
    nsm = Math.min(nsm, ns);
  }

  return Math.max(psm, -nsm);
};

const case1 = maxAbsoluteSum([1,-3,2,3,-4]);
const case2 = maxAbsoluteSum([2,-5,1,-4,3,-2]);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 8}`);
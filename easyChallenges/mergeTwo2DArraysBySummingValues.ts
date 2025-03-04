// First Approach - Two pointer approach comparing their ID and summing up when necessary.
// (https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6483863/beats-100-merge-two-2d-arrays-by-summing-values-optimized-approach/?envType=daily-question&envId=2025-03-02)
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const n = nums1.length, m = nums2.length;

  let i = 0, j = 0;
  const ans: number[][] = [];
  while(i < n && j < m) {
    if(nums1[i][0] === nums2[j][0]) {
      ans.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
      i++; j++;
    } else if(nums1[i][0] < nums2[j][0]) {
      ans.push(nums1[i++]);
    } else {
      ans.push(nums2[j++]);
    }
  }

  while(i < n)
    ans.push(nums1[i++]);

  while(j < m)
    ans.push(nums2[j++]);

  return ans;
};

const case1 = mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]);
const case2 = mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]);

console.log(`case1: ${case1} // Should be: [[1,6],[2,3],[3,2],[4,6]]`);
console.log(`case2: ${case2} // Should be: [[1,3],[2,4],[3,6],[4,3],[5,5]]`);
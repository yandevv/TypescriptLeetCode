// First Approach - Brute force method iterating over nums and checking each index if it's value is equal
// to key, if so, then we iterate over the range of k to find the indices that are k distant from the key
// index, appending it into answer set. (52ms - Beats 5.56%)
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length;

  const ans: number[] = [];
  let lastIndexIncluded = -1;
  for(let i = 0; i < n; i++) {
    if(nums[i] === key) {
      for(let j = Math.max(0, i - k, lastIndexIncluded + 1); j <= Math.min(n - 1, i + k); j++) {
        ans.push(j);
        lastIndexIncluded = j;
      }
    }
  }

  return ans;
};

const case1 = findKDistantIndices([3,4,9,1,3,9,5], 9, 1);
const case2 = findKDistantIndices([2,2,2,2,2], 2, 2);

console.log(`case1: ${case1} // Should be: [1,2,3,4,5,6]`);
console.log(`case2: ${case2} // Should be: [0,1,2,3,4]`);
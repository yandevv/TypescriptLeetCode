// First Approach - Binary Search and difference array approach testing and finding optimally the minimum quantity of
// queries to zero the array. (https://leetcode.com/problems/zero-array-transformation-ii/solutions/6531047/binary-search-python-c-java-js-c-go/?envType=daily-question&envId=2025-03-13)
function minZeroArray(nums: number[], queries: number[][]) {
  let n = nums.length;

  function canMakeZeroArray(k: number) {
    let diff = new Array(n + 1).fill(0);
    for(let i = 0; i < k; i++) {
      let [left, right, val] = queries[i];
      diff[left] += val;
      diff[right + 1] -= val;
    }

    let currVal = 0;
    for(let i = 0; i < n; i++) {
      currVal += diff[i];
      if(currVal < nums[i])
        return false;
    }

    return true;
  };

  if(nums.every(x => x === 0))
    return 0;

  let left = 1, right = queries.length;

  if(!canMakeZeroArray(right))
    return -1;
  while(left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if(canMakeZeroArray(mid)) {
      right = mid;
    } else
      left = mid + 1;
  }
  return left;
};

const case1 = minZeroArray([2, 0, 2], [[0, 2, 1], [0, 2, 1], [1, 1, 3]]);
const case2 = minZeroArray([4, 3, 2, 1], [[1, 3, 2], [0, 2, 1]]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
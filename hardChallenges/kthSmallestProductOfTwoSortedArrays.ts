// First Approach - Binary Search with binary search approach from editorial. (https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/editorial/?envType=daily-question&envId=2025-06-25)
function f(nums2: number[], x1: number, v: number): number {
  const n2 = nums2.length;
  let left = 0,
    right = n2 - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const prod = nums2[mid] * x1;
    if ((x1 >= 0 && prod <= v) || (x1 < 0 && prod > v)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (x1 >= 0) {
    return left;
  } else {
    return n2 - left;
  }
}

function kthSmallestProduct(
  nums1: number[],
  nums2: number[],
  k: number,
): number {
  const n1 = nums1.length;
  let left = -1e10,
    right = 1e10;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < n1; i++) {
      count += f(nums2, nums1[i], mid);
    }
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const case1 = kthSmallestProduct([2, 5], [3, 4], 2)
const case2 = kthSmallestProduct([-4, -2, 0, 3], [2, 4], 6)
const case3 = kthSmallestProduct([-2, -1, 0, 1, 2], [-3, -1, 2, 4, 5], 3)

console.log(`case1: ${case1} // ${case1 === 8}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === -6}`);

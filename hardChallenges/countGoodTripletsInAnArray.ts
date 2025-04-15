// First Approach - Brute force method iterating over all possible nums2 triplets, comparing with a Map
// relating num value and index of nums1. (Time Limit Exceeded - 102 / 148 testcases passed)
// function goodTriplets(nums1: number[], nums2: number[]): number {
//   const n = nums1.length;

//   const nums1Index: Map<number, number> = new Map();
//   for(let i = 0; i < n; i++)
//     nums1Index.set(nums1[i], i);

//   let ans = 0;
//   for(let i = 0; i < n; i++) {
//     for(let j = i + 1; j < n; j++) {
//       for(let k = j + 1; k < n; k++) {
//         const i1 = nums1Index.get(nums2[i])!;
//         const j1 = nums1Index.get(nums2[j])!;
//         const k1 = nums1Index.get(nums2[k])!;

//         if(i1 < j1 && j1 < k1 && i1 < k1) {
//           ans++;
//         }
//       }
//     }
//   }

//   return ans;
// };

// First Approach - Binary Indexed Tree method used to count the number of smaller elements in nums1 processed so far
// and use that to calculate the number of good triplets.
// (https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/6652841/leetcodedaybyday-beats-100-python3-94-55-c-100-java-57-14-js-0-00-ts/?envType=daily-question&envId=2025-04-15)
class FenwickTree {
  private fenw: number[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.fenw = new Array(size + 1).fill(0);
  }

  public update(idx: number, delta: number): void {
    idx++;
    while(idx <= this.size) {
      this.fenw[idx] += delta;
      idx += idx & -idx;
    }
  }

  public prefixSum(idx: number): number {
      let sum = 0;
      while(idx > 0) {
        sum += this.fenw[idx];
        idx -= idx & -idx;
      }

      return sum;
  }

  public countSmaller(x: number): number {
    return x > 0 ? this.prefixSum(x) : 0;
  }
}

function goodTriplets(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  let res = 0;

  const indices: number[] = new Array(n);
  for(let i = 0; i < n; i++) {
    indices[nums1[i]] = i;
  }

  for(let i = 0; i < n; i++) {
    nums2[i] = indices[nums2[i]];
  }

  for(let i = 0; i < n; i++) {
    nums1[i] = nums2[i];
  }

  const fenw = new FenwickTree(n);
  for(let i = 0; i < n; i++) {
    const num = nums1[n - 1 - i];
    const smallerCount = fenw.countSmaller(num);
    const biggerCount = i - smallerCount;
    const diffCount = num - smallerCount;

    res += biggerCount * diffCount;

    fenw.update(num, 1);
  }

  return res;
};

const case1 = goodTriplets([2,0,1,3], [0,1,2,3]);
const case2 = goodTriplets([4,0,1,3,2], [4,1,0,2,3]);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
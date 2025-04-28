// First Approach - Sliding window method iterating over possible subarrays and checking if the product is less than k,
// if so increment to the answer the length of the subarray (right - left + 1) to count the number of possible
// subarrays at that iteration by summation.
function countSubarrays(nums: number[], k: number): number {
  let subarraySum = 0, ans = 0;
  for(let left = 0, right = 0; right < nums.length; right++) {
    subarraySum += nums[right];

    while(subarraySum * (right - left + 1) >= k) {
      subarraySum -= nums[left++];
    }

    ans += right - left + 1;
  }

  return ans;
};

const case1 = countSubarrays([2,1,4,3,5], 10);
const case2 = countSubarrays([1,1,1], 5);

console.log(`case1: ${case1} // ${case1 === 6}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
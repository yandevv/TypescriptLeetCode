// First Approach - Sort the array and then check for each triplet if they can be grouped together, pushing to
// a answer array if they can and, in the response it checks if the answer array has the same length as the
// original array divided by 3, returning the answer array if true, or an empty array if false.
// (87ms - Beats 60.00%)
function divideArray(nums: number[], k: number): number[][] {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const result: number[][] = [];
  for(let i = 0; i < n; i += 3) {
    const num1 = nums[i];
    const num2 = nums[i + 1];
    const num3 = nums[i + 2];
  
    if(Math.abs(num1 - num2) <= k && Math.abs(num2 - num3) <= k && Math.abs(num1 - num3) <= k) {
      result.push([num1, num2, num3]);
    }
  }

  return result.length === n / 3 ? result : [];
};

const case1 = divideArray([1,3,4,8,7,9,3,5,1], 2);
const case2 = divideArray([2,4,2,2,5,2], 2);
const case3 = divideArray([4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11], 14);

console.log(`case1: ${case1} // Should be: [[1,1,3],[3,4,5],[7,8,9]]`);
console.log(`case2: ${case2} // Should be: []`);
console.log(`case3: ${case3} // Should be: [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]`);

// First Approach - Brute force method comparing each number with the range of 2 digits and 4 digits numbers,
// increasing the counter if the number is in the range. (0ms - Beats 100.00%)
function findNumbers(nums: number[]): number {
  let ans = 0;
  for(const num of nums) {
    if((num > 9 && num < 100) || (num > 999 && num < 10000) || num === 100000)
      ans++;
  }

  return ans;
};

// Second Approach - Using the String method to convert the number to a string and check its length.
// (1ms - Beats 83.56%)
function findNumbers(nums: number[]): number {
  let ans = 0;
  for(const num of nums) {
    if(num.toString().length % 2 === 0)
      ans++;
  }

  return ans;
};

const case1 = findNumbers([12,345,2,6,7896]);
const case2 = findNumbers([555,901,482,1771]);
const case3 = findNumbers([100000]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
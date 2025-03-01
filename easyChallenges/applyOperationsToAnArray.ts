// First Approach - Linear iteration through numbers and appending into a answer array just numbers that are
// higher than zero, merging a answerArr.length - nums.length zero's array at the end to return. (0ms - Beats 100.00%)
function applyOperations(nums: number[]): number[] {
  const answerArr: number[] = [], n = nums.length;

  for(let i = 0; i <= nums.length - 1; i++) {
    if(nums[i] === 0)
      continue;

    if(nums[i] === nums[i + 1]) {
      answerArr.push(nums[i] * 2);
      nums[i + 1] = 0;

      i++;

      continue;
    }

    answerArr.push(nums[i]);
  }

  answerArr.push(...new Array(n - answerArr.length).fill(0));

  return answerArr;
};

const case1 = applyOperations([1,2,2,1,1,0]);
const case2 = applyOperations([0,1]);

console.log(`case1: ${case1} // Should be: [1,4,2,0,0,0]`);
console.log(`case2: ${case2} // Should be: [1,0]`);
// First Approach - Brute force method number count tracking and removing it based in a initial index. (1ms - Beats 96.15%)
function minimumOperations(nums: number[]): number {
  const numCount: number[] = new Array(101).fill(0);

  let initialIndex = 0, ans = 0;
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];

    numCount[num]++;

    while(numCount[num] > 1) {
      numCount[nums[initialIndex]]--;
      numCount[nums[initialIndex + 1]]--;
      numCount[nums[initialIndex + 2]]--;

      initialIndex += 3;
      ans++;
    }

    if(initialIndex > nums.length - 1) {
      return ans;
    }
  }

  return ans;
};

const case1 = minimumOperations([1,2,3,4,2,3,3,5,7]);
const case2 = minimumOperations([4,5,6,4,4]);
const case3 = minimumOperations([6,7,8,9]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
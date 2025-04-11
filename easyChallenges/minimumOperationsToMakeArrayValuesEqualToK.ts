// First Approach - Greedy method tracking the distinct numbers of nums to logically calculate the
// number of operations by removing the actual biggest numbers replacing to the next smallest one
// (to optimize the number of operations) until we reach the number K. (35ms - Beats 100.00%)
function minOperations(nums: number[], k: number): number {
  const numsSet = new Set<number>();

  let isKPresent = false;
  for(const num of nums) {
    if(num < k)
      return -1;

    if(num === k)
      isKPresent = true;

    numsSet.add(num);
  }

  return numsSet.size - (isKPresent ? 1 : 0);
};

const case1 = minOperations([5,2,5,4,5], 2);
const case2 = minOperations([2,1,2], 2);
const case3 = minOperations([9,7,5,3], 1);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
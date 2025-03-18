// First Approach - Tracking unpaired numbers by their index and the count of uneven pairs, checking at the
// end if uneven pairs are equal to zero (all pairs divided equally). (0ms - Beats 100.00%)
function divideArray(nums: number[]): boolean {
  let unevenPairs = 0, soloNums: number[] = [];
  for(const num of nums) {
    if(soloNums[num - 1]) {
      soloNums[num - 1] = 0;
      unevenPairs--;
      continue;
    }

    soloNums[num - 1] = 1;
    unevenPairs++;
  }

  return unevenPairs === 0;
};

const case1 = divideArray([3,2,3,2,2,2]);
const case2 = divideArray([1,2,3,4]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
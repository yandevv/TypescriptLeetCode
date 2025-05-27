// First Approach - Brute force method iterating over all numbers from 1 to n testing
// with modulo m. (0ms - Beats 100.00%)
function differenceOfSums(n: number, m: number): number {
  let sum1 = 0, sum2 = 0;
  for(let num = 1; num <= n; num++) {
    if(num % m === 0) {
      sum2 += num;
    } else
      sum1 += num;
  }
  return sum1 - sum2;
};

const case1 = differenceOfSums(10, 3);
const case2 = differenceOfSums(5, 6);
const case3 = differenceOfSums(5, 1);

console.log(`case1: ${case1} // ${case1 === 19}`);
console.log(`case2: ${case2} // ${case2 === 15}`);
console.log(`case3: ${case3} // ${case3 === -15}`);
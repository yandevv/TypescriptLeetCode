// First Approach - Math method with arithmetic progression, calculating the main X axis length
// and the two up and down "pyramids" areas. (0ms - Beats 100.00%)
function coloredCells(n: number): number {
  if(n === 1)
    return 1;

  const termsQuantity = n - 1;
  return (n * 2 - 1) + 2 * (termsQuantity / 2 * (2 + (termsQuantity - 1) * 2));
};

const case1 = coloredCells(1);
const case2 = coloredCells(2);
const case3 = coloredCells(3);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
console.log(`case3: ${case3} // ${case3 === 13}`);
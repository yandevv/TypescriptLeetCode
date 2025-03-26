// First Approach - Math method finding the median of the sorted flattered grid and comparing each number
// with found median, catching the moves to reach median value and summing it to answer. (184ms - Beats 16.67%)
function minOperations(grid: number[][], x: number): number {
  const flatGrid = grid.flat();
  flatGrid.sort((a, b) => a - b);

  const median = flatGrid[Math.floor(flatGrid.length / 2)];

  let changes = 0;
  for(const gridNum of flatGrid) {
    const diff = Math.abs(median - gridNum);

    if(diff % x > 0)
      return -1;

    changes += diff / x;
  }

  return changes;
};

const case1 = minOperations([[2,4],[6,8]], 2);
const case2 = minOperations([[1,5],[2,3]], 1);
const case3 = minOperations([[1,2],[3,4]], 2);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
console.log(`case3: ${case3} // ${case3 === -1}`);
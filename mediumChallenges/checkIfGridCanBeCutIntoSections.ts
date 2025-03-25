// First Approach - Sorting method tracking the latest biggest end of both X and Y, checking with start of them and if it's
// lower or equals to the start of the next iteration, it can be cut between them. (169ms - Beats 100.00%)
function checkValidCuts(n: number, rectangles: number[][]): boolean {
  rectangles.sort((a, b) => a[0] - b[0]);

  let biggestEndX = rectangles[0][2], possibleCuts = 0;
  for(let i = 1; i < rectangles.length; i++) {
    const rectangle = rectangles[i];
    const startX = rectangle[0], endX = rectangle[2];

    if(startX >= biggestEndX)
      possibleCuts++;

    if(possibleCuts === 2)
      return true;

    biggestEndX = Math.max(biggestEndX, endX);
  }

  rectangles.sort((a, b) => a[1] - b[1]);

  possibleCuts = 0
  let biggestEndY = rectangles[0][3];
  for(let i = 1; i < rectangles.length; i++) {
    const rectangle = rectangles[i];
    const startY = rectangle[1], endY = rectangle[3];

    if(startY >= biggestEndY)
      possibleCuts++;

    if(possibleCuts === 2)
      return true;

    biggestEndY = Math.max(biggestEndY, endY);
  }

  return false;
};

const case1 = checkValidCuts(5, [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]);
const case2 = checkValidCuts(4, [[0,0,1,1],[2,0,3,4],[0,2,2,3],[3,0,4,3]]);
const case3 = checkValidCuts(4, [[0,2,2,4],[1,0,3,2],[2,2,3,4],[3,0,4,2],[3,2,4,4]]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
// First Approach - Brute force method using a Set to find common numbers through dominos pieces and then
// filtering both tops and bottoms to find the minimum number of rotations to make tops or bottoms the
// same number. (29ms - Beats 8.33%)
function minDominoRotations(tops: number[], bottoms: number[]): number {
  let commonNumbers = new Set<number>([tops[0], bottoms[0]]);
  for(let i = 1; i < tops.length; i++) {
    let newCommonNumbers = new Set<number>();
    if(!commonNumbers.has(tops[i]) && !commonNumbers.has(bottoms[i])) {
      return -1
    }

    if(commonNumbers.has(tops[i])) {
      newCommonNumbers.add(tops[i]);
    }

    if(commonNumbers.has(bottoms[i])) {
      newCommonNumbers.add(bottoms[i]);
    }

    commonNumbers = newCommonNumbers;
  }

  let ans = Infinity;
  for(const commonNumber of commonNumbers) {
    ans = Math.min(tops.filter(num => num !== commonNumber).length, bottoms.filter(num => num !== commonNumber).length, ans);
  }

  return ans;
};

// Second Approach - Same logic as the first one but using for loop with top and bottom counts instead
// of using filters methods to find the count of reversible pieces. (25ms - Beats 8.33%)
function minDominoRotations(tops: number[], bottoms: number[]): number {
  let commonNumbers = new Set<number>([tops[0], bottoms[0]]);
  for(let i = 1; i < tops.length; i++) {
    let newCommonNumbers = new Set<number>();
    if(!commonNumbers.has(tops[i]) && !commonNumbers.has(bottoms[i])) {
      return -1
    }

    if(commonNumbers.has(tops[i])) {
      newCommonNumbers.add(tops[i]);
    }

    if(commonNumbers.has(bottoms[i])) {
      newCommonNumbers.add(bottoms[i]);
    }

    commonNumbers = newCommonNumbers;
  }

  let ans = Infinity;
  for(const commonNumber of commonNumbers) {
    let topsCount = 0, bottomsCount = 0;

    for(let i = 0; i < tops.length; i++) {
      if(tops[i] !== commonNumber) {
        topsCount++;
      }

      if(bottoms[i] !== commonNumber) {
        bottomsCount++;
      }
    }

    ans = Math.min(topsCount, bottomsCount, ans);
  }

  return ans;
};

// Third Approach - Using a helper function to check the count of swaps to make all tops and
// bottoms equal to the target number (from both tops[0] and bottoms[0]).
// (Top Submissions Chart - 3ms)
function minDominoRotations(tops: number[], bottoms: number[]): number {
  const n = tops.length;

  function check(target: number): number {
      let rotateTop = 0;
      let rotateBottom = 0;

      for(let i = 0; i < n; i++) {
        if(tops[i] !== target && bottoms[i] !== target)
          return -1;

        if(tops[i] !== target)
          rotateTop++;
        if(bottoms[i] !== target)
          rotateBottom++;
      }

      return Math.min(rotateTop, rotateBottom);
  };

  const result = check(tops[0]);
  if(result !== -1)
    return result;

  return tops[0] !== bottoms[0] ? check(bottoms[0]) : -1;
};

const case1 = minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2]);
const case2 = minDominoRotations([3,5,1,2,3], [3,6,3,3,4]);
const case3 = minDominoRotations([1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,2,1,2,2,1,1,2,2,2,2,2,1,1,2,2,2,2,1,2,1,1,2,1,1,1,1,2,1,2,2,2,1,2,1,2,2,1,2,1,2], [2,1,1,1,2,1,2,1,2,2,1,1,1,2,1,2,2,1,2,2,2,1,2,2,1,1,1,2,1,2,2,1,2,1,1,2,1,1,1,2,1,2,2,2,2,1,2,1,1,2,1,2,2,1,2,1,1,2,2,1,2,1,1,2]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
console.log(`case3: ${case3} // ${case3 === -1}`);
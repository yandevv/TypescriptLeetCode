// First Approach - Backtracking approach iterating over all possibilities based on tiles, storing it
// into a Set and returning the size of it. (26ms - Beats 54.84%)
function numTilePossibilities(tiles: string): number {
  const possibilitiesSet: Set<string> = new Set();
  function backtrack(lastString: string, usedIndexes: number[]) {
    if(lastString !== '')
      possibilitiesSet.add(lastString);

    if(lastString.length === tiles.length)
      return;

    for(let i = 0; i < usedIndexes.length; i++) {
      if(usedIndexes[i] === 0) {
        const newUsedIndexes = [...usedIndexes];
        newUsedIndexes[i] = 1;

        backtrack(lastString + tiles[i], newUsedIndexes);
      }
    }
  }

  backtrack('', new Array(tiles.length).fill(0));

  return possibilitiesSet.size;
};

const case1 = numTilePossibilities("AAB");
const case2 = numTilePossibilities("AAABBC");
const case3 = numTilePossibilities("V");

console.log(`case1: ${case1} // ${case1 === 8}`);
console.log(`case2: ${case2} // ${case2 === 188}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
// First Approach - Sliding Window method tracking in the sliding window the count of actual
// white blocks, returning the minimum amount of white blocks. (0ms - Beats 100.00%)
function minimumRecolors(blocks: string, k: number): number {
  let actlBlacks = 0, actlWhites = 0;
  for(let i = 0; i < k; i++)
    blocks[i] === 'W' ? actlWhites++ : actlBlacks++;

  let ans = actlWhites;
  for(let r = k, l = 1; r < blocks.length; r++, l++) {
    if(blocks[l - 1] === 'W') {
      actlWhites--;
    } else
      actlBlacks--;

    if(blocks[r] === 'W') {
      actlWhites++;
    } else
      actlBlacks--;

    ans = Math.min(ans, actlWhites);
  }

  return ans;
};

const case1 = minimumRecolors("WBBWWBBWBW", 7);
const case2 = minimumRecolors("WBWBBBW", 2);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
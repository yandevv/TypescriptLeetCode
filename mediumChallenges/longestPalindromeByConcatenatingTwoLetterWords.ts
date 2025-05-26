// First Approach - Greedy solution using a Map to track the pairs of words making even pairs to maintain
// palindrome structure and if there's remaining word with double letters to add in the middle.
// (75ms - Beats 30.77%)
function longestPalindrome(words: string[]): number {
  const pairsMap: Map<string, number> = new Map();
  let wordLength = 0, doubleLetteredWords = 0;
  for(const word of words) {
    if(word[0] === word[1]) {
      doubleLetteredWords++;
    }

    if(pairsMap.get(`${word[1]}${word[0]}`) ?? 0 > 0) {
      wordLength += 4;
      pairsMap.set(`${word[1]}${word[0]}`, pairsMap.get(`${word[1]}${word[0]}`)! - 1);

      if(word[0] === word[1] && pairsMap.get(`${word[1]}${word[0]}`) === 0)
        doubleLetteredWords -= 2;
    } else
      pairsMap.set(word, (pairsMap.get(word) ?? 0) + 1);
  }
  return wordLength + (doubleLetteredWords > 0 ? 2 : 0);
};

const case1 = longestPalindrome(["lc","cl","gg"]);
// console.log('---');
const case2 = longestPalindrome(["ab","ty","yt","lc","cl","ab"]);
// console.log('---');
const case3 = longestPalindrome(["cc","ll","xx"]);
// console.log('---');
const case4 = longestPalindrome(["qo","fo","fq","qf","fo","ff","qq","qf","of","of","oo","of","of","qf","qf","of"]);
// console.log('---');
const case5 = longestPalindrome(["bb","bb"]);

console.log(`case1: ${case1} // ${case1 === 6}`);
console.log(`case2: ${case2} // ${case2 === 8}`);
console.log(`case3: ${case3} // ${case3 === 2}`);
console.log(`case4: ${case4} // ${case4 === 14}`);
console.log(`case5: ${case5} // ${case5 === 4}`);

// First Approach - Using a for loop to iterate through the words array and check if each word
// contains the character x. (0ms - Beats 100.00%)
function findWordsContaining(words: string[], x: string): number[] {
  const ans: number[] = [];
  for(let i = 0; i < words.length; i++) {
    if(words[i].includes(x)) {
      ans.push(i);
    }
  }

  return ans;
};

const case1 = findWordsContaining(["leet","code"], "e");
const case2 = findWordsContaining(["abc","bcd","aaaa","cbc"], "a");
const case3 = findWordsContaining(["abc","bcd","aaaa","cbc"], "z");

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
// First Approach - Tracking the longest subsequence that starts with 0 or 1 and pushing the words to
// the respective subsequence based on the group number alternation. (1ms - Beats 65.91%)
function getLongestSubsequence(words: string[], groups: number[]): string[] {
  let startingZero = 0, startingOne = 1;
  const startingZeroSubsequence: string[] = [], startingOneSubsequence: string[] = [];
  for(let i = 0; i < words.length; i++) {
    if(startingZero === groups[i]) {
      startingZeroSubsequence.push(words[i]);
      startingZero = startingZero ? 0 : 1;
    }
    if(startingOne === groups[i]) {
      startingOneSubsequence.push(words[i]);
      startingOne = startingOne ? 0 : 1;
    }
  }

  if(startingZeroSubsequence.length > startingOneSubsequence.length) {
    return startingZeroSubsequence;
  }

  return startingOneSubsequence;
};

// Second Approach - Tracking the longest subsequence based on the group number alternation, differently from first
// approach that tracks both 0 and 1 starts. (0ms - Beats 100% - Best performance from all solutions graph)
function getLongestSubsequence(words: string[], groups: number[]): string[] {
  let current = groups[0];
  const result: string[] = [words[0]];
  for(let i = 1; i < words.length; ++i) {
    if(groups[i] !== current) {
      result.push(words[i])
      current = groups[i];
    }
  }

  return result;
};

const case1 = getLongestSubsequence(["e","a","b"], [0,0,1]);
const case2 = getLongestSubsequence(["a","b","c","d"], [1,0,1,1]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
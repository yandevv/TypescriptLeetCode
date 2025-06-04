// First Try - Greedy algorithm comparing a letter of the word with the first letter of
// the answer string, and if it is greater, it replaces the answer string with that letter.
// Also, it checks if the length of the word minus the length of the answer string minus the
// number of friends is greater than or equal to zero, to ensure that we can still form a
// valid answer string and append the actual letter with answer letter to create a bigger
// lexicographically word. (Wrong Answer - 702 / 785 testcases passed)
// function answerString(word: string, numFriends: number): string {
//   if(numFriends === 1)
//     return word;

//   let answerString = "";
//   for(let i = 0; i < word.length; i++) {
//     if((word.charCodeAt(i) > answerString.charCodeAt(0) || answerString.length === 0)) {
//       answerString = word[i];
//       continue;
//     }

//     if(word.length - answerString.length - numFriends >= 0)
//       answerString += word[i];
//   }

//   return answerString;
// };

// First Approach - Enumeration method checking all maximum length possible substrings of the word
// and checking with an answer variable with comparison operator. (Editorial solution)
function answerString(word: string, numFriends: number): string {
  if(numFriends === 1)
    return word;

  const n = word.length;

  let res = "";
  for(let i = 0; i < n; i++) {
    const s = word.substring(i, Math.min(i + n - numFriends + 1, n));
    if(s > res) {
      res = s;
    }
  }

  return res;
}

const case1 = answerString("dbca", 2);
const case2 = answerString("gggg", 4);
const case3 = answerString("nbjnc", 2);
const case4 = answerString("aann", 2);

console.log(`case1: ${case1} // ${case1 === 'dbc'}`);
console.log(`case2: ${case2} // ${case2 === 'g'}`);
console.log(`case3: ${case3} // ${case3 === 'nc'}`);
console.log(`case4: ${case4} // ${case4 === 'nn'}`);
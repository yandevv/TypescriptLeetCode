// First Try - Tracking transitivity and smallest letter of each letter and updating them as it goes iterating
// over the string, updating the smallest letter of each letter in the transitivity array, and pushing more
// letters to transitivity array. (Wrong Answer - 111 / 116 testcases passed)
// function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
//   const n = s1.length;

//   const transitivy: string[][] = Array.from({ length: 26 }, () => []), smallestLetter = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
//   for(let i = 0; i < n; i++) {
//     const letter1 = s1[i], letter2 = s2[i];
//     const letter1CharCode = s1.charCodeAt(i), letter2CharCode = s2.charCodeAt(i);

//     if(letter1CharCode === letter2CharCode)
//       continue;

//     transitivy[letter1CharCode - 97].push(letter2);
//     transitivy[letter2CharCode - 97].push(letter1);

//     if(smallestLetter[letter1CharCode - 97] < smallestLetter[letter2CharCode - 97]) {
//       smallestLetter[letter2CharCode - 97] = smallestLetter[letter1CharCode - 97];

//       for(const letter of transitivy[letter2CharCode - 97])
//         smallestLetter[letter.charCodeAt(0) - 97] = smallestLetter[letter1CharCode - 97];
//     } else {
//       smallestLetter[letter1CharCode - 97] = smallestLetter[letter2CharCode - 97];

//       for(const letter of transitivy[letter1CharCode - 97])
//         smallestLetter[letter.charCodeAt(0) - 97] = smallestLetter[letter2CharCode - 97];
//     }
//   }

//   let result = "";
//   for(const letter of baseStr) {
//     const letterCharCode = letter.charCodeAt(0);
//     result += smallestLetter[letterCharCode - 97];
//   }

//   return result;
// };

// First Approach - Union Find method to find the root of each letter and union them based on the input strings,
// maintaining the root being the smallest lexicographically letter ever. (https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/6813124/beats-c-100-python3-54-99-java-96-73-js-83-33-ts-50-00-leetcodedaybyday/?envType=daily-question&envId=2025-06-05)
function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
  let root : string[] = Array(26);
  for(let i = 0; i < 26; i++) {
    root[i] = String.fromCharCode(97 + i);
  }

  function find (x : string): string {
    if(root[x.charCodeAt(0) - 97] !== x){
      root[x.charCodeAt(0) - 97] = find(root[x.charCodeAt(0) - 97]);
    }

    return root[x.charCodeAt(0) - 97];
  }

  function unionSet(x : string, y : string): void {
    let r1 = find(x);
    let r2 = find(y);
    if(r1 !== r2) {
      if(r1 < r2) {
        root[r2.charCodeAt(0) - 97] = r1;
      } else {
        root[r1.charCodeAt(0) - 97] = r2;
      }
    }
  }

  for(let i = 0; i < s1.length; i++) {
    unionSet(s1[i], s2[i]);
  }

  let res = "";
  for(let i = 0; i < baseStr.length; i++) {
    res += find(baseStr[i]);
  }

  return res;
};

const case1 = smallestEquivalentString("parker", "morris", "parser");
const case2 = smallestEquivalentString("hello", "world", "hold");
const case3 = smallestEquivalentString("leetcode", "programs", "sourcecode");

console.log(`case1: ${case1} // ${case1 === "makkek"}`);
console.log(`case2: ${case2} // ${case2 === "hdld"}`);
console.log(`case3: ${case3} // ${case3 === "aauaaaaada"}`);
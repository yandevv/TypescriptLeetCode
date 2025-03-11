// First Approach - Sliding Window method tracking if is vowel and frequency by char code, dynamically
// adding to answer var the quantity of valid subarrays whenever conditions are met. (https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/solutions/6519195/beats-100-java-c-c-python3-c-js-ts-optimized-approach/?envType=daily-question&envId=2025-03-10)
function countOfSubstrings(word: string, k: number): number {
  let frequencies: number[][] = [new Array(128).fill(0), new Array(128).fill(0)];
  "aeiou".split("").forEach(v => frequencies[0][v.charCodeAt(0)] = 1);

  let response = 0, currentK = 0, vowels = 0, extraLeft = 0, left = 0;

  for(let right = 0; right < word.length; right++) {
    let rightChar = word.charCodeAt(right);

    if(frequencies[0][rightChar] === 1) {
      if(++frequencies[1][rightChar] === 1) vowels++;
    } else {
      currentK++;
    }

    while(currentK > k) {
      let leftChar = word.charCodeAt(left);
      if(frequencies[0][leftChar] === 1) {
        if(--frequencies[1][leftChar] === 0) vowels--;
      } else {
        currentK--;
      }
      left++;
      extraLeft = 0;
    }

    while(vowels === 5 && currentK === k && left < right && frequencies[0][word.charCodeAt(left)] === 1 && frequencies[1][word.charCodeAt(left)] > 1) {
      extraLeft++;
      frequencies[1][word.charCodeAt(left)]--;
      left++;
    }

    if(currentK === k && vowels === 5) {
      response += (1 + extraLeft);
    }
  }

  return response;
}

const case1 = countOfSubstrings("aeioqq", 1);
const case2 = countOfSubstrings("aeiou", 0);
const case3 = countOfSubstrings("ieaouqqieaouqq", 1);
const case4 = countOfSubstrings("iqeaouqi", 2);

console.log(`case1: ${case1} // ${case1 === 0}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === 3}`);
console.log(`case4: ${case4} // ${case4 === 3}`);
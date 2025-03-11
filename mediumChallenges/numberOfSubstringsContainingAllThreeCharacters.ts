// First Approach - Sliding window and two pointer method, iterating through s calculating for every
// substring that match condition the s.length - r substrings ahead to answer, subtracting the left
// pointer and checking until the condition is different. (10ms - Beats 89.29%)
function numberOfSubstrings(s: string): number {
  let aCount = 0, bCount = 0, cCount = 0, ans = 0;
  for(let l = 0, r = 0; r < s.length; r++) {
    const rightLetter = s[r];

    if(rightLetter === 'a') {
      aCount++;
    } else if(rightLetter === 'b') {
      bCount++;
    } else
      cCount++;

    if(!aCount || !bCount || !cCount)
      continue;

    while(aCount && bCount && cCount) {
      ans += s.length - r;

      const leftLetter = s[l];
      if(leftLetter === 'a') {
        aCount--;
      } else if(leftLetter === 'b') {
        bCount--;
      } else
        cCount--;

      l++;
    }
  }

  return ans;
};

const case1 = numberOfSubstrings("abcabc");
const case2 = numberOfSubstrings("aaacb");
const case3 = numberOfSubstrings("abc");

console.log(`case1: ${case1} // ${case1 === 10}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
// First Approach - Pattern Stack approach, iterating over the pattern and efficiently popping and appending the numbers based on pattern character.
// (https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/6435778/beats-100-algorithm-construct-smallest-number-from-di-string-explanation-with-video/?envType=daily-question&envId=2025-02-18)
function smallestNumber(pattern: string): string {
  const n = pattern.length, stack: number[] = [];

  let result = "";
  for(let i = 0; i <= n; i++) {
    stack.push(i + 1);

    if(i === n || pattern[i] === 'I') {
      while(stack.length > 0) {
        result += stack.pop();
      }
    }
  }

  return result;
};

const case1 = smallestNumber("IIIDIDDD");
const case2 = smallestNumber("DDD");

console.log(`case1: ${case1 === '123549876'}`);
console.log(`case2: ${case2 === '4321'}`);
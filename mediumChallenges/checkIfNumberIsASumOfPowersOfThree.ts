// First Approach - Recursive method DFSing through all possible exponents and checking if
// there's a combination which proves n. (151ms - Beats 27.27%)
function checkPowersOfThree(n: number, sum = 0, exponent = 0): boolean {
  if(sum === n)
    return true;

  const powerResult = 3 ** exponent;

  if(sum > n || powerResult > n)
    return false;

  return checkPowersOfThree(n, sum + powerResult, exponent + 1) || checkPowersOfThree(n, sum, exponent + 1);
};

// Second Approach: Math method converting n to base-3 and checking if there's any digit that's > 2,
// meaning it was used more than once returning false if so. (https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/6492524/simple-math-python-c-java-c-js-go-swift-kotlin-rust-php-etc/?envType=daily-question&envId=2025-03-04)
function checkPowersOfThree(n: number): boolean {
  while(n > 0) {
    if(n % 3 === 2)
      return false;

    n = Math.floor(n / 3);
  }

  return true;
};

const case1 = checkPowersOfThree(12);
const case2 = checkPowersOfThree(91);
const case3 = checkPowersOfThree(21);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
// First Approach - Combinatorial counting method calculating the number of powerful integers from 0 to start - 1
// (all numbers behind range) and from 0 to finish (all numbers in range) and subtracting the two results.
// (https://leetcode.com/problems/count-the-number-of-powerful-integers/editorial/?envType=daily-question&envId=2025-04-10)
function calculate(x: string, s: string, limit: number): number {
  if(x.length < s.length) {
    return 0;
  }

  if(x.length === s.length) {
    return x >= s ? 1 : 0;
  }

  const suffix = x.slice(-s.length);
  let count = 0;
  const preLen = x.length - s.length;

  for(let i = 0; i < preLen; i++) {
    const digit = parseInt(x[i]);

    if(limit < digit) {
      count += Math.pow(limit + 1, preLen - i);
      return count;
    }

    count += digit * Math.pow(limit + 1, preLen - 1 - i);
  }

  if(suffix >= s) {
    count++;
  }

  return count;
}

function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
  const start_ = (start - 1).toString();
  const finish_ = finish.toString();

  return calculate(finish_, s, limit) - calculate(start_, s, limit);
};

const case1 = numberOfPowerfulInt(1, 6000, 4, "124");
const case2 = numberOfPowerfulInt(15, 215, 6, "10");
const case3 = numberOfPowerfulInt(1000, 2000, 4, "3000");

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
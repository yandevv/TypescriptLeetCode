// First Approach - Identifying the minimum and maximum digits that will be needed to replace (avoiding 0s and 9s to improve answer)
// and iterating over number to calculate the remapping final values, returning the absolute difference between them.
// (0ms - Beats 100.00%)
function minMaxDifference(num: number): number {
  const strNum = num.toString();

  let numberToReplaceMinimum = strNum[0];
  for(let i = 0; i < strNum.length && numberToReplaceMinimum === '0'; i++)
    numberToReplaceMinimum = strNum[i];

  let numberToReplaceMaximum = strNum[0];
  for(let i = 0; i < strNum.length && numberToReplaceMaximum === '9'; i++)
    numberToReplaceMaximum = strNum[i];

  let biggestRemapping: number = 0, smallestRemapping: number = 0;
  for(let i = strNum.length - 1; i >= 0; i--) {
    const digit = strNum[i];

    const originalDigit = parseInt(digit) * Math.pow(10, strNum.length - 1 - i);
    if(digit === numberToReplaceMaximum) {
      biggestRemapping += 9 * Math.pow(10, strNum.length - 1 - i);
    } else {
      biggestRemapping += originalDigit;
    }

    if(digit !== numberToReplaceMinimum)
      smallestRemapping += originalDigit;
  }

  return biggestRemapping - smallestRemapping;
};

const case1 = minMaxDifference(11891);
const case2 = minMaxDifference(90);

console.log(`case1: ${case1} // ${case1 === 99009}`);
console.log(`case2: ${case2} // ${case2 === 99}`);
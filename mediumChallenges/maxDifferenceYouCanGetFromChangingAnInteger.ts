// First Approach - Tracking the optimal minimum and maximum numbers to replace in the given number, creating the
// maximum and minimum possible numbers, returning the difference at the end. (0ms - Beats 100.00%)
function maxDiff(num: number): number {
  if(num < 10)
    return 8;

  const strNum = num.toString();

  let numberToReplaceMinimum = strNum[0], canReplaceToZero = false;
  if(numberToReplaceMinimum === '1') {
    for(let i = 1; i < strNum.length; i++) {
      if(strNum[i] !== '1' && strNum[i] !== '0') {
        numberToReplaceMinimum = strNum[i];
        canReplaceToZero = true;
        break;
      }
    }
  }

  let numberToReplaceMaximum = strNum[0];
  if(numberToReplaceMaximum === '9') {
    for(let i = 1; i < strNum.length; i++) {
      if(strNum[i] !== '9') {
        numberToReplaceMaximum = strNum[i];
        break;
      }
    }
  }

  let maxNumber = 0, minNumber = 0;
  for(let i = 0; i < strNum.length; i++) {
    if(strNum[i] === numberToReplaceMinimum) {
      minNumber = minNumber * 10 + (canReplaceToZero ? 0 : 1);
    } else
      minNumber = minNumber * 10 + parseInt(strNum[i]);

    if(strNum[i] === numberToReplaceMaximum) {
      maxNumber = maxNumber * 10 + 9;
    } else
      maxNumber = maxNumber * 10 + parseInt(strNum[i]);
  }

  return maxNumber - minNumber;
};

const case1 = maxDiff(555);
const case2 = maxDiff(9);
const case3 = maxDiff(123456);
const case4 = maxDiff(9288);
const case5 = maxDiff(1101057);

console.log(`case1: ${case1} // ${case1 === 888}`);
console.log(`case2: ${case2} // ${case2 === 8}`);
console.log(`case3: ${case3} // ${case3 === 820000}`);
console.log(`case4: ${case4} // ${case4 === 8700}`);
console.log(`case5: ${case5} // ${case5 === 8808050}`);
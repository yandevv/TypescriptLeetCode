// First Approach - Brute force method comparing each possible way to arrange numbers, checking the constraints and
// adding at Set object if so, returning sorted Set at the end. (182ms - Beats 27.59%)
function findEvenNumbers(digits: number[]): number[] {
  const n = digits.length, foundNumbers = new Set<number>();
  for(let i = 0; i < n; i++)
    for(let j = 0; j < n; j++)
      for(let k = 0; k < n; k++)
        if(i !== j && i !== k && j !== k) {
          const num = digits[i] * 100 + digits[j] * 10 + digits[k];
          if(num % 2 === 0 && num >= 100)
            foundNumbers.add(num);
        }

  return Array.from(foundNumbers.keys()).sort((a, b) => a - b);
};

// Second Approach - Using DFS to find all possible combinations of 3 digits based on number count, checking the
// constraints and adding at Set object if so, returning sorted Set at the end. (9ms - Beats 79.31%)
function dfs(coeff: number, actualNumberCount: number[], foundNumbers: Set<number>, number: number = 0) {
  if(coeff === 3) {
    if(number % 2 === 0 && number >= 100) {
      foundNumbers.add(number);
    }
    return;
  }

  for(let i = 0; i < actualNumberCount.length; i++) {
    if(actualNumberCount[i] > 0) {
      actualNumberCount[i]--;
      dfs(coeff + 1, [...actualNumberCount], foundNumbers, number + i * (10 ** coeff));
      actualNumberCount[i]++;
    }
  }
}

function findEvenNumbers(digits: number[]): number[] {
  const numberCount: number[] = new Array(10).fill(0);
  for(const digit of digits) {
    numberCount[digit]++;
  }

  const foundNumbers = new Set<number>();
  dfs(0, numberCount, foundNumbers);

  return Array.from(foundNumbers.values()).sort((a, b) => a - b);
};

// Third Approach - Same as second approach but using an array instead of Set object to store the found numbers, returning
// sorted array at the end. (5ms - Beats 96.55%)
function dfs(coeff: number, actualNumberCount: number[], foundNumbers: number[], number: number = 0) {
  for(let i = 0; i < actualNumberCount.length; i++) {
    if((coeff === 0 && i % 2 !== 0) || actualNumberCount[i] === 0)
      continue;

    const numberCalc = number + i * (10 ** coeff);

    if(coeff === 2) {
      if(numberCalc >= 100)
        foundNumbers.push(numberCalc);

      continue;
    }


    actualNumberCount[i]--;
    dfs(coeff + 1, [...actualNumberCount], foundNumbers, numberCalc);
    actualNumberCount[i]++;
  }
}

function findEvenNumbers(digits: number[]): number[] {
  const numberCount: number[] = new Array(10).fill(0);
  for(const digit of digits) {
    numberCount[digit]++;
  }

  const foundNumbers: number[] = [];
  dfs(0, numberCount, foundNumbers);

  return foundNumbers.sort((a, b) => a - b);
};

// Fourth Approach - Same enumeration as the second and third approach but using iteration method with for loops to find all possible combinations of 3 digits based on
// number count, checking the constraints and adding at array if so, returning sorted array at the end. (https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/6735640/enumeration-with-images-example-walkthrough-c-python-java/?envType=daily-question&envId=2025-05-12)
function findEvenNumbers(digits: number[]): number[] {
  const numberCount: number[] = new Array(10).fill(0);
  for(const digit of digits) {
    numberCount[digit]++;
  }

  const foundNumbers: number[] = [];
  for(let i = 0; i < 10; i = i+2) {
    if(numberCount[i] === 0)
      continue;

    let numUnits = i;
    numberCount[i]--;

    for(let j = 0; j < 10; j++) {
      if(numberCount[j] === 0)
        continue;

      let numTens = numUnits + j * 10;
      numberCount[j]--;

      for(let k = 1; k < 10; k++) {
        if(numberCount[k] === 0)
          continue;

        let numHundred = numTens + k * 100;
        if(numHundred >= 100) {
          foundNumbers.push(numHundred);
        }
      }
      numberCount[j]++;
    }
    numberCount[i]++;
  }

  return foundNumbers.sort((a, b) => a - b);
};

const case1 = findEvenNumbers([2,1,3,0]);
const case2 = findEvenNumbers([2,2,8,8,2]);
const case3 = findEvenNumbers([3,7,5]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
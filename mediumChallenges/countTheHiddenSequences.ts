// First Approach - Brute force testing through all possible starting points of each hidden array, counting
// the valid ones and returning it. (Time Limit Exceeded - 71 / 86 testcases passed)
// function numberOfArrays(differences: number[], lower: number, upper: number): number {
//   let ans = 0;
//   for(let start = lower; start <= upper; start++) {
//     let current = start, valid = true;
//     for(let i = 0; i < differences.length; i++) {
//       current += differences[i];

//       if(current < lower || current > upper) {
//         valid = false;
//         break;
//       }
//     }

//     if(valid)
//       ans++;
//   }

//   return ans;
// };

// Second Approach - Same approach as the first one but with a optimization to calculate next possible
// hidden arrays based on the maximum number of the found hidden array, as every hidden array differs
// one by one from the previous one. (50ms - Beats -%)
function numberOfArrays(differences: number[], lower: number, upper: number): number {
  let ans = 0;
  for(let start = lower; start <= upper; start++) {
    let current = start, valid = true, maxNum = start;
    for(let i = 0; i < differences.length; i++) {
      current += differences[i];
      maxNum = Math.max(maxNum, current);

      if(current < lower || current > upper) {
        valid = false;
        break;
      }
    }

    if(valid) {
      ans = upper - maxNum + 1;
      break;
    }
  }

  return ans;
};

// Third Approach - Prefix sum method to calculate the maximum and minimum possible values
// of the hidden array based on the differences and you can calculate the number of possibilities
// with the difference of upper and lower bounds and maximum and minimum values. (Editorial solution)
function numberOfArrays(differences: number[], lower: number, upper: number): number {
  let x = 0, y = 0, current = 0;
  for(const difference of differences) {
    current += difference;
    x = Math.min(x, current);
    y = Math.max(y, current);
    if(y - x > upper - lower) {
      return 0;
    }
  }

  return upper - lower - (y - x) + 1;
};

const case1 = numberOfArrays([1,-3,4], 1, 6);
const case2 = numberOfArrays([3,-4,5,1,-2], -4, 5);
const case3 = numberOfArrays([4,-7,2], 3, 6);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
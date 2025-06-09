// First Try - Same iterative algorithm from last submission but without previous numbers tracking and just
// returning by the index. (42 / 69 testcases passed - Time Limit Exceeded)
// function findKthNumber(n: number, k: number): number {
//   let x = 1;

//   for(let i = 0; i < k; i++) {
//     if(i === k - 1)
//       break;

//     if(x * 10 > n) {
//       if(x === n)
//         x = Math.floor(x / 10);

//       x++;

//       while(x % 10 === 0)
//         x = Math.floor(x / 10);
//     } else
//       x *= 10;
//   }

//   return x;
// };

// First Approach - Tracking the possible numbers count for each prefix and decrementing k by it's count if
// lesser than k, either decrementing once and incrementing current number (Editorial Solution).
function countSteps(n: number, curr: number, next: number): number {
  let steps = 0;

  while(curr <= n) {
    steps += Math.min(n + 1, next) - curr;

    curr *= 10;
    next *= 10;
  }

  return steps;
}

function findKthNumber(n: number, k: number): number {
  let current = 1;

  k--;

  while(k > 0) {
    const count = countSteps(n, current, current + 1);

    if(count <= k) {
      current++;
      k -= count;
    } else {
      current *= 10;
      k--;
    }
  }

  return current;
}

const case1 = findKthNumber(13, 2);
const case2 = findKthNumber(1, 1);

console.log(`case1: ${case1} // ${case1 === 10}`);
console.log(`case2: ${case2} // ${case2 === 1}`);

// First Try - Brute forcing through range finding prime numbers and checking the range distance between
// then, finding the best minimum range. (Time Limit Exceeded - 13 / 68 testcases passed)
// function isPrime(num: number) {
//   if(num === 1)
//     return false;

//   for(let div = 2; div <= Math.floor(num / 2); div++) {
//     if(num % div === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function closestPrimes(left: number, right: number): number[] {
//   let lastPrime: number = -1, lastPrimesDistance = Number.MAX_VALUE, ans = [-1, -1];
//   for(let num = left; num <= right; num++) {
//     if(!isPrime(num))
//       continue;

//     if(lastPrime === -1) {
//       lastPrime = num;
//       continue;
//     }

//     if(num - lastPrime < lastPrimesDistance) {
//       ans = [lastPrime, num];
//       lastPrimesDistance = num - lastPrime;
//     }

//     lastPrime = num;
//   }

//   return ans;
// };

// First Approach - Same as first try but using Sieve of Eratosthenes to check prime numbers in the range. (137ms - Beats 71.43%)
function closestPrimes(left: number, right: number): number[] {
  const sieve: boolean[] = new Array(right + 1).fill(true);

  sieve[0] = sieve[1] = false;
  for(let i = 2; i * i <= right; i++) {
    if(sieve[i]) {
      for(let j = i * i; j <= right; j += i)
        sieve[j] = false;
    }
  }

  let minGap = Infinity, lastPrime = -1, result: number[] = [-1, -1];
  for(let i = left; i <= right; i++) {
    if(sieve[i]) {
      if(lastPrime === -1) {
        lastPrime = i;
        continue;
      }

      let gap = i - lastPrime;
      if(gap < minGap) {
        minGap = gap;
        result = [lastPrime, i];
      }

      lastPrime = i;
    }
  }

  return result;
}

const case1 = closestPrimes(10,19);
const case2 = closestPrimes(4,6);
const case3 = closestPrimes(19,31);
const case4 = closestPrimes(1,2);

console.log(`case1: ${case1} // Should be: [11,13]`);
console.log(`case2: ${case2} // Should be: [-1,-1]`);
console.log(`case3: ${case3} // Should be: [29,31]`);
console.log(`case4: ${case4} // Should be: [-1,-1]`);
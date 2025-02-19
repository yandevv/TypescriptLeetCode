// First Approach - Mathematical approach with casting the nines method, checking if a
// number and the digits sum is equivalent under modulo 9. (https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/6424747/solutions-with-math-explanation-7-12ms-66-7-100-o-n-1-60206-49-7-52-3mb-66-7-100-o-log-n/?envType=daily-question&envId=2025-02-15)
function punishmentNumber(n: number): number {
  let total = 0;
  for(let i = 1; i <= n; i++) {
    if(i % 9 !== 0 && i % 9 !== 1) {
      continue;
    }

    const squareStr = (i * i).toString();
    if(canPartition(squareStr, 0, i)) {
      total += i * i;
    }
  }

  return total;
}

function canPartition(s: string, index: number, target: number): boolean {
  if(index === s.length) {
    return target === 0;
  }

  let num = 0;
  for(let i = index; i < s.length; i++) {
    num = num * 10 + Number(s[i]);

    if(num > target) break;

    if(canPartition(s, i + 1, target - num)) {
      return true;
    }
  }

  return false;
}

const case1 = punishmentNumber(10);
const case2 = punishmentNumber(37);

console.log(`case1: ${case1} // ${case1 === 182}`)
console.log(`case2: ${case2} // ${case2 === 1478}`)
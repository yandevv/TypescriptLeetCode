// First Approach - Brute force method calculating from low to high inclusive all digits count
// with a balance (positive counting until mid and negative counting before mid),
// if results in zero adds to answer. (25ms - Beats 83.87%)
function countSymmetricIntegers(low: number, high: number): number {
  let ans = 0;
  for(let num = low; num <= high; num++) {
    const strNum = String(num);

    const len = strNum.length;
    if(len % 2 === 0) {
      const mid = len / 2;

      let balance = 0;
      for(let i = 0; i < len; i++) {
        if(i < mid) {
          balance += Number(strNum[i]);
        } else {
          balance -= Number(strNum[i]);
        }
      }

      if(balance === 0) {
        ans++;
      }
    }
  }

  return ans;
};

const case1 = countSymmetricIntegers(1, 100);
const case2 = countSymmetricIntegers(1200, 1230);

console.log(`case1: ${case1} // ${case1 === 9}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
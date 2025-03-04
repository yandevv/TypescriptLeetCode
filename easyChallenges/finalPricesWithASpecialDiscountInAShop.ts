// First Approach - Brute force method calculating for every index the subtraction with
// the nearest lowest forward index. (0ms - Beats 100.00%)
// function finalPrices(prices: number[]): number[] {
//   for(let i = 0; i < prices.length - 1; i++) {
//     for(let j = i + 1; j < prices.length; j++) {
//       if(prices[j] <= prices[i]) {
//         prices[i] -= prices[j];
//         break;
//       }
//     }
//   }

//   return prices;
// };

// Second Approach - Monotonic stack approach, tracking the numbers in a increase order
// to get the lowest nearest number for each index. (https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/6157851/monotonic-stack-using-c-array-c-python-beat-100/?envType=daily-question&envId=2024-12-18)
function finalPrices(prices: number[]): number[] {
  const n = prices.length;

  const stack = [n - 1], ans = [...prices];
  for(let i = n - 2; i >= 0; i--) {
    while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]])
      stack.pop();

    if(stack.length > 0) {
      ans[i] -= prices[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return ans;
};

const case1 = finalPrices([8,4,6,2,3]);
const case2 = finalPrices([1,2,3,4,5]);
const case3 = finalPrices([10,1,1,6]);

console.log(`case1: ${case1} // Should be: [4,2,4,2,3]`);
console.log(`case2: ${case2} // Should be: [1,2,3,4,5]`);
console.log(`case3: ${case3} // Should be: [9,0,1,6]`);
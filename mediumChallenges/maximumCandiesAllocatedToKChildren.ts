// First Approach - Binary search method searching possible candy count and test it, until it finds the limit
// of a possible equal count of candies to all kids. (14ms - Beats 100.00%)
function maximumCandies(candies: number[], k: number): number {
  const maxCandies = candies.reduce((prev, curr) => prev + curr);

  if(maxCandies < k)
    return 0;

  function canShareCandies(candiesTarget: number) {
    let validPiles = 0;
    for(const candyQuantity of candies) {
      validPiles += Math.floor(candyQuantity / candiesTarget);
      if(validPiles >= k)
        return true;
    }

    return false;
  }

  let left = 1, right = Math.floor(maxCandies / k), lastValidMid = 1;
  while(left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if(canShareCandies(mid)) {
      lastValidMid = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return lastValidMid;
}

const case1 = maximumCandies([5,8,6], 3);
const case2 = maximumCandies([2,5], 11);
const case3 = maximumCandies([9,10,1,2,10,9,9,10,2,2], 3);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 10}`);
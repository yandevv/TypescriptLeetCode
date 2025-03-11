// First Approach - Sliding window method checking if there's consecutive elements and, if so,
// reset attributing left to right. (https://leetcode.com/problems/alternating-groups-ii/solutions/6515222/sliding-window-python-c-java-js-c-go-swift-rust/?envType=daily-question&envId=2025-03-09)
function numberOfAlternatingGroups(colors: number[], k: number) {
  colors.push(...colors.slice(0, k - 1));

  let count = 0;

  let left = 0;
  for(let right = 0; right < colors.length; right++) {
    if(right > 0 && colors[right] === colors[right - 1]) {
      left = right;
    }

    if(right - left + 1 >= k) {
      count++;
    }
  }

  return count;
};

const case1 = numberOfAlternatingGroups([0, 1, 0, 1, 0], 3);
const case2 = numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6);
const case3 = numberOfAlternatingGroups([1, 1, 0, 1], 4);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
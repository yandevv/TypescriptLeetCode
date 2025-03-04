import { Deque } from "@datastructures-js/deque";

// First Approach - Double entry queue method iterating through numbers and stacking the numbers greater,
// equal and lower than pivot, popping it up in answer array in that order. (34ms - Beats 52.38%)
function pivotArray(nums: number[], pivot: number): number[] {
  const stPivot: Deque<number> = new Deque(), gtPivot: Deque<number> = new Deque();
  let pivotNumbersCount = 0;

  for(const num of nums) {
    if(num === pivot) {
      pivotNumbersCount++;
      continue;
    }

    if(num < pivot) {
      stPivot.pushBack(num);
      continue;
    }

    gtPivot.pushBack(num);
  }

  const ans: number[] = [];

  while(stPivot.size())
    ans.push(stPivot.popFront());

  for(let i = 0; i < pivotNumbersCount; i++)
    ans.push(pivot);

  while(gtPivot.size()) {
    ans.push(gtPivot.popFront());
  }

  return ans;
};

const case1 = pivotArray([9,12,5,10,14,3,10], 10);
const case2 = pivotArray([-3,4,3,2], 2);

console.log(`case1: ${case1} // Should be: [9,5,3,10,10,12,14]`);
console.log(`case2: ${case2} // Should be: [-3,2,4,3]`);
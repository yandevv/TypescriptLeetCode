import { PriorityQueue } from '@datastructures-js/priority-queue';

// First Approach - Heap method with min priority queueing nums and checking if the front number is lesser than k, if so do the operation and continue. (127ms - Beats 100.00%)
function minOperations(nums: number[], k: number): number {
  // Could not type as MinPriorityQueue because of LeetCode lib version limitation
  const pqNums = new PriorityQueue({ compare: (a, b) => a - b });

  for(const num of nums)
    pqNums.enqueue(num);

  let ans = 0;
  while(pqNums.front()! < k) {
    const n1 = pqNums.dequeue()!;
    const n2 = pqNums.dequeue()!;

    const newNum = Math.min(n1, n2) * 2 + Math.max(n1, n2);
    pqNums.enqueue(newNum);

    ans++;
  }

  return ans;
};

const case1 = minOperations([2,11,10,1,3], 10);
const case2 = minOperations([1,1,2,4,9], 20);

console.log(`case1: ${case1} // ${case1 === 2}`)
console.log(`case2: ${case2} // ${case2 === 4}`)
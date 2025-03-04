import { PriorityQueue } from "@datastructures-js/priority-queue";
import { Deque } from "@datastructures-js/deque";

// First Approach - Heap method with priority queue, adding the numbers with their indexes into a queue
// and dequeueing it, saving marked indexes in a set. (509ms - Beats 19.05%)
function findScore(nums: number[]): number {
  const pq = new PriorityQueue((a: number[], b: number[]) => {
    if(a[0] < b[0])
      return -1;

    if(a[0] > b[0])
      return 1;

    return a[1] < b[1] ? -1 : 1;
  });

  for(let i = 0; i < nums.length; i++) {
    pq.enqueue([nums[i], i]);
  }

  const markedIndexes: Set<number> = new Set();
  let score = 0;
  while(pq.size()) {
    const [number, index] = pq.dequeue()!;
    if(!markedIndexes.has(index)) {
      score += number;

      markedIndexes.add(index);
      markedIndexes.add(index + 1);
      markedIndexes.add(index - 1);
    }
  }

  return score;
};

// Second Approach - Deque method storing the numbers as it iterate and, whenever it finds a number
// that is bigger than it's previous number, it sums up deque in a alternate way to match with
// marked numbers. (https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6141171/stack-sorting-heap-3-approach-in-3-languages/?envType=daily-question&envId=2024-12-13)
function findScore(nums: number[]): number {
  const n = nums.length, deque: Deque<number> = new Deque();;

  let score = 0;
  for(let i = 0; i < n; i++) {
    if(!deque.isEmpty() && nums[i] >= deque.back()) {
      let skip = false;

      while(!deque.isEmpty()) {
        const add = deque.popBack();
        if(!skip)
          score += add;

        skip = !skip;
      }

      continue;
    }

    deque.pushBack(nums[i]);
  }

  let skip = false;
  while(!deque.isEmpty()) {
    let add = deque.popBack();
    if(!skip) {
      score += add;
    }

    skip = !skip;
  }

  return score;
};

const case1 = findScore([2,1,3,4,5,2]);
const case2 = findScore([2,3,5,1,3,2]);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
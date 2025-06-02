import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// First Approach - Priority Queue method enqueueing all ratings indexes with their priorities, iterating
// each of them in order transforming a result array and summing up a final answer to be returned.
// (84ms - Beats 11.4%)
function candy(ratings: number[]): number {
  const n = ratings.length;

  const minPqRatingIndexes = new MinPriorityQueue<number[]>(value => value[0]);
  for(let i = 0; i < n; i++) {
    minPqRatingIndexes.enqueue([ratings[i], i]);
  }

  const answerArray: number[] = [];
  let answer = 0;
  while(!minPqRatingIndexes.isEmpty()) {
    const [rating, index] = minPqRatingIndexes.dequeue()!;

    const left = index > 0 && ratings[index - 1] < rating ? answerArray[index - 1] : 0;
    const right = index < n - 1 && ratings[index + 1] < rating ? answerArray[index + 1] : 0;

    answer += Math.max(left, right) + 1;
    answerArray[index] = Math.max(left, right) + 1;
  }

  return answer;
};

// Second Approach - Two-pass greedy algorithm, first pass from left to right and second from right to
// left, checking candies and adjusting them accordingly.
// (https://leetcode.com/problems/candy/submissions/1651636469/?envType=daily-question&envId=2025-06-02)
function candy(ratings: number[]): number {
  const n = ratings.length;
  const candies = new Array(n).fill(1);

  for(let i = 1; i < n; i++)
    if(ratings[i] > ratings[i - 1])
      candies[i] = candies[i - 1] + 1;

  let answer = 0;
  for(let i = n - 1; i > 0; i--) {
    if(ratings[i - 1] > ratings[i])
      candies[i - 1] = Math.max(candies[i - 1], candies[i] + 1);

    answer += candies[i - 1];
  }

  return answer + candies[n - 1];
};

const case1 = candy([1,0,2]);
const case2 = candy([1,2,2]);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
// import { MinPriorityQueue, MaxPriorityQueue } from "@datastructures-js/priority-queue";

// First Try - Heap method tracking letter frequency and deleting optimally each letter count trimming the most
// frequent letters and removing the last frequent ones. Wrong as it does not account for the case where the
// most frequent letter is not the one to be deleted really optimal. (688 / 732 testcases passed)
// function minimumDeletions(word: string, k: number): number {
//   const n = word.length;

//   const wordFreq = new Array(26).fill(0);

//   for(let i = 0; i < n; i++)
//     wordFreq[word.charCodeAt(i) - 97]++;

//   const minFreqPq = new MinPriorityQueue<number[]>(freq => freq[1]), maxFreqPq = new MaxPriorityQueue<number[]>(freq => freq[1]);
//   for(let i = 0; i < wordFreq.length; i++) {
//     if(wordFreq[i] > 0) {
//       minFreqPq.enqueue([i, wordFreq[i]]);
//       maxFreqPq.enqueue([i, wordFreq[i]]);
//     }
//   }

//   let minDeletions = 0;
//   const conditionPQs = maxFreqPq.size() > 0 && minFreqPq.size() > 0, deletedChars = new Set<number>();
//   while(conditionPQs && maxFreqPq.front()![1] - minFreqPq.front()![1] > k) {
//     const minToDelete = minFreqPq.front()![1];
//     const maxToDelete = maxFreqPq.front()![1] - minFreqPq.front()![1] - k;

//     if(minToDelete < maxToDelete) {
//       minDeletions += minToDelete;
//       deletedChars.add(minFreqPq.front()![0]);
//       minFreqPq.dequeue();

//       continue;
//     }

//     const maxFreq = maxFreqPq.dequeue()!;
//     minDeletions += maxToDelete;
//     maxFreq[1] -= maxToDelete;

//     if(maxFreq[1] > 0) {
//       maxFreqPq.enqueue(maxFreq);
//     } else {
//       deletedChars.add(maxFreq[0]);
//     }
//   }

//   return minDeletions;
// };

// First Approach - Brute forcing through letter frequencies fixing a letter to be the one to be the lowest of
// the iteration, deleting any other that has more than it and trimming the ones that is bigger and has k more
// than it. (Hinted by the solution - 6ms - 100.00%)
function minimumDeletions(word: string, k: number): number {
  const n = word.length;

  const wordFreq = new Array(26).fill(0);

  for(let i = 0; i < n; i++)
    wordFreq[word.charCodeAt(i) - 97]++;

  let minDeletions = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < wordFreq.length; i++) { // Index selected to be the one to be fixed
    if(wordFreq[i] === 0)
      continue;

    let iterationMinDeletions = 0;
    for(let j = 0; j < wordFreq.length; j++) { // Indexes selected to be the ones to be deleted or trimmed
      if(i === j || wordFreq[j] === 0)
        continue;

      if(wordFreq[j] < wordFreq[i]) {
        iterationMinDeletions += wordFreq[j];
      } else if(wordFreq[j] > wordFreq[i] + k) {
        iterationMinDeletions += wordFreq[j] - wordFreq[i] - k;
      }
    }

    minDeletions = Math.min(minDeletions, iterationMinDeletions);
  }

  return minDeletions;
};

const case1 = minimumDeletions("aabcaba", 0);
const case2 = minimumDeletions("dabdcbdcdcd", 2);
const case3 = minimumDeletions("aaabaaa", 2);
const case4 = minimumDeletions("itatwtiwwi", 1);
const case5 = minimumDeletions("vvnowvov", 2);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
console.log(`case4: ${case4} // ${case4 === 1}`);
console.log(`case5: ${case5} // ${case5 === 1}`);
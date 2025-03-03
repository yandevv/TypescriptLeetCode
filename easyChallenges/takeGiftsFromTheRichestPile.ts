import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// First Approach - Max Priority Queue (heap) method, enqueueing present piles in a MaxPQ and iterating over k times,
// dequeueing, processing and returning the present pile to queue. (32ms - Beats 23.81%)
function pickGifts(gifts: number[], k: number): number {
  const maxPQGiftPiles: MaxPriorityQueue<number[]> = new MaxPriorityQueue((giftPile) => giftPile[0]);
  let ans = 0;
  for(let i = 0; i < gifts.length; i++) {
    const giftPile = gifts[i];

    ans += giftPile;
    maxPQGiftPiles.enqueue([giftPile, i]);
  }

  for(let i = 0; i < k; i++) {
    const giftPile = maxPQGiftPiles.dequeue()!;
    const newGiftPile = Math.floor(Math.sqrt(giftPile[0]));

    ans -= giftPile[0] - newGiftPile;

    maxPQGiftPiles.enqueue([newGiftPile, giftPile[1]]);
  }

  return ans;
};

const case1 = pickGifts([25,64,9,4,100], 4);
const case2 = pickGifts([1,1,1,1], 4);

console.log(`case1: ${case1} // ${case1 === 29}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
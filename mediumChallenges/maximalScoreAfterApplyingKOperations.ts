import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

// First Approach - Max PQ method iterating over nums and adding at queue, summing up to maxScore the dequeued number and enqueueing up again the third part of num. (594ms - Beats 33.33%)
function maxKelements(nums: number[], k: number): number {
	const pqMaxNums = new MaxPriorityQueue();

	nums.forEach((num) => pqMaxNums.enqueue(num));

	let maxScore = 0;
	for(let i = 0; i < k; i++) {
		const dequeueNumber = pqMaxNums.dequeue().element;
		maxScore += dequeueNumber;

		pqMaxNums.enqueue(Math.ceil(dequeueNumber / 3));
	}

	return maxScore;
};

const case1 = maxKelements([10,10,10,10,10], 5);
const case2 = maxKelements([1,10,3,3,3], 3);

console.log(`case1: ${case1} // ${case1 === 50}`);
console.log(`case2: ${case2} // ${case2 === 17}`);
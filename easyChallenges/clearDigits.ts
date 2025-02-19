import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

// First Approach - Max Priority Queueing indices and whenever encountering a number on
// string, dequeueing the index, arranging the indices values in the end. (17ms - Beats 7.78%)
function clearDigits(s: string): string {
	// Could not be typed as MaxPriorityQueue<number> generic interface
	const indexMaxPQ = new MaxPriorityQueue();

	for(let i = 0; i < s.length; i++) {
		const letter = s[i];
		if(!isNaN(parseInt(letter))) {
			indexMaxPQ.dequeue();
			continue;
		}

		indexMaxPQ.enqueue(i, i);
	}

	let ans = '';
	while(indexMaxPQ.size() > 0) {
		ans = s[indexMaxPQ.dequeue().element!] + ans;
	}

	return ans;
};

// Second Approach - Stacking characters when it's not a number and popping the stack
// whenever finding a number string. (Top submission on graph)
function clearDigits(s: string): string {
	const charStack: string[] = [];

	for(let i = 0; i < s.length; i++) {
		if(isNaN(parseInt(s[i]))) {
			charStack.push(s[i]);
		} else
			charStack.pop();
	}

	return charStack.join('');
};

const case1 = clearDigits("abc");
const case2 = clearDigits("cb34");

console.log(`case1: ${case1} // ${case1 === 'abc'}`);
console.log(`case2: ${case2} // ${case2 === ''}`);
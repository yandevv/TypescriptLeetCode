import { PriorityQueue } from "@datastructures-js/priority-queue";

// First Approch - Max Priority Queue method iterating over all digits and putting into a queue, that way comparing the front with the actual digit, dequeueing digits whenever is lesser or equal than actual index, and comparing the actual front with the actual index digit, swapping them up when it's necessary.
function maximumSwap(num: number): number {
	const maxPQ = new PriorityQueue({
		compare: (a: number[], b: number[]): number => {
			if(a[0] < b[0])
				return 1;

			if(a[0] === b[0] && a[1] < b[1]) {
				return 1;
			}

			return -1;
		}
	});

	let stringNum = num.toString();

	let iterableNum = num, index = stringNum.length - 1;
	while(iterableNum > 0) {
		maxPQ.enqueue([iterableNum % 10, index]);
		iterableNum = Math.floor(iterableNum / 10);
		index--;
	}

	let actualFront = maxPQ.front();
	for(let i = 0; i < stringNum.length; i++) {
		while(actualFront[1] <= i) {
			maxPQ.dequeue();
			actualFront = maxPQ.front();
			if(!actualFront)
				break;
		}

		if(!actualFront)
			break;

		const actualNumber = parseInt(stringNum.charAt(i));
		if(actualNumber < actualFront[0]) {
			const splittedNum = num.toString().split('');

			splittedNum[i] = actualFront[0].toString();
			splittedNum[actualFront[1]] = actualNumber.toString();

			num = parseInt(splittedNum.join(''));

			break;
		}
	}

	return num;
};

const case1 = maximumSwap(2736);
const case2 = maximumSwap(9973);

console.log(`case1: ${case1} // ${case1 === 7236}`);
console.log(`case2: ${case2} // ${case2 === 9973}`);
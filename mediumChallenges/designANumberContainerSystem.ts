// First Approach - Min Priority queueing the indexes by their number and checking every in find
// method if the number referenced by priority index is equal to the find number's parameter,
// removing it from queue if it's not (lazy deletion). (170ms - Beats 41.18%)
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

class NumberContainers {
	indexHeapByNumber: MinPriorityQueue[];
	indexNumberMap: Map<number, number>;

	constructor() {
		this.indexHeapByNumber = [];
		this.indexNumberMap = new Map();
	}

	change(index: number, number: number): void {
		this.indexNumberMap.set(index, number);

		if(!this.indexHeapByNumber[number])
			this.indexHeapByNumber[number] = new MinPriorityQueue();

		this.indexHeapByNumber[number].enqueue(index, index);
	}

	find(number: number): number {
		const numberHeap = this.indexHeapByNumber[number];
		if(numberHeap) {
			while(numberHeap.size() > 0) {
				let minimumIndex = numberHeap.front();

				if(this.indexNumberMap.get(minimumIndex.element) === number)
					return minimumIndex.element ?? -1;

				numberHeap.dequeue();
			}
		}

		return -1;
	}
}

const case1Obj = new NumberContainers();
console.log(`case1Obj find 1: ${case1Obj.find(10)} // ${case1Obj.find(10) === -1}`);
case1Obj.change(2, 10);
case1Obj.change(1, 10);
case1Obj.change(3, 10);
case1Obj.change(5, 10);
console.log(`case1Obj find 2: ${case1Obj.find(10)} // ${case1Obj.find(10) === 1}`);
case1Obj.change(1, 20);
console.log(`case1Obj find 2: ${case1Obj.find(10)} // ${case1Obj.find(10) === 2}`);
// First Try - Two Pointer iterating through all nums and pushing their absolute difference to distances array, ascending sorting array and return the k - 1 distance. (Runtime Error - 16/19 testcases passed)
// function smallestDistancePair(nums: number[], k: number): number {
// 	const distances: number[] = [];
// 	for(let i = 0; i < nums.length; i++)
// 		for(let j = i + 1; j < nums.length; j++)
// 			distances.push(Math.abs(nums[i] - nums[j]));

// 	distances.sort((a, b) => a - b);

// 	return distances[k - 1];
// };

// Second Try - MinHeap each absolute difference and removing k - 1 times the values from heap, returning the peek. - (Time Limit Exceeded - 16/19 testcases passed)
// class MinHeap {
// 	heap: number[];

// 	constructor() {
// 		this.heap = [];
// 	}

// 	// Helper Methods
// 	getLeftChildIndex(parentIndex: number): number {
// 		return 2 * parentIndex + 1;
// 	}

// 	getRightChildIndex(parentIndex: number): number {
// 		return 2 * parentIndex + 2;
// 	}

// 	getParentIndex(childIndex: number): number {
// 		return Math.floor((childIndex - 1) / 2);
// 	}

// 	hasLeftChild(index: number): boolean {
// 		return this.getLeftChildIndex(index) < this.heap.length;
// 	}

// 	hasRightChild(index: number): boolean {
// 		return this.getRightChildIndex(index) < this.heap.length;
// 	}

// 	hasParent(index: number): boolean {
// 		return this.getParentIndex(index) >= 0;
// 	}

// 	leftChild(index: number): number {
// 		return this.heap[this.getLeftChildIndex(index)];
// 	}

// 	rightChild(index: number): number {
// 		return this.heap[this.getRightChildIndex(index)];
// 	}

// 	parent(index: number): number {
// 		return this.heap[this.getParentIndex(index)];
// 	}

// 	// Main Methods
// 	swap(indexOne: number, indexTwo: number) {
// 		const temp: number = this.heap[indexOne];
// 		this.heap[indexOne] = this.heap[indexTwo];
// 		this.heap[indexTwo] = temp;
// 	}

// 	peek(): number | null {
// 		if (this.heap.length === 0) {
// 			return null;
// 		}
// 		return this.heap[0];
// 	}

// 	remove(): number | null {
// 		if (this.heap.length === 0) {
// 			return null;
// 		}
// 		const item: number = this.heap[0];
// 		this.heap[0] = this.heap[this.heap.length - 1];
// 		this.heap.pop();
// 		this.heapifyDown();
// 		return item;
// 	}

// 	add(item: number): void {
// 		this.heap.push(item);
// 		this.heapifyUp();
// 	}

// 	heapifyUp(): void {
// 		let index: number = this.heap.length - 1;
// 		while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
// 			this.swap(this.getParentIndex(index), index);
// 			index = this.getParentIndex(index);
// 		}
// 	}

// 	heapifyDown(): void {
// 		let index: number = 0;
// 		while (this.hasLeftChild(index)) {
// 			let smallerChildIndex: number = this.getLeftChildIndex(index);
// 			if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
// 				smallerChildIndex = this.getRightChildIndex(index);
// 			}
// 			if (this.heap[index] < this.heap[smallerChildIndex]) {
// 				break;
// 			} else {
// 				this.swap(index, smallerChildIndex);
// 			}
// 			index = smallerChildIndex;
// 		}
// 	}
// }

// function smallestDistancePair(nums: number[], k: number): number {
// 	const minHeap: MinHeap = new MinHeap();

// 	for(let i = 0; i < nums.length; i++)
// 		for(let j = i + 1; j < nums.length; j++)
// 			minHeap.add(Math.abs(nums[i] - nums[j]));

// 	for(let i = 1; i < k; i++)
// 		minHeap.remove();

// 	return minHeap.peek()!;
// };

// First Approach - Binary search approach, ascending sorting nums and searching from 0 to the maximum distance between numbers. (https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5633378/binary-search-easy-solution-6ms-beats-100/?envType=daily-question&envId=2024-08-14)
function smallestDistancePair(nums: number[], k: number): number {
	nums.sort((a, b) => a - b);

	const n = nums.length;

	let low = 0, high = nums[nums.length - 1] - nums[0];

	function countPairs(maxDistance: number) {
		let count = 0, j = 0;

		for(let i = 0; i < n; i++) {
			while(j < n && nums[j] - nums[i] <= maxDistance)
				j++;

			count += j - i - 1;
		}

		return count;
	}

	while(low < high) {
		const mid = Math.floor((low + high) / 2);

		if(countPairs(mid) < k) {
			low = mid + 1;
		} else
			high = mid;
	}

	return low;
};
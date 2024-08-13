// First Approach - Inserting every value into a array and sorting it after with sort built-in method from JS and, retrieving index value every add. (2916ms - Beats 6.77%)
class KthLargest {
	k: number;
	nums: number[];

	constructor(k: number, nums: number[]) {
		this.k = k;
		this.nums = nums;
		this.nums.sort((a, b) => b - a);
	}

	add(val: number): number {
		this.nums.push(val);
		this.nums.sort((a, b) => b - a);
		return this.nums[this.k - 1];
	}
}

// Second Approach - Creating a sorted array property and inserting every number with add method, sorting it after similar to a heapify up process, but without parent node calcs. (260ms - Beats 37.45%)
class KthLargest {
	k: number;
	nums: number[];

	constructor(k: number, nums: number[]) {
		this.k = k;
		this.nums = nums;
		this.nums.sort((a, b) => b - a);
	}

	add(value: number): number {
		this.nums.push(value);

		let index = this.nums.length - 1;
		while(index > 0 && this.nums[index] > this.nums[index - 1]) {
			const temp = this.nums[index];
			this.nums[index] = this.nums[index - 1];
			this.nums[index - 1] = temp;
			index--;
		}

		return this.nums[this.k - 1];
	}
}
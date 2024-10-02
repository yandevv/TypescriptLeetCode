// First Approach - Sorting arr to get an ascending order and mapping out these numbers by their position with a hashmap, mapping and returning arr with these ranks. (152ms - Beats 82.14%)
function arrayRankTransform(arr: number[]): number[] {
	const sortedArr = [...arr].sort((a, b) => a - b);

	const rankByNum: Map<number, number> = new Map();

	let lastNum: number, carry = 1;
	sortedArr.forEach(num => {
		if(lastNum !== num) {
			rankByNum.set(num, carry);
			lastNum = num;
			carry++;
		}
	});

	return arr.map(num => rankByNum.get(num)!);
};

// Second Approach - Mapping a new array based on arr numbers and their indices with an array and sorting by their number, being possible to iterating over again and setting an ans array set with array index and a carry number. (Based on https://leetcode.com/problems/rank-transform-of-an-array/solutions/5858070/sort-the-pairs-x-i-then-set-rank-vs-python-1-line-vs-radix-sort-18ms-beats-100/?envType=daily-question&envId=2024-10-02)
function arrayRankTransform(arr: number[]): number[] {
	const arrWithIndexes = arr.map((num, index) => [num, index]);

	arrWithIndexes.sort((a, b) => a[0] - b[0]);

	let ans: number[] = [];

	let prev = Number.MIN_SAFE_INTEGER, carry = 0;
	arrWithIndexes.forEach(num => {
		if(num[0] > prev) {
			ans[num[1]] = ++carry
		} else {
			ans[num[1]] = carry
		}

		prev = num[0];
	});

	return ans;
};

const case1 = arrayRankTransform([40,10,20,30]);
const case2 = arrayRankTransform([100,100,100]);
const case3 = arrayRankTransform([37,12,28,9,100,56,80,5,12]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
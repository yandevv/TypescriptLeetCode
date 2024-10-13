// First Approach - Sorting method iterating through the nums within a sliding window, checking and updating min range. (https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5905077/beats-100-working-13-10-2024/?envType=daily-question&envId=2024-10-13)
type NumElement = {
	num: number;
	index: number;
};

function smallestRange(nums: number[][]): number[] {
	const k: number = nums.length;

	const coverMap: Map<number, number> = new Map();

	const elements: NumElement[] = nums.reduce((result: NumElement[], list: number[], index: number) => {
		for(const num of list) {
			result.push({ num, index });
		}
		return result;
	}, []);

	let left: number = 0;
	let coverCount: number = 0;
	let minRange: number = Number.MAX_SAFE_INTEGER;
	let result: number[] = [];

	elements.sort((a, b) => a.num - b.num);

	for(let index = 0; index < elements.length; index++) {
		const element = elements[index];
		const count = coverMap.get(element.index) ?? 0;

		if(!count) coverCount += 1;
		coverMap.set(element.index, count + 1);

		while(coverCount === k) {
			const leftElement = elements[left];
			const range = element.num - leftElement.num;
			const leftCount = coverMap.get(leftElement.index)!;

			if(range < minRange) {
				minRange = range;
				result = [leftElement.num, element.num];
			}

			coverMap.set(leftElement.index, leftCount - 1);
			if(leftCount - 1 === 0) coverCount -= 1;
			left += 1;
		}
	}

	return result;
}

const case1 = smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]);
const case2 = smallestRange([[1,2,3],[1,2,3],[1,2,3]]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
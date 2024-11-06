// First Approach - Iterating over nums with a bubble sort algorithm, bubbling up ascending checking if both numbers are "set bit equalled" and checking at the end if array is sorted. (12ms - Beats 100.00%)
function setBitCounter(setBitMap: Map<number, number>, num: number) {
	const mappedNumberSetBitCount = setBitMap.get(num);
	if(mappedNumberSetBitCount)
		return mappedNumberSetBitCount;

	let setBitCount = 0, bittedNum = num;
	while(bittedNum > 0) {
		setBitCount += bittedNum & 1;
		bittedNum >>= 1;
	}

	setBitMap.set(num, setBitCount);
	
	return setBitCount;
}

function canSortArray(nums: number[]): boolean {
	const setBitNums: Map<number, number> = new Map();

	let checker = true;
	while(checker) {
		checker = false;

		for(let i = 0; i < nums.length; i++) {
			const actualNumber = nums[i];
			const nextNumber = nums[i + 1];

			if(actualNumber > nextNumber && setBitCounter(setBitNums, actualNumber) === setBitCounter(setBitNums, nextNumber)) {
				nums[i] = nextNumber;
				nums[i + 1] = actualNumber;
				checker = true;
			}
		}
	}

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] > nums[i + 1])
			return false;
	}

	return true;;
};

const case1 = canSortArray([8,4,2,30,15]);
const case2 = canSortArray([1,2,3,4,5]);
const case3 = canSortArray([3,16,8,4,2]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
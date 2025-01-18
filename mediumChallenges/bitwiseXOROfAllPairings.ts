// First Try - Brute force method iterating and XORing over nums1 and nums2, XORing with a total XOR result. (38 / 42 testcases passed)
// function xorAllNums(nums1: number[], nums2: number[]): number {
// 	let allXorResult = 0;
// 	for(let num1 of nums1) {
// 		for(let num2 of nums2) {
// 			allXorResult ^= num1 ^ num2;
// 		}
// 	}

// 	return allXorResult;
// };

// First Approach - Iterating through nums1 and nums2 and saving for XOR operation after only nums which have an odd count.
function xorAllNums(nums1: number[], nums2: number[]): number {
	const nums1Set: Set<number> = new Set();
	for(let num1 of nums1) {
		if(nums1Set.has(num1)) {
			nums1Set.delete(num1);
			continue;
		}

		nums1Set.add(num1);
	}

	const nums2Set: Set<number> = new Set();
	for(let num2 of nums2) {
		if(nums2Set.has(num2)) {
			nums2Set.delete(num2);
			continue;
		}

		nums2Set.add(num2);
	}

	let ans = 0
	for(let num1 of nums1Set.values()) {
		for(let num2 of nums2Set.values()) {
			ans ^= num1 ^ num2;
		}
	}

	return ans;
};

const case1 = xorAllNums([2,1,3], [10,2,5,0]);
const case2 = xorAllNums([1,2], [3,4]);
const case3 = xorAllNums([2], [5]);

console.log(`case1: ${case1} // ${case1 === 13}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 7}`);
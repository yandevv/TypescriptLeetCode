// First Approach - Tracking the permutation numbers appeared on both arrays and checking if
// the actual number on them is present in each other set objects, if so increases the
// pfCommonVal when true. There's a edge case check if the actual number of both arrays is
// the same, increasing the pfCommonVal just plus one. (5ms - Beats 90.91%)
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
	const n = A.length;
	const aNumbers: Set<number> = new Set(), bNumbers: Set<number> = new Set();

	const pfCommon: number[] = [];

	let pfCommonVal = 0;
	for(let i = 0; i < n; i++) {
		aNumbers.add(A[i]);
		bNumbers.add(B[i]);

		if(A[i] === B[i]) {
			pfCommonVal++;
		} else {
			if(bNumbers.has(A[i]))
				pfCommonVal++;
	
			if(aNumbers.has(B[i]))
				pfCommonVal++;
		}

		pfCommon[i] = pfCommonVal;
	}

	return pfCommon;
};

// Second Approach - Same analogy as first approach but using a mutual
// frequency array to track numbers. (6ms - Beats 90.91% / Solution Link: https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466857/day-394-brute-optimal-one-pass-100-0ms-python-java-c-explained-approach/?envType=daily-question&envId=2025-01-14)
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
	const n = A.length;
	const frequency: number[] = new Array(51).fill(0), pfCommon: number[] = [];

	for(let i = 0; i < n; i++) {
		pfCommon[i] = ((++frequency[A[i] - 1]) === 2 ? 1 : 0) + ((++frequency[B[i] - 1]) === 2 ? 1 : 0);
		if(i > 0)
			pfCommon[i] += pfCommon[i - 1];
	}

	return pfCommon;
};

const case1 = findThePrefixCommonArray([1,3,2,4], [3,1,2,4]);
const case2 = findThePrefixCommonArray([2,3,1], [3,1,2]);

console.log(`case1: ${case1} // Should be: [0,2,3,4]`);
console.log(`case2: ${case2} // Should be: [0,1,3]`);
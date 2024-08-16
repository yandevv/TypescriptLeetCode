// First Try O(n) - Two-pointer iterating over all arrays comparing their most difference and returning the max one. (TLE - 135 / 136 testcases passed)
function maxDistance(arrays: number[][]): number {
	let maxDist = 0;
	for(let i = 0; i < arrays.length; i++) {
		for(let j = i + 1; j < arrays.length; j++) {
			const firstMaxDist = Math.abs(arrays[i][0] - arrays[j][arrays[j].length - 1]);
			const secondMaxDist = Math.abs(arrays[j][0] - arrays[i][arrays[i].length - 1]);
			maxDist = Math.max(maxDist, firstMaxDist, secondMaxDist);
		}
	}
	return maxDist;
};

//Second Try - Single iteration through arrays counting the smallest and biggest every iteration and returning the absolute difference between, wrong because it can gets from the same array. (Wrong Answer - 121 / 136 testcases passed)
function maxDistance(arrays: number[][]): number {
	let lowestNum = Number.MAX_SAFE_INTEGER, biggestNum = Number.MIN_SAFE_INTEGER;

	for(let i = 0; i < arrays.length; i++) {
		lowestNum = Math.min(lowestNum, arrays[i][0]);
		biggestNum = Math.max(biggestNum, arrays[i][arrays[i].length - 1]);
	}

	return Math.abs(lowestNum - biggestNum);
};

// First Approach - Lowest and biggest numbers of first array storing and single iteration over remaining arrays calculating the maximum differences between their numbers and the actual lowest and biggest numbers. (109ms - Beats 100.00%)
function maxDistance(arrays: number[][]): number {
	let lowestNum = arrays[0][0], biggestNum = arrays[0][arrays[0].length - 1];
	let maximumDistance = 0;

	for(let i = 1; i < arrays.length; i++) {
		let actualArray = arrays[i];

		const firstDiff = Math.abs(lowestNum - actualArray[actualArray.length - 1]);
		const secondDiff = Math.abs(biggestNum - actualArray[0]);
		
		maximumDistance = Math.max(maximumDistance, firstDiff, secondDiff);
		
		lowestNum = Math.min(lowestNum, actualArray[0]);
		biggestNum = Math.max(biggestNum, actualArray[actualArray.length - 1]);
	}

	return maximumDistance;
};
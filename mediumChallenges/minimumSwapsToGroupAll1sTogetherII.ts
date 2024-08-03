// First Approach - Iterating over nums and getting one's count, and sliding window with one's count width getting minimum number of zeros. (97ms - Beats 62.5%)
function minSwaps(nums: number[]): number {
	const n = nums.length;

	let oneCount = 0;
	nums.forEach((num) => {
		if(num === 1) oneCount++;
	});

	let zeroCount = 0;
	for(let i = 0; i < oneCount - 1; i++)
		if(nums[i] === 0) zeroCount++;

	nums.push(...nums);

	let res: number | undefined;
	let i = 0;
	for(let j = oneCount - 1; i < n; j++) {
		if(nums[j] === 0) zeroCount++;

		res = Math.min((res ?? Number.MAX_SAFE_INTEGER), zeroCount);

		if(nums[i] === 0) zeroCount--;

		i++;
	}

	return (res ?? 0);
};

// Second Approach - Prefix summing zero's count in doubled nums array and sliding window with one's count number width getting the lowest number of zero's - (114ms - Beats 12.5%)
function minSwaps(nums: number[]): number {
	const n = nums.length;
	nums.push(...nums);
	
	let prefixSumZeros: number[] = [0];
	let oneCount = nums[0];
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] === 1) oneCount++;
		prefixSumZeros[i + 1] = prefixSumZeros[i] + (nums[i] === 0 ? 1 : 0);
	}

	oneCount = Math.floor(oneCount / 2);

	let res: number = prefixSumZeros[oneCount] - prefixSumZeros[0];

	let i = 1;
	for(let j = oneCount; i < n; j++) {
		const zeroCount = prefixSumZeros[j + 1] - prefixSumZeros[i];

		res = Math.min(res, zeroCount);

		i++;
	}

	return res;
};
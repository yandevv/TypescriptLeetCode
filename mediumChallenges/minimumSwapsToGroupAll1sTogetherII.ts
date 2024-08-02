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
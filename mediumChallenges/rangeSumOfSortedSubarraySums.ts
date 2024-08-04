// First Approach - Sliding window through nums and summing up subarrays, getting result into a array to sum the range and return. (293ms - Beats 100.0%)
function rangeSum(nums: number[], n: number, left: number, right: number): number {
	const subArraysSums: number[] = [];
	for(let i = 0; i < n; i++) {
		let sum = 0;
		for(let j = 0; j <= i; j++)
			sum += nums[j];

		subArraysSums.push(sum);

		let l = 1;
		for(let r = i + 1; r < n; r++) {
			sum -= nums[l - 1];
			sum += nums[r];
			subArraysSums.push(sum);
			l++;
		}
	}

	subArraysSums.sort((a, b) => a - b);

	let res = 0;
	for(let i = left - 1; i < right; i++) {
		res = (res + subArraysSums[i]) % (1e9 + 7);
	}

	return res;
};
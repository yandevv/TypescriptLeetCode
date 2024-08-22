// First Approach - Transforming num into a binary string, iterating over the string and incrementing to ans the inverse bit from string. (53ms - Beats 68.85%)
function findComplement(num: number): number {
	let binaryNum = (num >>> 0).toString(2);
	let ans = '';
	for(let i = 0; i < binaryNum.length; i++) {
		if(binaryNum.charAt(i) === "0") {
			ans += '1'
		} else
			ans += '0'
	}
	return parseInt(ans, 2);
};

// Second Approach - Getting the bit length of num and creating a mask, full of 1's bits with the num bit length, and xor operating num with mask. (59ms - Beats 37.71%)
function findComplement(num: number): number {
	let bitLengthNum = (num >>> 0).toString(2).length;

	let mask = (1 << bitLengthNum) - 1;

	return num ^ mask;
};
// First Approach - Iterative method by calculating XOR result for the last ans to the first and finding maximum value with "bitNumber === 0 || undefined = 2 ** index". (837ms - Beats 100.00%)
function getMaximumXor(nums: number[], maximumBit: number): number[] {
	const ans: number[] = [];
	let lastXORResult: number;

	nums.forEach((num, index) => {
		if(lastXORResult === undefined) {
			lastXORResult = num;
		} else
			lastXORResult ^= num;

		const xorResultBinaryString = (lastXORResult >> 0).toString(2);

		let actualBit = 0;
		for(let i = 0; i < maximumBit; i++) {
			let xorStringIndex = xorResultBinaryString.length - 1 - i;

			if(!parseInt(xorResultBinaryString[xorStringIndex])) {
				actualBit += 2 ** i;
			}
		}

		ans[nums.length - 1 - index] = actualBit;
	})

	return ans;
};

const case1 = getMaximumXor([0,1,1,3], 2);
console.log('---')
const case2 = getMaximumXor([2,3,4,7], 3);
console.log('---')
const case3 = getMaximumXor([0,1,2,2,5,7], 3);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
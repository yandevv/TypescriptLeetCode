// First Approach - Hashmapping two biggest values to each number digit sum, maxing
// ans variable with biggest values each iteration. (68ms - Beats 52.50%)
function sumOfDigits(num: number) {
	let digitSum = 0;
	for(let digit of num.toString())
		digitSum += parseInt(digit);

	return digitSum;
}

function maximumSum(nums: number[]): number {
	const maximumNumbersByDigitSum: Map<number, [number, number]> = new Map();

	let ans = -1;
	for(let num of nums) {
		const digitSum = sumOfDigits(num);

		let maximumNumbers = maximumNumbersByDigitSum.get(digitSum);
		if(!maximumNumbers) {
			maximumNumbers = [-1, -1];
		}

		if(num > maximumNumbers[0]) {
			maximumNumbers[1] = maximumNumbers[0];
			maximumNumbers[0] = num;
		} else if(num > maximumNumbers[1]) {
			maximumNumbers[1] = num;
		}

		maximumNumbersByDigitSum.set(digitSum, maximumNumbers);

		if(maximumNumbers[0] !== -1 && maximumNumbers[1] !== -1)
			ans = Math.max(ans, maximumNumbers[0] + maximumNumbers[1]);
	}

	return ans;
};

// Second Approach - Storing the biggest number by digit sum and in each iteration compare
// with last biggest number by digit sum, maxing up ans variable.
// (12ms - Beats 100.00% - Top submission on submissions graph)
function maximumSum(nums: number[]): number {
	const maximumNumberByDigitSum: number[] = Array(100).fill(0);

	let ans = -1;
	for(const num of nums) {
		let digitSum = 0;
		for(let remaining = num; remaining; remaining = (remaining / 10) | 0) {
			digitSum += remaining % 10;
		}

		if(maximumNumberByDigitSum[digitSum]) {
			ans = Math.max(ans, maximumNumberByDigitSum[digitSum] + num);
		}

		maximumNumberByDigitSum[digitSum] = Math.max(maximumNumberByDigitSum[digitSum], num);
	}

	return ans;
};

const case1 = maximumSum([18,43,36,13,7]);
const case2 = maximumSum([10,12,19,14]);
const case3 = maximumSum([229,398,269,317,420,464,491,218,439,153,482,169,411,93,147,50,347,210,251,366,401]);

console.log(`case1: ${case1} // ${case1 === 54}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
console.log(`case3: ${case3} // ${case3 === 973}`);
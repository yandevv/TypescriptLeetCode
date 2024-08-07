// First Approach - Iterating backwards through num and converting three-by-three with a function and, concatenating every time with the answer string incrementing with a coefficient string. (69ms - Beats 30.77%)
function transformNumberToString(num: number): string {
	const hundreds: {[key: number]: string} = {
		0: "",
		1: "One Hundred",
		2: "Two Hundred",
		3: "Three Hundred",
		4: "Four Hundred",
		5: "Five Hundred",
		6: "Six Hundred",
		7: "Seven Hundred",
		8: "Eight Hundred",
		9: "Nine Hundred"
	};

	const dozens: {[key: number]: string} = {
		0: "",
		2: "Twenty",
		3: "Thirty",
		4: "Forty",
		5: "Fifty",
		6: "Sixty",
		7: "Seventy",
		8: "Eighty",
		9: "Ninety"
	};

	const tens: {[key: number]: string} = {
		0: "Ten",
		1: "Eleven",
		2: "Twelve",
		3: "Thirteen",
		4: "Fourteen",
		5: "Fifteen",
		6: "Sixteen",
		7: "Seventeen",
		8: "Eighteen",
		9: "Nineteen"
	};

	const units: {[key: number]: string} = {
		1: "One",
		2: "Two",
		3: "Three",
		4: "Four",
		5: "Five",
		6: "Six",
		7: "Seven",
		8: "Eight",
		9: "Nine",
	}

	let hundredDigit = Math.floor(num / 100);
	let dozenDigit = Math.floor((num - hundredDigit * 100) / 10);
	let unitDigit = num - hundredDigit * 100 - dozenDigit * 10;

	if(dozenDigit === 0) {
		if(unitDigit === 0) {
			return hundreds[hundredDigit]
		}
		return [hundreds[hundredDigit], units[unitDigit]].join(" ").trim();
	}

	if(dozenDigit === 1) return [hundreds[hundredDigit], tens[unitDigit]].join(" ").trim();

	return [hundreds[hundredDigit], dozens[dozenDigit], units[unitDigit]].join(" ").trim();
}

function numberToWords(num: number): string {
	if(num === 0) return "Zero";

	const coefficients: {[key: number]: string} = {
		1: "Thousand",
		2: "Million",
		3: "Billion"
	}

	let splittedNum: string[] = num.toString().split('');
	let n = splittedNum.length;

	let firstNumber = parseInt((splittedNum[n - 3] ?? '0') + (splittedNum[n - 2] ?? '0') + splittedNum[n - 1]);
	let ans: string = transformNumberToString(firstNumber);

	let coefficient = 0;
	for(let i = splittedNum.length - 4; i >= 0; i -= 3) {
		const actualNumber = parseInt((splittedNum[i - 2] ?? '0') + (splittedNum[i - 1] ?? '0') + splittedNum[i]);
		coefficient++;

		if(actualNumber === 0)
			continue;

		ans = [transformNumberToString(actualNumber), coefficients[coefficient], ans].join(" ");
	}

	return ans.trim();
};
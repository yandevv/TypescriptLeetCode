// First Try - Brute force iterating horizontally through n and checking with it's a palindrome (optimally). (Time Limit Exceeded 163 / 217 testcases passed)
function nearestPalindromic(n: string): string {
	const number = parseInt(n);
	let leftNum = number, rightNum = number;
	while(true) {
		leftNum -= 1;
		rightNum += 1;

		if(leftNum > -1) {
			const stringLeftNum = leftNum.toString();
			let j = stringLeftNum.length - 1;
			for(let i = 0; i < stringLeftNum.length; i++) {
				if(stringLeftNum.charAt(i) !== stringLeftNum.charAt(j))
					break;
				j--;
	
				if(i === Math.floor(stringLeftNum.length / 2))
					return stringLeftNum;
			}
		}

		const stringRightNum = rightNum.toString();
		let j = stringRightNum.length - 1;
		for(let i = 0; i < stringRightNum.length; i++) {
			if(stringRightNum.charAt(i) !== stringRightNum.charAt(j))
				break;
			j--;

			if(i === Math.floor(stringRightNum.length / 2))
				return stringRightNum;
		}
	}
};

// Second Try - Getting first half of number and (if it exists) the middle of the number and concatenating with the mirrored version of first half. (Wrong Answer - 107 / 217 testcases passed)
function nearestPalindromic(n: string): string {
	let firstHalfNum = n.substring(0, Math.floor(n.length / 2));
	let ans = firstHalfNum;
	if(n.length % 2 === 1)
		ans += n.charAt(Math.floor(n.length / 2));
	ans += firstHalfNum.split('').reverse().join('');
	return ans;
};

// First Approach - Solving by comparing the five possibilities of near palindromes from n and return the string of nearest lowest one. (53ms - Beats 80.00% - https://leetcode.com/problems/find-the-closest-palindrome/submissions/1367173650/?envType=daily-question&envId=2024-08-24 and Edital)
function nearestPalindromic(numberStr: string) {
	let number = BigInt(numberStr);
	if (number <= 10n) return (number - 1n).toString();
	if (number === 11n) return "9";

	let length = numberStr.length;
	let leftHalf = BigInt(numberStr.slice(0, (length + 1) / 2));
	
	let palindromeCandidates: bigint[] = [
			BigInt(generatePalindromeFromLeft(leftHalf - 1n, length % 2 === 0)),
			BigInt(generatePalindromeFromLeft(leftHalf, length % 2 === 0)),
			BigInt(generatePalindromeFromLeft(leftHalf + 1n, length % 2 === 0)),
			BigInt(10n ** BigInt(length - 1)) - 1n,
			BigInt(10n ** BigInt(length)) + 1n
	];

	let nearestPalindrome = 0n;
	let minDifference = BigInt(Number.MAX_SAFE_INTEGER);

	for (let candidate of palindromeCandidates) {
			if (candidate === number) continue;
			let difference = candidate > number ? candidate - number : number - candidate;
			if (difference < minDifference || (difference === minDifference && candidate < nearestPalindrome)) {
					minDifference = difference;
					nearestPalindrome = candidate;
			}
	}

	return nearestPalindrome.toString();
};

function generatePalindromeFromLeft(leftHalf: bigint, isEvenLength: boolean) {
	let palindrome = leftHalf;
	if (!isEvenLength) leftHalf = leftHalf / 10n;
	while (leftHalf > 0n) {
			palindrome = palindrome * 10n + leftHalf % 10n;
			leftHalf = leftHalf / 10n;
	}
	return palindrome;
}
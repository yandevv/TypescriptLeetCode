// First Try - Prefix summing s2 by charCodeAt and comparing with s1 total charCodeAt sum, checking if each substring is a permutation comparing the sums. (86 / 108 testcases passed)
// function checkInclusion(s1: string, s2: string): boolean {
// 	let s1CharSum = 0;
// 	for(let char of s1) {
// 		s1CharSum += char.charCodeAt(0) - "a".charCodeAt(0);
// 	}

// 	const prefixSumS2 = [0];
// 	for(let i = 0; i < s2.length; i++) {
// 		prefixSumS2.push(prefixSumS2[i] + (s2.charCodeAt(i) - "a".charCodeAt(0)));
// 	}

// 	let l = 0;
// 	for(let r = s1.length; r < s2.length; r++) {
// 		if(prefixSumS2[r] - prefixSumS2[l] === s1CharSum)
// 			return true;
// 		l++;
// 	}

// 	return false;
// };

// First Approach - Counting s2 chars in a counting array and if after incrementing and decrementing the current and past chars, respectively, and all the chars of freq is zeros, return true, otherwise false. (https://leetcode.com/problems/permutation-in-string/submissions/1412738596/?envType=daily-question&envId=2024-10-05)
function isPermutation(chars: number[]) {
	return chars.every((char) => char === 0);
}

function checkInclusion(s1: string, s2: string) {
	const chars = new Array(26).fill(0);

	for(const char of s1) {
		chars[char.charCodeAt(0) - 97]++;
	}

	for(let i = 0; i < s2.length; i++) {
		chars[s2[i].charCodeAt(0) - 97]--;

		if(i >= s1.length) {
			chars[s2[i - s1.length].charCodeAt(0) - 97]++;
		}

		if(isPermutation(chars)) return true;
	}

	return false;
};

const case1 = checkInclusion("ab", "eidbaooo");
const case2 = checkInclusion("ab", "eidboaoo");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
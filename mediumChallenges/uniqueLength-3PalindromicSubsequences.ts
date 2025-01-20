// First Approach - Finding the smallest and biggest indices for every letter and iterating between
// every index and increasing palindrome count with unique chars. (293ms - 70.59%)
function countPalindromicSubsequence(s: string): number {
	const charIndices = new Array(26), singularChars: Set<string> = new Set();

	for(let i = 0; i < s.length; i++) {
		if(!charIndices[s[i].charCodeAt(0) - 97] && !singularChars.has(s[i])) {
			for(let j = s.length - 1; j >= 0; j--) {
				if(i >= j) {
					singularChars.add(s[i]);
					break;
				}

				if(s[i] === s[j]) {
					charIndices[s[i].charCodeAt(0) - 97] = [i, j];
					break;
				}
			}
		}
	}

	let palindromesCount = 0;
	charIndices.forEach(charIndice => {
		const chars: Set<string> = new Set();
		for(let i = charIndice[0] + 1; i < charIndice[1]; i++) {
			if(!chars.has(s[i])) {
				palindromesCount++;
				chars.add(s[i]);
			}
		}
	});

	return palindromesCount;
};

// Second Approach - Same concept of first approach but iterates over between the
// first and last at the time. (255ms - Beats 82.35%)
function countPalindromicSubsequence(s: string): number {
	const iteratedChars: Set<string> = new Set(), n = s.length;

	let palindromesCount = 0;
	for(let i = 0; i < n; i++) {
		if(iteratedChars.has(s[i]))
			continue;

		const lastIndex = s.lastIndexOf(s[i]);

		const uniqueChars: Set<string> = new Set();
		for(let j = i + 1; j < lastIndex; j++) {
			if(!uniqueChars.has(s[j])) {
				palindromesCount++;
				uniqueChars.add(s[j]);
			}
		}

		iteratedChars.add(s[i]);
	}

	return palindromesCount;
};

// Third Approach - Alphabet-focused method finding the first and last indices from every
// alphabet character and iterating over the middle of them, finding the unique characters
// and increasing the palindromes count. (8ms - Beats 100.00% Best runtime solution of submission's graph)
function countPalindromicSubsequence(s: string): number {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';

	const n = alphabets.length;
	let count = 0;

	for(let i = 0; i < n; i += 1) {
		const ch = alphabets[i];
		const left = s.indexOf(ch);
		const right = s.lastIndexOf(ch);

		if(left < right) {
			for(const alpha of alphabets) {
				const mid = s.indexOf(alpha, left + 1);
				if(mid !== -1 && mid < right)
					count += 1;
			}
		}
	}

	return count;
}

const case1 = countPalindromicSubsequence("aabca");
const case2 = countPalindromicSubsequence("adc");
const case3 = countPalindromicSubsequence("bbcbaba");
const case4 = countPalindromicSubsequence("uuuuu");
const case5 = countPalindromicSubsequence("aabca");

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
console.log(`case4: ${case4} // ${case4 === 1}`);
console.log(`case5: ${case5} // ${case5 === 3}`);
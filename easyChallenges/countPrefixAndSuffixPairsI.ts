// First Approach - One Pointer approach checking both sides of str2 comparing with str1, that away comparing with O(n^2) for loop through words. (4ms - Beats 45.71%)
function isPrefixAndSuffix(str1: string, str2: string): number {
	let l = 0, r = str2.length - 1;

	while(l < str1.length) {
		if(str2[l] === str1[l] && str2[r] === str1[str1.length - l - 1]) {
			l++;
			r--;
		} else
			return 0;
	}

	return 1;
}

function countPrefixSuffixPairs(words: string[]): number {
	let pairs = 0;
	for(let i = 0; i < words.length; i++) {
		for(let j = i + 1; j < words.length; j++) {
			pairs += isPrefixAndSuffix(words[i], words[j]);
		}
	}

	return pairs;
};

const case1 = countPrefixSuffixPairs(["a","aba","ababa","aa"]);
const case2 = countPrefixSuffixPairs(["pa","papa","ma","mama"]);
const case3 = countPrefixSuffixPairs(["abab","ab"]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
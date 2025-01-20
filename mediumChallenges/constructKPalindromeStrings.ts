// First Approach - Character counting and checking if the characters
// which have odd count is greater than k, returning false if so. (12ms - Beats 64.29% - Hinted)
function canConstruct(s: string, k: number): boolean {
	if(s.length < k)
		return false;

	const charCount = new Array(26).fill(0);
	for(let char of s) {
		charCount[char.charCodeAt(0) - 97]++;
	}

	let oddNumbersCount = 0;
	for(let i = 0; i < charCount.length; i++) {
		if(charCount[i] % 2 === 1)
			oddNumbersCount++;

		if(oddNumbersCount > k)
			return false;
	}

	return true;
};

const case1 = canConstruct("annabelle", 2);
const case2 = canConstruct("leetcode", 3);
const case3 = canConstruct("true", 4);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
console.log(`case3: ${case3} // ${case3}`);
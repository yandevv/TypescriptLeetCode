// First Approach - Array method storing the minimum needed letter's count of words2's words and compare with the letters count of every word of words2. (42ms - Beats 100.00%)
function wordSubsets(words1: string[], words2: string[]): string[] {
	// Count which letters is needed based on words2 array
	const neededLetters: number[] = new Array(26).fill(0);
	for(let word2 of words2) {
		const word2NeededLetters: number[] = new Array(26).fill(0);
		for(let letter of word2) {
			const letterIndex = letter.charCodeAt(0) - 97;
			word2NeededLetters[letterIndex]++;
			neededLetters[letterIndex] = Math.max(neededLetters[letterIndex], word2NeededLetters[letterIndex]);
		}
	}

	// Count every words1's words letters and compare if it has the minimum count of letters with neededLetters array
	const universalStrings: string[] = [];
	for(let word1 of words1) {
		const word1Letters: number[] = new Array(26).fill(0);
		for(let letter of word1) {
			const letterIndex = letter.charCodeAt(0) - 97;
			word1Letters[letterIndex]++
		}

		if(word1Letters.every((letterCount, index) => neededLetters[index] <= letterCount))
			universalStrings.push(word1);
	}

	return universalStrings;
};

const case1 = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]);
const case2 = wordSubsets(["amazon","apple","facebook","google","leetcode"], ["l","e"]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
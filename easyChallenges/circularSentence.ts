// First Approach - Iterating over all sentence splitted by a space and comparing the actual word last letter with the next word first letter, and if it encounters a difference returns false. (0ms - Beats 100.00%)
function isCircularSentence(sentence: string): boolean {
	const splittedSentence = sentence.split(' ');

	for(let i = 0; i < splittedSentence.length; i++) {
		const word1 = splittedSentence[i];
		const word2 = splittedSentence[i + 1] ?? splittedSentence[0];

		if(word1[word1.length - 1] !== word2[0])
			return false;
	}

	return true;
};

const case1 = isCircularSentence('leetcode exercises sound delightful');
const case2 = isCircularSentence('eetcode');
const case3 = isCircularSentence('Leetcode is cool');

console.time('Case 1');
console.log(`case1: ${case1} // ${case1}`);
console.timeEnd('Case 1');
console.time('Case 2');
console.log(`case2: ${case2} // ${case2}`);
console.timeEnd('Case 2');
console.time('Case 3');
console.log(`case3: ${case3} // ${!case3}`);
console.timeEnd('Case 3');
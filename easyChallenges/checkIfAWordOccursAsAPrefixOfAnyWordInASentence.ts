// First Approach - Iterating through sentence comparing with searchWord with every sentence word. (0ms - Beats 100.00%)
function isPrefixOfWord(sentence: string, searchWord: string): number {
	let wordIndex = 1, searchWordIndex = 0;
	for(let i = 0; i < sentence.length; i++) {
		if(sentence[i] === " ") {
			wordIndex++;
			searchWordIndex = 0

			continue;
		}

		if(sentence[i] === searchWord[searchWordIndex]) {
			searchWordIndex++;

			if(searchWordIndex === searchWord.length)
				return wordIndex;

			continue;
		}

		while(i < sentence.length && sentence[i + 1] !== " ") {
			i++;
		}
	}

	return -1;
};

// Second Approach - Regex method splitting the sentence by the whitespaces and comparing each index value with a pattern. (1ms - Beats 10.00%)
function isPrefixOfWord(sentence: string, searchWord: string): number {
	const splittedSentence = sentence.split(" ");

	for(let i = 0; i < splittedSentence.length; i++) {
		if(splittedSentence[i].match(new RegExp(`^${searchWord}`)))
			return i + 1;
	}

	return -1;
};

const case1 = isPrefixOfWord("i love eating burger", "burg");
const case2 = isPrefixOfWord("this problem is an easy problem", "pro");
const case3 = isPrefixOfWord("i am tired", "you");
const case4 = isPrefixOfWord("hellohello hellohellohello", "ell");
const case5 = isPrefixOfWord("dumb dream duck duck i", "drea");

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === -1}`);
console.log(`case4: ${case4} // ${case4 === -1}`);
console.log(`case5: ${case5} // ${case5 === 2}`);
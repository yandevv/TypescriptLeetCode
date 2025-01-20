// First Approach - Sorting words by their length to optimize search and comparing each word with next words with search method. (9ms - Beats 13.79%)
function stringMatching(words: string[]): string[] {
	words.sort((a, b) => a.length - b.length);

	let substringWords: string[] = [];
	for(let i = 0; i < words.length; i++) {
		for(let j = i + 1; j < words.length; j++) {
			if(words[j].search(words[i]) !== -1) {
				substringWords.push(words[i]);
				break;
			}
		}
	}

	return substringWords;
};

// Second Approach - Identical to first approach but using indexOf method being more performatic. (1ms - Beats 93.10%)
function stringMatching(words: string[]): string[] {
	words.sort((a, b) => a.length - b.length);

	let substringWords: string[] = [];
	for(let i = 0; i < words.length; i++) {
		for(let j = i + 1; j < words.length; j++) {
			if(words[j].search(words[i]) !== -1) {
				substringWords.push(words[i]);
				break;
			}
		}
	}

	return substringWords;
};

const case1 = stringMatching(["mass","as","hero","superhero"]);
const case2 = stringMatching(["leetcode","et","code"]);
const case3 = stringMatching(["blue","green","bu"]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
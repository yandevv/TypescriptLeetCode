// First Try - DP approach precalculating every possible prefix for every word and iterating over every prefix comparing with every other word prefix. (Time Limit Exceeded - 27/38 testcases passed)
// function sumPrefixScores(words: string[]): number[] {
// 	const ans: number[] = [];

// 	const wordsPrefixes: Set<string>[] = [];
// 	for(let i = 0; i < words.length; i++) {
// 		wordsPrefixes.push(new Set());
// 	}

// 	for(let i = 0; i < words.length; i++) {
// 		let word = words[i];

// 		let prefix = '';
// 		for(let wordIndex = 0; wordIndex < word.length; wordIndex++) {
// 			prefix += word[wordIndex];
// 			wordsPrefixes[i].add(prefix);
// 		}
// 	}

// 	for(let i = 0; i < words.length; i++) {
// 		let prefixScore = 0;

// 		for(let prefix of wordsPrefixes[i].keys()) {
// 			let score = 0;

// 			for(let j = 0; j < wordsPrefixes.length; j++) {
// 				if(wordsPrefixes[j].has(prefix))
// 					score++;
// 			}

// 			prefixScore += score;
// 		}

// 		ans.push(prefixScore);
// 	}
	
// 	return ans;
// };

// First Approach - Trie approach iterating over all characters of all words and mapping letters to get a full trie with scores (repeated letters), and iterating over again for each word to get the score of each word. (https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830146/full-dry-run-brute-to-trie-explained-illustrations-let-s-go/?envType=daily-question&envId=2024-09-25)
class TrieNode {
	children: TrieNode[] = [];
	score: number = 0;
}

class Trie {
	root: TrieNode;

	constructor() {
		this.root = new TrieNode();
	}

	insert(word: string): void {
		let node = this.root;
		for(let ch of word) {
			let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

			if(!node.children[idx])
				node.children[idx] = new TrieNode();

			node = node.children[idx];

			node.score++;
		}
	}

	getScore(word: string): number {
		let node = this.root;

		let totalScore = 0;
		for(let ch of word) {
			let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

			if(!node.children[idx])
				break;

			node = node.children[idx];

			totalScore += node.score;
		}

		return totalScore;
	}
}

function sumPrefixScores(words: string[]): number[] {
	const trie = new Trie();

	for(let word of words) {
		trie.insert(word);
	}

	const ans: number[] = []
	for(let word of words) {
		ans.push(trie.getScore(word));
	}

	return ans;
};

const case1 = sumPrefixScores(["abc","ab","bc","b"]);
const case2 = sumPrefixScores(["abcd"]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
// First Approach - Counting words from each sentence and return filtered and mapped entries from map. (https://leetcode.com/problems/uncommon-words-from-two-sentences/?envType=daily-question&envId=2024-09-17)
function uncommonFromSentences(s1: string, s2: string): string[] {
	const wordMap : Map<string, number> = new Map();

	s1.split(" ").forEach((element) => {
			wordMap.set(element, (wordMap.get(element) ?? 0) + 1);
	})

	s2.split(" ").forEach((element) => {
			wordMap.set(element, (wordMap.get(element) ?? 0) + 1);
	})

	return Array.from(wordMap).filter(([key,value]) => value === 1).map(([key,value]) => key);
};

const case1 = uncommonFromSentences("this apple is sweet", "this apple is sour");
const case2 = uncommonFromSentences("apple apple", "banana");

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
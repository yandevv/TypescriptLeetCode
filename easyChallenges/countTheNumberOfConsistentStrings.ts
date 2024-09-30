// First Approach - Iterating over allowed chars and registering into a Set, and iterating over words for each word comparing with Set. (74ms - Beats 100.00%)
function countConsistentStrings(allowed: string, words: string[]): number {
	const allowedSet: Set<string> = new Set();
	for(let i = 0; i < allowed.length; i++) {
		allowedSet.add(allowed.charAt(i));
	}

	let ans = 0;
	words.forEach(word => {
		let isConsistent = 1;
		for(let i = 0; i < word.length; i++) {
			if(!allowedSet.has(word.charAt(i))) {
				isConsistent = 0;
				break;
			}
		}

			ans += isConsistent;
	})

	return ans;
};

const case1 = countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]);
const case2 = countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]);
const case3 = countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 7}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
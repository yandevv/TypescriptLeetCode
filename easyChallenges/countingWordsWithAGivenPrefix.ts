// First Approach - Iterating over words and comparing pref in each string using startsWith built-in string method. (0ms - Beats 100.0%)
function prefixCount(words: string[], pref: string): number {
	let count = 0;

	words.forEach(word => {
		if(word.startsWith(pref))
			count++;
	});

	return count;
};

// First Approach - Same as the first approach, but iterating over pref chars comparing with the first pref.length chars of the words. (4ms - Beats 3.23%)
function prefixCount(words: string[], pref: string): number {
	let count = 0;

	words.forEach(word => {
		let i = 0
		for(i; i < pref.length; i++) {
			if(word[i] !== pref[i])
				break;
		}

		if(i === pref.length)
			count++;
	});

	return count;
};

const case1 = prefixCount(["pay","attention","practice","attend"], "at");
const case2 = prefixCount(["leetcode","win","loops","success"], "code");

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
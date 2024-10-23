// First Approach - Backtracking method tracking every valid path of split substrings, returning the max value of leaves set size. (237ms - Beats 12.5%)
function maxUniqueSplit(s: string): number {
	function backtrack(ongoingString: string, index: number, substringsSet: Set<string>): number {
		if(index === s.length)
			return ongoingString === '' ? substringsSet.size : 0;

		ongoingString += s[index];

		let maxValue = 0;

		maxValue = Math.max(backtrack(ongoingString, index + 1, new Set([...substringsSet])), maxValue);

		if(!substringsSet.has(ongoingString)) {
			substringsSet.add(ongoingString);
			maxValue = Math.max(backtrack('', index + 1, new Set([...substringsSet])), maxValue);
		}

		return maxValue;
	}

	return backtrack('', 0, new Set());
};

const case1 = maxUniqueSplit("ababccc"); // Possible way: ['a', 'b', 'ab', 'c', 'cc']
const case2 = maxUniqueSplit("aba"); // Possible way: ['a', 'ba']
const case3 = maxUniqueSplit("aa"); // There's no way to split

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
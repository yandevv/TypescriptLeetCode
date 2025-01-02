// First Approach - Prefix Sum method precalculating the count of words that starts and ends with vowels and iterating over with queries. (5ms - Beats 90.91%)
function vowelStrings(words: string[], queries: number[][]): number[] {
	const prefixSum = [0];
	
	for(let i = 0; i < words.length; i++) {
		const isFirstWordValid = words[i][0] === 'a' || words[i][0] === 'e' || words[i][0] === 'i' || words[i][0] === 'o' || words[i][0] === 'u';
		const isLastWordValid = words[i][words[i].length - 1] === 'a' || words[i][words[i].length - 1] === 'e' || words[i][words[i].length - 1] === 'i' || words[i][words[i].length - 1] === 'o' || words[i][words[i].length - 1] === 'u';

		if(isFirstWordValid && isLastWordValid) {
			prefixSum[i + 1] = prefixSum[i] + 1;
		} else {
			prefixSum[i + 1] = prefixSum[i];
		}
	}
	
	let ans: number[] = [];
	for(let i = 0; i < queries.length; i++) {
		ans[i] = prefixSum[queries[i][1] + 1] - prefixSum[queries[i][0]];
	}

	return ans;
};

const case1 = vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]]);
const case2 = vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
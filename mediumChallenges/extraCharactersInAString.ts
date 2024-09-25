// First Approach - Dynamic Programming iterative version for recursive method, iterating over string and tracking the number of characters and maintaining the lowest value ever. (https://leetcode.com/problems/extra-characters-in-a-string/?envType=daily-question&envId=2024-09-23)
function minExtraChar(s: string, dictionary: string[]): number {
	const n = s.length;
	const dictSet = new Set(dictionary);
	const dp = new Array(n + 1).fill(0);

	for (let i = n - 1; i >= 0; i--) {
		dp[i] = dp[i + 1] + 1; // Worst case: one extra character
		for (let j = i; j < n; j++) {
			const substring = s.slice(i, j + 1);
			if (dictSet.has(substring)) {
				dp[i] = Math.min(dp[i], dp[j + 1]);
			}
		}
	}
	return dp[0];
}

const case1 = minExtraChar("leetscode", ["leet","code","leetcode"]);
const case2 = minExtraChar("sayhelloworld", ["hello","world"]);

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
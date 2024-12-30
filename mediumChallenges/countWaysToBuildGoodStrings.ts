// First Try - Recursion iterating over all possible strings with length from 0 to high,
// incrementing a variable whenever the string fits the condition of low and high. (Time Limit Exception - 14/36 testcases passed)
// function countGoodStrings(low: number, high: number, zero: number, one: number): number {
// 	let goodStrings = 0;
// 	function dfs(string: string): void {
// 		if(string.length + zero <= high)
// 			dfs(string + '0'.repeat(zero));

// 		if(string.length + one <= high)
// 			dfs(string + '1'.repeat(one));

// 		if(string.length >= low && string.length <= high)
// 			goodStrings++;

// 		return;
// 	}

// 	dfs('');

// 	return goodStrings;
// };

// First Approach - DP method tracking and counting the possible binary strings by their length,
// summing up the count with the actualLength - zero/one as the actualLength position would only be constructed by this position.
// (https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518124/python3-c-java-easy-and-understand-dp/?envType=daily-question&envId=2024-12-30)
function countGoodStrings(low: number, high: number, zero: number, one: number): number {
	const dp: number[] = [1], md = 1000000007;

	for(let i = Math.min(zero, one); i <= high; i++) {
		dp[i] = 0;

		if(i >= zero)
				dp[i] = (dp[i] + (dp[i - zero] ?? 0)) % md;

		if(i >= one)
				dp[i] = (dp[i] + (dp[i - one] ?? 0)) % md;
	}

	let sum = 0;
	for(let i = low; i <= high; i++) {
		sum = (sum + dp[i]) % md;
	}

	return sum;
};

const case1 = countGoodStrings(3, 3, 1, 1);
const case2 = countGoodStrings(2, 3, 1, 2);
const case3 = countGoodStrings(5, 5, 2, 4);
const case4 = countGoodStrings(200, 200, 10, 1);

console.log(`case1: ${case1} // ${case1 === 8}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
console.log(`case4: ${case4} // ${case4 === 764262396}`);
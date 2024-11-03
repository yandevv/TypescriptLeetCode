// First Approach - Simulating every iterating mutating s string, comparing it with goal and if it's equal returns true. (0ms - Beats 100.00%)
function rotateString(s: string, goal: string): boolean {
	if(s.length !== goal.length)
		return false;

	for(let i = 0; i < goal.length; i++) {
		if(s === goal)
			return true;

		s = s.substring(1, s.length) + s[0];
	}

	return false;
};

// Second Approach - Concatenating s with s and search for goal, and if the search returns a number different than -1, returns true. (https://leetcode.com/problems/rotate-string/solutions/118696/c-java-python-1-line-solution/?envType=daily-question&envId=2024-11-03)
function rotateString(s: string, goal: string): boolean {
	return s.length === goal.length && (s + s).search(goal) !== -1;
};

const case1 = rotateString("abcde", "cdeab");
const case2 = rotateString("abcde", "abced");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
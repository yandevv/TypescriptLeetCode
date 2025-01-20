// First Approach - Iterating over left-to-right and right-to-left checking the balance of parenthesis
// whenever it's locked, and if the balance reaches below zero returns false, otherwise true.
// (15ms - Beats 71.43 - Solution: https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/1650613/intuition-explained-balanced-parentheses-greedy-approach-c-clean-code/?envType=daily-question&envId=2025-01-12)
function canBeValid(s: string, locked: string): boolean {
	const n = s.length;
	if(n & 1)
		return false;

	let balance = 0;
	for(let i = 0; i < n; i++) {
		if(locked[i] === '0' || s[i] === '(') {
			balance++;
		} else
			balance--;

		if(balance < 0)
			return false;
	}

	balance = 0;

	for(let i = n - 1; i >= 0; i--) {
		if(locked[i] === '0' || s[i] === ')') {
			balance++;
		} else
			balance--;

		if(balance < 0)
			return false;
	}

	return true;
};

const case1 = canBeValid("))()))", "010100");
const case2 = canBeValid("()()", "0000");
const case3 = canBeValid(")", "0");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
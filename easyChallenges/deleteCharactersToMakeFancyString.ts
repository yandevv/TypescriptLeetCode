// First Approach - Iterating all-over s string and count the actual characters, resetting whenever it's a different character. (59ms - Beats 50.00%)
function makeFancyString(s: string): string {
	let lastChar: string = '', count = 0, ans = '';
	for(let char of s) {
		if(char === lastChar) {
			if(count < 2) {
				count++;
				ans += char;
			}
		} else {
			count = 1;
			ans += char;
		}

		lastChar = char;
	}

	return ans;
};

// Second Approach - Regex method matching into string every character repeated 3 or more times consecutively, replacing it into their $1 group two times. (Submissions First Ranked Code Samples)
function makeFancyString(s: string): string {
	return s.replace(/(.)\1{2,}/g, "$1$1");
};

console.time('Case 1');
const case1 = makeFancyString("leeetcode");
console.timeEnd('Case 1');
console.time('Case 2');
const case2 = makeFancyString("aaabaaaa");
console.timeEnd('Case 2');
console.time('Case 3');
const case3 = makeFancyString("aab");
console.timeEnd('Case 3');

console.log(`case1: ${case1} / ${case1 === "leetcode"}`);
console.log(`case2: ${case2} / ${case2 === "aabaa"}`);
console.log(`case3: ${case3} / ${case3 === "aab"}`);
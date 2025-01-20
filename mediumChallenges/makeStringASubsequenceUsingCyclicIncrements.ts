// First Approach - Two-pointer method comparing if str1 actual char is equal to str2 actual char incremented or not incremented, and if sometime
// the number of remaining chars of str1 goes lower than str2 it returns false, otherwise true. (11ms - Beats 75.92%)
function canMakeSubsequence(str1: string, str2: string): boolean {
	if(str2.length > str1. length)
		return false;

	let i = 0, j = 0;
	while(j < str2.length) {
		if(str1.length - i < str2.length - j)
			return false;

		let incrementedChar = str1[i] === "z" ? "a" : String.fromCharCode(str1.charCodeAt(i) + 1);
		if(incrementedChar === str2[j] || str1[i] === str2[j]) {
			j++;
		}

		i++;
	}

	return true;
};

const case1 = canMakeSubsequence("abc", "ad");
const case2 = canMakeSubsequence("zc", "ad");
const case3 = canMakeSubsequence("ab", "d");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
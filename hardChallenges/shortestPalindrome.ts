// First Approach - Two-pointer recursive approach (https://leetcode.com/problems/shortest-palindrome/solutions/5810296/recursion-with-2-pointers-kmp-beats-100/?envType=daily-question&envId=2024-09-20)
function shortestPalindrome(s: string): string {
	const n = s.length;

	let i = 0;
	for(let j = n - 1; j >= 0; j--) {
		while(j >= 0 && s[i] === s[j])
			i++, j--;
	}
	if(i === n)
		return s;
	const sub = s.substring(i), remain_rev = sub.split('').reverse().join('');
	return remain_rev + shortestPalindrome(s.substring(0, i)) + sub;
};

const case1 = shortestPalindrome("aacecaaa");
const case2 = shortestPalindrome("abcd");

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
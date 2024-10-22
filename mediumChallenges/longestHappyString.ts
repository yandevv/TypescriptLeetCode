// First Approach - Iterative method using greedy approach, based in conditionals checks of a, b and c counts and ans string last letters. (59ms - Beats 72.73%)
function longestDiverseString(a: number, b: number, c: number): string {
	let ans = '';
	while(a > 0 || b > 0 || c > 0) {
		if(a >= b && a >= c) {
			if(ans[ans.length - 2] === "a" && ans[ans.length - 1] === "a")
				break;

			if(a > 1 && ans[ans.length - 1] !== "a") {
				ans += "aa";
				a -= 2;
			} else {
				ans += "a";
				a -= 1;
			}

			if(b === 0 && c === 0)
				break;

			if(b > c) {
				ans += "b";
				b -= 1;
			} else {
				ans += "c";
				c -= 1;
			}
		} else if(b >= a && b >= c) {
			if(ans[ans.length - 2] === "b" && ans[ans.length - 1] === "b")
				break;

			if(b > 1 && ans[ans.length - 1] !== "b") {
				ans += "bb";
				b -= 2;
			} else {
				ans += "b";
				b -= 1;
			}

			if(a === 0 && c === 0)
				break;

			if(a > c) {
				ans += "a";
				a -= 1;
			} else {
				ans += "c";
				c -= 1;
			}
		} else {
			if(ans[ans.length - 2] === "c" && ans[ans.length - 1] === "c")
				break;

			if(c > 1 && ans[ans.length - 1] !== "c") {
				ans += "cc";
				c -= 2;
			} else {
				ans += "c";
				c -= 1;
			}

			if(a === 0 && b === 0)
				break;

			if(a > b) {
				ans += "a";
				a -= 1;
			} else {
				ans += "b";
				b -= 1;
			}
		}
	}

	return ans;
};

const case1 = longestDiverseString(1, 1, 7);
const case2 = longestDiverseString(7, 1, 0);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
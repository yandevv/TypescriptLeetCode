// First Approach - Iterating over s length and removing certain substrings with substring string method. (102ms - Beats 19.36%)
// function minLength(s: string): number {
// 	let i = 0, j = 1;
// 	while(j < s.length) {
// 		const checkSubstring1 = s[i] === "A" && s[j] === "B";
// 		const checkSubstring2 = s[i] === "C" && s[j] === "D";

// 		if(checkSubstring1 || checkSubstring2) {
// 			s = s.substring(0, i) + s.substring(j + 1);
// 			i--; j--;
// 			continue;
// 		}
// 		i++; j++;
// 	}
// 	return s.length;
// };

// Second Approach - Stack approach iterating over s string and pushing back characters whenever it doesn't meet the 'AB' and 'CD' substring comparing with last added char, otherwise pop the stack, returning at the end the stack length. (https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5879675/easy-stack-solution-python-java-c-o-n-o-n/?envType=daily-question&envId=2024-10-07)
function minLength(s: string): number {
	const sStack: string[] = [];
	for(let char of s) {
		if(sStack.length === 0) {
			sStack.push(char);
			continue;
		}

		if(char === "B" && sStack[sStack.length - 1] === "A") {
			sStack.pop();
		} else if(char === "D" && sStack[sStack.length - 1] === "C") {
			sStack.pop();
		} else {
			sStack.push(char);
		}
	}

	return sStack.length;
};

const case1 = minLength("ABFCACDB");
const case2 = minLength("ACBBD");

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
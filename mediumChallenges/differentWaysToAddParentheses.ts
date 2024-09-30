// First Approach - Exploring each expression section by their operations recursively and pushing back into ans array. (https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806448/beats-90-beginner-friendly-python3-java-c-c-rust-go-js/?envType=daily-question&envId=2024-09-19)
function diffWaysToCompute(expression: string): number[] {
	let ans: number[] = [];
	for(let i = 0; i < expression.length; i++) {
		const operation = expression[i];
		if(operation === "+" || operation === "-" || operation === "*") {
				let s1 = diffWaysToCompute(expression.slice(0, i));
				let s2 = diffWaysToCompute(expression.slice(i + 1));
				for(let a of s1) {
						for(let b of s2) {
								if(operation === "+") ans.push(a + b);
								else if(operation === "-") ans.push(a - b);
								else if(operation === "*") ans.push(a * b);
						}
				}
		}
	}
	if(ans.length === 0) ans.push(parseInt(expression));
	return ans;
};

const case1 = diffWaysToCompute("2-1-1");
const case2 = diffWaysToCompute("2*3-4*5");

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
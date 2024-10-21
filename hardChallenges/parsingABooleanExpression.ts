// First Approach - Linear stack approach pushing back every operand like true, false, operators and open parenthesis and calculating over when it's a close parenthesis. (https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5944267/stack-based-approach-in-typescript/?envType=daily-question&envId=2024-10-20)
function parseBoolExpr(expression: string): boolean {
	const stack: any[] = [];

	for (let char of expression) {
		if(char === 't' || char === 'f') {
			stack.push(char === 't');
		} else if(char === '!' || char === '&' || char === '|') {
			stack.push(char);
		} else if(char === '(') {
			stack.push('(');
		} else if(char === ')') {
			let operands: boolean[] = [];

			while (stack.length && stack[stack.length - 1] !== '(') {
				operands.push(stack.pop());
			}

			stack.pop();
			const operator = stack.pop();

			let result: boolean;
			if(operator === '!') {
				result = !operands[0];
			} else if(operator === '&') {
				result = operands.every(Boolean);
			} else {
				result = operands.some(Boolean);
			}

			stack.push(result);
		}
	}

	return stack.pop();
};

const case1 = parseBoolExpr("&(|(f))");
const case2 = parseBoolExpr("|(f,f,f,t)");
const case3 = parseBoolExpr("!(&(f,t))");

console.log(`case1: ${case1} // ${!case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${case3}`);
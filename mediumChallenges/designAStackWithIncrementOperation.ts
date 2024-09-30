// First Approach - Tracking over stack length and push/pop an array with values, also increment k times limited by stack length. (96ms - Beats 91.49%)
class CustomStack {
	maxSize: number;
	stack: number[];
	length: number;

	constructor(maxSize: number) {
		this.maxSize = maxSize;
		this.stack = [];
		this.length = 0;
	}

	push(x: number): void {
		if(this.length < this.maxSize) {
			this.stack.push(x);
			this.length++;
		}
	}

	pop(): number {
		if(this.length <= 0) {
			return -1;
		}

		this.length--;
		return this.stack.pop()!;
	}

	increment(k: number, val: number): void {
		for(let i = 0; i < Math.min(k, this.maxSize); i++) {
			if(isNaN(this.stack[i]))
				break;

			this.stack[i] += val;
		}
	}
}

const case1CustomStack = new CustomStack(3);

// Case1 Operations
console.log("Case1 Operations:");
case1CustomStack.push(1);
case1CustomStack.push(2);
console.log("🚀 ~ case1CustomStack.pop():", case1CustomStack.pop());
case1CustomStack.push(2);
case1CustomStack.push(3);
case1CustomStack.push(4);
case1CustomStack.increment(5, 100);
case1CustomStack.increment(2, 100);
console.log("🚀 ~ case1CustomStack.pop():", case1CustomStack.pop());
console.log("🚀 ~ case1CustomStack.pop():", case1CustomStack.pop());
console.log("🚀 ~ case1CustomStack.pop():", case1CustomStack.pop());
console.log("🚀 ~ case1CustomStack.pop():", case1CustomStack.pop());
// First Approach - Iterative method passing through all 32bits of both numbers checking
// if num1 has more setbits than num2, removing and adding least significant num1 setbits.
// (https://leetcode.com/problems/minimize-xor/solutions/6281706/2-optimal-solutions-explained-modular-clarity-vs-concise-efficiency-beats-100/?envType=daily-question&envId=2025-01-15)
function minimizeXor(num1: number, num2: number): number {
	let a = num1.toString(2).replace(/0/g, '').length;
	let b = num2.toString(2).replace(/0/g, '').length;

	let res = num1;

	for(let i = 0; i < 32; i++) {
		if(a > b && (1 << i) & num1) {
			res ^= 1 << i;
			a--;
		}

		if(a < b && !((1 << i) & num1)) {
			res ^= 1 << i;
			a++;
	}
	}

	return res;
};

const case1 = minimizeXor(3, 5);
const case2 = minimizeXor(1, 12);

console.log(`case1: ${case1} // ${case1 === 3}`)
console.log(`case2: ${case2} // ${case2 === 3}`)
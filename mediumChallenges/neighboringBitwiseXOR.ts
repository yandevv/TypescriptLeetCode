// First Approach - XORing all derived's numbers to check if
// both bit values are even in count, proving it's possible to
// arrange an original array. (https://leetcode.com/problems/neighboring-bitwise-xor/solutions/6296397/rust-typescript-python-java-c-c-c-struggling-with-twiddling-bits-let-me-help/?envType=daily-question&envId=2025-01-17)
function doesValidArrayExist(derived: number[]): boolean {
	let xorSum = 0;
	for(const x of derived) {
		xorSum ^= x;
	}

	return xorSum === 0;
}

const case1 = doesValidArrayExist([1,1,0]);
const case2 = doesValidArrayExist([1,1]);
const case3 = doesValidArrayExist([1,0]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
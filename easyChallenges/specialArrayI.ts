// First Approach - One pass iteration cycle through nums checking the actual and next number module by 2 equality. (0ms - Beats 100.00%)
function isArraySpecial(nums: number[]): boolean {
	for(let i = 0; i < nums.length - 1; i++) {
		if(nums[i] % 2 === nums[i + 1] % 2)
			return false
	}
	return true;
};

// Second Approach - Same approach by the first one but using bitwise operations to complete the duty. (0ms - Beats 100.00%)
function isArraySpecial(nums: number[]): boolean {
	for(let i = 1; i < nums.length; i++) {
		if(((nums[i - 1] & 1) ^ (nums[i] & 1)) === 0) {
			return false;
		}
	}
	return true;
};

const case1 = isArraySpecial([1]);
const case2 = isArraySpecial([2,1,4]);
const case3 = isArraySpecial([4,3,1,6]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
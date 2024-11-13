// First Try - Standard two pointer approach iterating over each i and j number in order summing and comparing to the constraint params. (TLE - 47 / 54 testcases passed)
// function countFairPairs(nums: number[], lower: number, upper: number): number {
// 	let ans = 0;

// 	for(let i = 0; i < nums.length; i++) {
// 		for(let j = i + 1; j < nums.length; j++) {
// 			const operationResult = nums[i] + nums[j];
// 			if(operationResult <= upper && operationResult >= lower)
// 				ans++;
// 		}
// 	}

// 	return ans;
// };

// First Approach - Two pointer approach sorting array, subtracting pairs which are lesser than lower with pairs lesser than upper by boundary find and indices subtraction. (https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174181/two-pointers-2/?envType=daily-question&envId=2024-11-13)
function countLessThanVal(nums: number[], val: number) {
	let result = 0;
	for(let i = 0, j = nums.length - 1; i < j; ++i) {
		while(i < j && nums[i] + nums[j] > val)
			--j;

		result += j - i;
	}

	return result;
}

function countFairPairs(nums: number[], lower: number, upper: number): number {
	nums.sort((a, b) => a - b);

	return countLessThanVal(nums, upper) - countLessThanVal(nums, lower - 1);
};

const case1 = countFairPairs([0,1,7,4,4,5], 3, 6);
const case2 = countFairPairs([1,7,9,2,5], 11, 11);

console.log(`case1: ${case1} // ${case1 === 6}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
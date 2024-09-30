// First Approach - Sorted array based on arithmetically comparison formula. (https://leetcode.com/problems/largest-number/submissions/1394915611/?envType=daily-question&envId=2024-09-18)
function largestNumber(nums: number[]): string {
	const sortedArray = nums.sort((a, b) => {
			const ab = `${a}${b}`;
			const ba = `${b}${a}`;
			return ab.localeCompare(ba) * -1;
	})

	const result = sortedArray
			.join('')
			.replace(/^0+/g, '') || '0'; // Remove leading zero(s)

	return result;
}

const case1 = largestNumber([10, 2]);
const case2 = largestNumber([3,30,34,5,9]);

console.log(`case1: ${case1} // ${case1 === "210"}`);
console.log(`case2: ${case2} // ${case2 === "9534330"}`);
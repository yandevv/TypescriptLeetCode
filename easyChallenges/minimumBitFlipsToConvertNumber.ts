// First Approach - Iterating over binary string of numbers and counting the different digits. (39ms - Beats 100.00%)
function minBitFlips(start: number, goal: number): number {
	let ans = 0;

	const binaryStart = (start >> 0).toString(2);
	const binaryGoal = (goal >> 0).toString(2);

	let startIndex = binaryStart.length - 1;
	let goalIndex = binaryGoal.length - 1;
	while(startIndex > -1 || goalIndex > -1) {
		const binaryStartCharAt = startIndex > -1 ? binaryStart.charAt(startIndex) : "0";
		const binaryGoalCharAt = goalIndex > -1 ? binaryGoal.charAt(goalIndex) : "0";
		if(binaryStartCharAt !== binaryGoalCharAt)
			ans++;
		startIndex--;
		goalIndex--;
	}

	return ans;
};

const case1 = minBitFlips(10, 7);
const case2 = minBitFlips(3, 4);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
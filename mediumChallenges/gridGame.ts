// First Try - Prefix Summing both grid's rows and iterating n times getting the most profitable
// scenario to first bot, but resulting into second bot not getting the worst scenario in some cases.
// (9/109 test cases passed)
// function gridGame(grid: number[][]): number {
// 	const n = grid[0].length;

// 	let firstRowPrefixSum = [0], secondRowPrefixSum = [0];
// 	for(let i = 0; i < n; i++) {
// 		firstRowPrefixSum[i + 1] = firstRowPrefixSum[i] + grid[0][i];
// 		secondRowPrefixSum[i + 1] = secondRowPrefixSum[i] + grid[1][i];
// 	}

// 	let biggestBotOneSum = 0, splitIndex = 0;
// 	for(let i = 0; i < n; i++) {
// 		const sum = firstRowPrefixSum[i + 1] + secondRowPrefixSum[n] - secondRowPrefixSum[i];
// 		if(biggestBotOneSum < sum) {
// 			biggestBotOneSum = sum;
// 			splitIndex = i;
// 		}
// 	}
	
// 	firstRowPrefixSum = [0], secondRowPrefixSum = [0];
// 	for(let i = 0; i < n; i++) {
// 		const firstRowCellValue = i > splitIndex ? grid[0][i] : 0;
// 		const secondRowCellValue = i < splitIndex ? grid[1][i] : 0;
		
// 		firstRowPrefixSum[i + 1] = firstRowPrefixSum[i] + firstRowCellValue;
// 		secondRowPrefixSum[i + 1] = secondRowPrefixSum[i] + secondRowCellValue;
// 	}

// 	let biggestBotTwoSum = 0;
// 	for(let i = 0; i < n; i++) {
// 		const sum = firstRowPrefixSum[i + 1] + secondRowPrefixSum[n] - secondRowPrefixSum[i];
// 		biggestBotTwoSum = Math.max(biggestBotTwoSum, sum);
// 	}

// 	return biggestBotTwoSum;
// };

// First Approach - Precalculating top and bottom rows to calculate the most optimal minimum value remained
// to robot2. (https://leetcode.com/problems/grid-game/solutions/3977845/typescript-prefix-sum-matrix-o-n-time-o-1-space/?envType=daily-question&envId=2025-01-21)
function gridGame(grid: number[][]): number {
	let top = 0;
	let bottom = 0;
	let minResult = Infinity;

	for(let i = grid[0].length-1; i >= 0; i--){
		top += grid[0][i];
	}

	for(let i = 0; i < grid[0].length; i++){
		top -= grid[0][i];

		let robotTwoMax = Math.max(top, bottom);

		minResult = Math.min(minResult,robotTwoMax);

		bottom += grid[1][i];
	}
	return minResult
};

const case1 = gridGame([[2,5,4],[1,5,1]]);
const case2 = gridGame([[3,3,1],[8,5,2]]);
const case3 = gridGame([[1,3,1,15],[1,3,3,1]]);
const case4 = gridGame([[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
console.log(`case3: ${case3} // ${case3 === 7}`);
console.log(`case4: ${case4} // ${case4 === 63}`);
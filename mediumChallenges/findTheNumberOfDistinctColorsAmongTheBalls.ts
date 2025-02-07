// First Try - Color count tracking by queries operations and whenever a color zeros it's count decrease
// actual distinct color count and when a color raises to one it decreases the color count.
// (TLE - 547 / 551 testcases passed)
// function queryResults(limit: number, queries: number[][]): number[] {
// 	const colorCount: Map<number, number> = new Map(), ballColor: number[] = new Array(limit).fill(0);

// 	const answer: number[] = [];
// 	for(let i = 0; i < queries.length; i++) {
// 		const [ballIndex, newColor] = queries[i];

// 		let queryAnswer = answer[i - 1] ?? 0;

// 		const lastColor = ballColor[ballIndex]
// 		const lastColorCount = (colorCount.get(lastColor) ?? 0) - 1;
// 		colorCount.set(lastColor, lastColorCount);

// 		if(lastColorCount === 0)
// 			queryAnswer--;

// 		const newColorCount = (colorCount.get(newColor) ?? 0) + 1;
// 		colorCount.set(newColor, newColorCount);

// 		ballColor[ballIndex] = newColor;

// 		if(newColorCount === 1)
// 			queryAnswer++;

// 		answer.push(queryAnswer);
// 	}

// 	return answer;
// };

// First Approach - Same approach as first try but using unset limit to arrays. (125ms - Beats 7.69%)
function queryResults(limit: number, queries: number[][]): number[] {
	const colorCount: number[] = [], ballColor: number[] = [];

	const answer: number[] = [];
	for(let i = 0; i < queries.length; i++) {
		const [ballIndex, newColor] = queries[i];

		let queryAnswer = answer[i - 1] ?? 0;

		const lastColor = ballColor[ballIndex]
		if(lastColor) {
			const lastColorCount = colorCount[lastColor - 1] - 1;
			colorCount[lastColor - 1] = lastColorCount;
	
			if(lastColorCount === 0)
				queryAnswer--;
		}

		const newColorCount = (colorCount[newColor - 1] ?? 0) + 1;
		colorCount[newColor - 1] = newColorCount;

		ballColor[ballIndex] = newColor;

		if(newColorCount === 1)
			queryAnswer++;

		answer.push(queryAnswer);
	}

	return answer;
};

// Second Approach - Same as both before but using Map to track ball's color and color's count. (66ms - Beats 61.54%)
function queryResults(limit: number, queries: number[][]): number[] {
	const colorCount: Map<number, number> = new Map(), ballColor: Map<number, number> = new Map();

	const answer: number[] = [];
	for(let i = 0; i < queries.length; i++) {
		const [ballIndex, newColor] = queries[i];

		let queryAnswer = answer[i - 1] ?? 0;

		const lastColor = ballColor.get(ballIndex);
		if(lastColor) {
			const lastColorCount = (colorCount.get(lastColor) ?? 0) - 1;
			colorCount.set(lastColor, lastColorCount);
	
			if(lastColorCount === 0)
				queryAnswer--;
		}

		const newColorCount = (colorCount.get(newColor) ?? 0) + 1;
		colorCount.set(newColor, newColorCount);

		ballColor.set(ballIndex, newColor);

		if(newColorCount === 1)
			queryAnswer++;

		answer.push(queryAnswer);
	}

	return answer;
};

const case1 = queryResults(4, [[1,4],[2,5],[1,3],[3,4]]);
const case2 = queryResults(4, [[0,1],[1,2],[2,2],[3,4],[4,5]]);

console.log(`case1: ${case1} // Should be: [1,2,2,3]`);
console.log(`case2: ${case2} // Should be: [1,2,2,3,4]`);
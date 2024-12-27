// First Try - Brute force iterating over each index i and j and calculating the biggest pair. (Time Limit Exceeded)
// function maxScoreSightseeingPair(values: number[]): number {
// 	let res = 0;

// 	for(let i = 0; i < values.length; i++) {
// 		for(let j = i + 1; j < values.length; j++) {
// 			res = Math.max(res, values[i] + values[j] + i - j);
// 		}
// 	}

// 	return res;
// };

// First Approach - Iterative greedy solution tracking the max score and actual biggest score decreasing it
// in every iteration. (https://leetcode.com/problems/best-sightseeing-pair/solutions/6190980/o-n-time-and-o-1-space-solution/?envType=daily-question&envId=2024-12-27)
function maxScoreSightseeingPair(values: number[]): number {
	let max = 0, score = values[0];
	for(let i = 1; i < values.length; ++i) {
		--score;

		max = Math.max(max, score + values[i]);
		score = Math.max(score, values[i]);
	}

	return max;
}

const case1 = maxScoreSightseeingPair([8,1,5,2,6]);
const case2 = maxScoreSightseeingPair([1,2]);

console.log(`case1: ${case1} // ${case1 === 11}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
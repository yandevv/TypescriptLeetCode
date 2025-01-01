// First Approach - Prefix sum solution having a prefix count for zero's and one's,
// iterating over and calculating the best sum calculation. (3ms - Beats 28.85%)
function maxScore(s: string): number {
	const zerosPrefixSum: number[] = [0], onesPrefixSum: number[] = [0];
	for(let i = 0; i < s.length; i++) {
		if(s[i] === '0') {
			zerosPrefixSum[i + 1] = zerosPrefixSum[i] + 1;
			onesPrefixSum[i + 1] = onesPrefixSum[i];
		} else {
			zerosPrefixSum[i + 1] = zerosPrefixSum[i];
			onesPrefixSum[i + 1] = onesPrefixSum[i] + 1;
		}
	}

	let maxScore = 0;
	for(let i = 0; i < s.length - 1; i++) {
		const leftScore = zerosPrefixSum[i + 1] - zerosPrefixSum[0], rightScore = onesPrefixSum[s.length] - onesPrefixSum[i + 1]

		maxScore = Math.max(maxScore, leftScore + rightScore);
	}

	return maxScore;
};

const case1 = maxScore("011101");
const case2 = maxScore("00111");
const case3 = maxScore("1111");

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 5}`);
console.log(`case3: ${case3} // ${case3 === 3}`);
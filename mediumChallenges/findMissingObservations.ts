// First Approach - Filling missing rolls by simulating with n 1's first and increasing by the need. (250ms - Beats 32.51%)
function missingRolls(rolls: number[], mean: number, n: number): number[] {
	const rollsLength = rolls.length + n;

	let actualSum = rolls.reduce((prev, curr) => prev + curr) + n;

	const res = new Array(n).fill(1);

	for(let i = 0; i <= n * 5; i++) {
		if(actualSum / rollsLength === mean)
			return res;

		actualSum++;
		res[Math.floor(i / 5)]++;
	}

	return [];
};
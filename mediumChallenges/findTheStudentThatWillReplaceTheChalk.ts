// First Approach - Reducing chalk to its sum and remain dividing k by the sum, resulting into the remain chalk of all perfect loops and subtracting every chalk from remaining again to find whom the chalk depleted. (82ms - Beats 65.00%)
function chalkReplacer(chalk: number[], k: number): number {
	const chalkSum = chalk.reduce((prev, curr) => prev + curr);
	let remainingChalk = k % chalkSum;
	for(let i = 0; i < chalk.length; i++) {
		remainingChalk -= chalk[i];
		if(remainingChalk < 0)
			return i;
	}
	return 0;
};
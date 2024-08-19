// First Approach - Prime factorization summing up primes. (51ms - Beats 95.45% - https://leetcode.com/problems/2-keys-keyboard/solutions/5657975/98-33-easy-solution-with-ultimate-explanation/?envType=daily-question&envId=2024-08-19)
function minSteps(n: number): number {
	let divisor = 2;
	let primeSum = 0;
	while(n > 1) {
		while(n % divisor === 0) {
			n /= divisor;
			primeSum += divisor;
		}
		divisor++;

		if(divisor > (n / 2))
			divisor = n;
	}

	return primeSum;
};
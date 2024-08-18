// First Try - Question misunderstood, 
// function nthUglyNumber(n: number): number {
// 	const uglyNumbers = [1];
// 	let actualNumber = 1;
// 	while(uglyNumbers.length < n) {
// 		actualNumber++;

// 		if(actualNumber % 4 === 0) {
// 			continue;
// 		}

// 		let isUgly = true;
// 		for(let divisor = 6; divisor <= actualNumber / 2; divisor++) {
// 			if(actualNumber % divisor === 0) {
// 				isUgly = false
// 				break;
// 			}
// 		}

// 		if(isUgly) {
// 			uglyNumbers.push(actualNumber);
// 		}
// 	}

// 	return uglyNumbers[n - 1];
// };

// First Approach - DP approach increasing exponentiation coefficients and inserting into arr array. (https://leetcode.com/problems/ugly-number-ii/solutions/5652689/easy-heap-dp-solution-beats-100/?envType=daily-question&envId=2024-08-18)
function nthUglyNumber(n: number): number {
	const primes = [2, 3, 5];
	const next_ugly = [2, 3, 5];
	const increase = [1, 1, 1];
	const arr = [1];

	for(let i = 1; i < n; ++i) {
		let smallest = Math.min(...next_ugly);
		arr.push(smallest);

		for(let j = 0; j < 3; j++) {
			if(next_ugly[j] === smallest) {
				increase[j]++;
				next_ugly[j] = primes[j] * arr[increase[j] - 1];
			}
		}
	}

	return arr[arr.length - 1];
};
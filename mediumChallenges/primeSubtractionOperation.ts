// First Try - DFSing and subtracting each number by 2 or 3 until it lowers to their next number. (Wrong Answer - 615 / 654 testcases passed)
// function primeSubOperation(nums: number[], index: number = 0): boolean {
// 	if(index < nums.length - 1) {
// 		const result = primeSubOperation(nums, index + 1);
// 		if(!result)
// 			return false;
// 	}

// 	while(nums[index + 1] <= nums[index] && nums[index] > 0) {
// 		if(nums[index] - 3 < nums[index + 1]) {
// 			nums[index] -= 3;
// 		} else
// 			nums[index] -= 2;
// 	}

// 	if(nums[index] <= 0)
// 		return false;

// 	return true;
// };

// First Approach - Sieve of Eratosthenes method precalculating prime numbers which are lesser than the max number of array, iterating over them after checking if there's a prime number subtraction which corresponds the constraint. (https://leetcode.com/problems/prime-subtraction-operation/description/?envType=daily-question&envId=2024-11-11)
function primeSubOperation(nums: number[]): boolean {
	const maxElement = Math.max(...nums);

	const sieve: boolean[] = new Array(maxElement + 1).fill(true);

	sieve[1] = false;

	for(let i = 2; i <= Math.sqrt(maxElement + 1); i++) {
		if(sieve[i]) {
			for(let j = i * i; j <= maxElement; j += i) {
				sieve[j] = false;
			}
		}
	}

	let currValue = 1;
	let i = 0;

	while(i < nums.length) {
		const difference = nums[i] - currValue;

		if(difference < 0) {
			return false;
		}

		if(sieve[difference] === true || difference === 0) {
			i++;
			currValue++;
		} else {
			currValue++;
		}
	}

	return true;
}

const case1 = primeSubOperation([4,9,6,10]);
const case2 = primeSubOperation([6,8,11,12]);
const case3 = primeSubOperation([5,8,3]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
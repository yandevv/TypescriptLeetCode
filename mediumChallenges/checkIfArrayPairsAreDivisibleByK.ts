// First Try - Bruteforce method iterating over all numbers (O(n^2)) and calculating if each number plus another one divided by k have remains of 0. (Time Limit Exceeded - 91 / 98 testcases passed)
// function canArrange(arr: number[], k: number): boolean {
// 	let operations = 0;

// 	for(let i = 0; i < arr.length; i++) {
// 		for(let j = i + 1; j < arr.length; j++) {
// 			if((arr[i] + arr[j]) % k === 0) {
// 				arr[i] = NaN;
// 				arr[j] = NaN;
// 				operations++;
// 				break;
// 			}
// 		}
// 	}

// 	return operations * 2 === arr.length;
// };

// First Approach - Tracking count of divided by k remaining numbers of all array numbers and iterating over again on every frequency of remaining counts checking if it has their pair (on the counterpart). (https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/submissions/1408758816/?envType=daily-question&envId=2024-10-01)
function canArrange(arr: number[], k: number): boolean {
	const freq: number[] = new Array(k).fill(0);
	
	for(const num of arr) {
		let rem = num % k;
		if (rem < 0) {
			rem += k;
		}
		freq[rem]++;
	}
	
	if(freq[0] % 2 !== 0) {
		return false;
	}
	
	for(let i = 1; i <= Math.floor(k / 2); i++) {
		if(freq[i] !== freq[k - i]) {
			return false;
		}
	}
	
	return true;
};

const case1 = canArrange([1,2,3,4,5,10,6,7,8,9], 5);
const case2 = canArrange([1,2,3,4,5,6], 7);
const case3 = canArrange([1,2,3,4,5,6], 10);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${!case3}`);
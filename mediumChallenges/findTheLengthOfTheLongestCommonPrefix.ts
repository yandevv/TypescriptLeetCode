// First Approach - Iterative approach that compares every substring from arr2 that it's higher than ans with every possible prefix from arr1 calculated before. (https://leetcode.com/problems/extra-characters-in-a-string/submissions/1400131164/?envType=daily-question&envId=2024-09-23)
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
	let ans = 0;
	const arr1Prefixes = new Set<number>();

	for(let i = 0; i < arr1.length; i++) {
		let n1 = arr1[i];

		while(n1 > 0) {
			arr1Prefixes.add(n1);
			n1 = Math.floor(n1 / 10);
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		let n2 = arr2[i];

		while(n2 > 0) {
			if(n2.toString().length <= ans) {
				break;
			}

			if(arr1Prefixes.has(n2)) {
				ans = n2.toString().length;
				break;
			}

			n2 = Math.floor(n2 / 10);
		}
	}

	return ans;
};

const case1 = longestCommonPrefix([1,10,100], [1000]);
const case2 = longestCommonPrefix([1,2,3], [4,4,4]);

console.log(`case1: ${case1} // ${case1 === 3}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
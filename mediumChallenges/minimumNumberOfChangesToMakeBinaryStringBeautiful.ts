// First Approach - Counting how many adjacent pairs are different and return it, as all these counts means it's a pair to be changed. (https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008345/beats-100-00-for-loop-explained-with-example/?envType=daily-question&envId=2024-11-05)
function minChanges(s: string): number {
	let count = 0;
	for(let i = 0; i < s.length; i = i + 2) {
		if(s[i] !== s[i + 1])
			count++;
	}

	return count;
};

const case1 = minChanges("1001");
const case2 = minChanges("10");
const case3 = minChanges("0000");

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 1}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
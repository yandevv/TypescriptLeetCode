// First Approach - Tracking the number of mismatch letters with the same index and their
// count of letters, if mismatch value is greater than 2 or both strings have different
// count of letters return false, otherwise true. (2ms - Beats 20.00%)
function areAlmostEqual(s1: string, s2: string): boolean {
	const n = s1.length, letterCountS1: number[] = new Array(26).fill(0), letterCountS2: number[] = new Array(26).fill(0);

	let mismatchCount = 0;
	for(let i = 0; i < n; i++) {
		if(s1[i] !== s2[i])
			mismatchCount++;

		letterCountS1[s1.charCodeAt(i) - 97]++;
		letterCountS2[s2.charCodeAt(i) - 97]++;
	}

	for(let i = 0; i < 26; i++) {
		if(letterCountS1[i] !== letterCountS2[i])
			return false;
	}

	return mismatchCount > 2 ? false : true;
};

// Second Approach - Tracking the mismatch letters count to limit the swaps by just one and
// comparing the mismatched indexes on both string to check if the letters are equal to
// success the swap. (https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/6376377/beats-100-solution-for-leetcode-1790/)
function areAlmostEqual(s1: string, s2: string): boolean {
	let i = -1, j = -1, mismatchCount = 0;

	for(let k = 0; k < s1.length; k++) {
		if(s1[k] !== s2[k]) {
			mismatchCount++;

			if(i === -1) {
				i = k;
			} else
				j = k;

			if(mismatchCount > 2)
				return false;
		}
	}

	if(mismatchCount === 0)
		return true;

	return s1[i] === s2[j] && s1[j] === s2[i];
};

const case1 = areAlmostEqual("bank", "kanb");
const case2 = areAlmostEqual("attack", "defend");
const case3 = areAlmostEqual("kelb", "kelb");
const case4 = areAlmostEqual("aa", "ac");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
console.log(`case3: ${case3} // ${case3}`);
console.log(`case4: ${case4} // ${!case4}`);
// First Try - Splitting letters into an array and doing "shifting" operations on the indices,
// returning the joined array on the end. (34/39 testcases passed - Time Limit Exceeded)
// function shiftingLetters(s: string, shifts: number[][]): string {
// 	const splittedS = s.split('');

// 	for(let shift of shifts) {
// 		for(let i = shift[0]; i <= shift[1]; i++) {
// 			if(shift[2] === 0) {
// 				splittedS[i] = splittedS[i] === 'a' ? 'z' : String.fromCharCode(splittedS[i].charCodeAt(0) - 1);
// 			} else {
// 				splittedS[i] = splittedS[i] === 'z' ? 'a' : String.fromCharCode(splittedS[i].charCodeAt(0) + 1);
// 			}
// 		}
// 	}

// 	return splittedS.join('');
// };

// Second Try - String mutation on time with subtring method.
// (32 / 39 testcases passed - Time Limit Exceeded)
// function shiftingLetters(s: string, shifts: number[][]): string {
// 	for(let shift of shifts) {
// 		let shiftedS = '';
// 		for(let i = shift[0]; i <= shift[1]; i++) {
// 			if(shift[2] === 0) {
// 				shiftedS += s[i] === 'a' ? 'z' : String.fromCharCode(s[i].charCodeAt(0) - 1);
// 			} else {
// 				shiftedS += s[i] === 'z' ? 'a' : String.fromCharCode(s[i].charCodeAt(0) + 1);
// 			}
// 		}

// 		let leftString: string = shift[0] === 0 ? '' : s.substring(0, shift[0]);
// 		let rightString: string = shift[1] === s.length - 1 ? '' : s.substring(shift[1] + 1, s.length);

// 		s = leftString + shiftedS + rightString;
// 	}

// 	return s;
// };

// First Approach - Difference Array with Prefix Sum precalculating all the shifts operations on
// auxiliar array and prefix summing getting a difference for every s's characters.
// (https://leetcode.com/problems/shifting-letters-ii/solutions/6231675/optimised-prefix-sum-detailed-expiation-beats-100/?envType=daily-question&envId=2025-01-05)
function shiftingLetters(s: string, shifts: number[][]): string {
	const n = s.length;
	const shift = Array(n + 1).fill(0);

	for(let shiftOp of shifts) {
		const [start, end, direction] = shiftOp;

		shift[start] += direction === 1 ? 1 : -1;

		if(end + 1 < n)
			shift[end + 1] -= direction === 1 ? 1 : -1;
	}

	let currentShift = 0;
	let result = s.split('');

	for(let i = 0; i < n; i++) {
		currentShift += shift[i];
		shift[i] = currentShift;
	}

	for(let i = 0; i < n; i++) {
		let netShift = (shift[i] % 26 + 26) % 26;
		result[i] = String.fromCharCode('a'.charCodeAt(0) + (s.charCodeAt(i) - 'a'.charCodeAt(0) + netShift) % 26);
	}

	return result.join('');
};

const case1 = shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]]);
const case2 = shiftingLetters("dztz", [[0,0,0],[1,1,1]]);

console.log(`case1: ${case1} // ${case1 === 'ace'}`);
console.log(`case2: ${case2} // ${case2 === 'catz'}`);
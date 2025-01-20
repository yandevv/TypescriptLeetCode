// First Approach - Iterative counting the number of letter and whenever
// it reaches 3, it decreases 2 from ans and maintain letter count at 1. (52ms - Beats 50.00%)
function minimumLength(s: string): number {
	const n = s.length, letterTrack: number[] = new Array(26).fill(0);

	let ans = n;
	for(let char of s) {
		const charIndex = char.charCodeAt(0) - 97;

		if(letterTrack[charIndex] === 2) {
			ans -= 2;
			letterTrack[charIndex] = 1
			continue;
		}

		letterTrack[charIndex]++;
	}

	return ans;
};

const case1 = minimumLength("abaacbcbb");
const case2 = minimumLength("aa");

console.log(`case1: ${case1} // ${case1 === 5}`)
console.log(`case2: ${case2} // ${case2 === 2}`)
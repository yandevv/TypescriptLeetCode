// First Approach - Two-pointer method iterating over string s concatenating with res and, if it matches with the next spaces value it adds an space. (126ms - Beats 37.50%)
function addSpaces(s: string, spaces: number[]): string {
	let spacesIndex = 0, res = "";

	for(let i = 0; i < s.length; i++) {
		if(spacesIndex < spaces.length && spaces[spacesIndex] === i) {
			res += " ";
			spacesIndex++;
		}

		res += s[i];
	}

	return res;
};

const case1 = addSpaces("LeetcodeHelpsMeLearn", [8,13,15]);
const case2 = addSpaces("icodeinpython", [1,5,7,9]);
const case3 = addSpaces("spacing", [0,1,2,3,4,5,6]);

console.log(`case1: ${case1} // ${case1 === "Leetcode Helps Me Learn"}`);
console.log(`case2: ${case2} // ${case2 === "i code in py thon"}`);
console.log(`case3: ${case3} // ${case3 === " s p a c i n g"}`);
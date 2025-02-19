// First Approach - Stack approach on s's characters and whenever the current string is equal to part parameter, it
// cleans variable and drop part.length times the stack, reconstructing current string with part.length remaining
// stack characters. (5ms - Beats 41.67%)
function removeOccurrences(s: string, part: string): string {
	const charStack: string[] = [];

	let currStringWindow = '';
	for(let i = 0; i < s.length; i++) {
		const char = s[i];

		if(currStringWindow.length === part.length) {
			currStringWindow = currStringWindow.slice(1, part.length);
		}
		currStringWindow += char;

		charStack.push(char);

		while(currStringWindow === part) {
			currStringWindow = '';
			for(let j = 0; j < part.length; j++)
				charStack.pop();

			for(let j = charStack.length; j > charStack.length - part.length; j--) {
				if(j - 1 >= 0)
					currStringWindow = charStack[j - 1] + currStringWindow;
			}
		}
	}

	return charStack.join('');
};

// Second Approach - Same as first approach but single iterating to get new current string. (5ms - Beats 41.67%)
function removeOccurrences(s: string, part: string): string {
	const charStack: string[] = [];

	let currStringWindow = '';
	for(let i = 0; i < s.length; i++) {
		const char = s[i];

		if(currStringWindow.length === part.length) {
			currStringWindow = currStringWindow.slice(1, part.length);
		}
		currStringWindow += char;

		charStack.push(char);

		while(currStringWindow === part) {
			currStringWindow = '';

			let newCurrStringIndex = charStack.length - part.length - 1;
			for(let j = 0; j < part.length; j++) {
				if(newCurrStringIndex >= 0) {
					currStringWindow = charStack[newCurrStringIndex] + currStringWindow;
					newCurrStringIndex--;
				}

				charStack.pop();
			}
		}
	}

	return charStack.join('');
};

// Third Approach - String method manipulation with standard Javascript methods. (0ms - Beats 100.00% - Top submission graph solution)
function removeOccurrences(s: string, part: string): string {
	do {
		s = s.replace(part, "");
	} while(s.includes(part));

	return s
};

const case1 = removeOccurrences("daabcbaabcbc", "abc");
console.log('---')
const case2 = removeOccurrences("axxxxyyyyb", "xy");
console.log('---')
const case3 = removeOccurrences("eemckxmckx", "emckx");
console.log('---')
const case4 = removeOccurrences("ccctltctlltlb", "ctl");

console.log(`case1: ${case1} // ${case1 === 'dab'}`);
console.log(`case2: ${case2} // ${case2 === 'ab'}`);
console.log(`case3: ${case3} // ${case3 === ''}`);
console.log(`case4: ${case4} // ${case4 === 'b'}`);
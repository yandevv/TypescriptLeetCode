// First Approach - Iterating over word counting the actual char and it's count, and whenever actual char is different than the iteration char, record count and actual char into answer string. (37ms - Beats 55.56%)
function compressedString(word: string): string {
	let ans = '';
	let counter = 0, actualChar: string = word[0];
	for(let i = 0; i <= word.length; i++) {
		if(counter === 9 || word[i] !== actualChar) {
			ans += counter + actualChar;
			counter = 0;
			actualChar = word[i];
		}

		counter++;
	}

	return ans;
};

// Second Approach - Same logic of first approach but comparing numbers with their successors, and if it's different record into answer string. (34ms - Beats 55.56%)
function compressedString(word: string): string {
	let ans = '';
	let counter = 1;
	for(let i = 0; i <= word.length; i++) {
		if(counter === 9 || word[i] !== word[i + 1]) {
			ans += counter + word[i];

			counter = 0;
		}

		counter++;
	}

	return ans;
};

const case1 = compressedString("abcde");
const case2 = compressedString("aaaaaaaaaaaaaabb");

console.log(`case1: ${case1} // ${case1 === "1a1b1c1d1e"}`);
console.log(`case2: ${case2} // ${case2 === "9a5a2b"}`);
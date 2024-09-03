// First Approach - Transforming string into number by a conversion object and reducing it by k values summing up numbers. (67ms - 30.00%)
let alphabetConvert: {[key: string]: number} = {
	"a": 1,
	"b": 2,
	"c": 3,
	"d": 4,
	"e": 5,
	"f": 6,
	"g": 7,
	"h": 8,
	"i": 9,
	"j": 10,
	"k": 11,
	"l": 12,
	"m": 13,
	"n": 14,
	"o": 15,
	"p": 16,
	"q": 17,
	"r": 18,
	"s": 19,
	"t": 20,
	"u": 21,
	"v": 22,
	"w": 23,
	"x": 24,
	"y": 25,
	"z": 26
};

function getLucky(s: string, k: number): number {
	let convertedString = "";
	for(let i = 0; i < s.length; i++) {
		convertedString += alphabetConvert[s.charAt(i)];
	}

	for(let count = 0; count < k; count++) {
		let sum = 0;
		for(let i = 0; i < convertedString.length; i++) {
			sum += parseInt(convertedString.charAt(i));
		}
		convertedString = sum.toString();
	}

	return parseInt(convertedString);
};

// Second Approach - Mapping string with map built-in method returning the charCodeAt from every letter subtracting 96 and do while repeating while k is bigger than zero, built-in reducing string with it's value. (Best time from Runtime Chart)
function getLucky(s: string, k: number): number {
	let result: string = s;
	s = [...result]
		.map(x => (x.charCodeAt(0) - 96).toString())
		.join('');

	do {
		let t = [...s].reduce((acc, n) => acc + parseInt(n), 0);
		s = t + '';
		k--;
	} while (k > 0)

	return parseInt(s);
};
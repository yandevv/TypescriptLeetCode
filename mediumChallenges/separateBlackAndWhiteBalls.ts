// First Try - Two-pointer method iterating over all number swapping number whenever a is greater than b, that way increasing swap count. (Time Limit Exceeded - 583/581 passed)
// function minimumSteps(s: string): number {
// 	const splittedS = s.split('').map(val => parseInt(val));

// 	let swapCount = 0, check = true;
// 	while(check) {
// 		check = false;

// 		let l = 0;
// 		for(let r = 1; r < splittedS.length; r++) {
// 			if(splittedS[l] > splittedS[r]) {
// 				splittedS[r] = 1;
// 				splittedS[l] = 0;

// 				swapCount++;
// 				check = true;
// 			}
// 			l++;
// 		}
// 	}

// 	return swapCount;
// };

// First Approach - Two-pointer method counting white balls swaps by the last available white ball index and the actual index. (70ms - Beats 93.33%)
function minimumSteps(s: string): number {
	let whiteBallMoves = 0, lastWhiteBallIndex = 0;
	for(let i = 0; i < s.length; i++) {
		if(s[i] === "0") {
			whiteBallMoves += i - lastWhiteBallIndex;
			lastWhiteBallIndex++;
		}
	}

	return whiteBallMoves;
};

const case1 = minimumSteps("101");
const case2 = minimumSteps("100");
const case3 = minimumSteps("0111");

console.log(`case1: ${case1} // ${case1 === 1}`);
console.log(`case2: ${case2} // ${case2 === 2}`);
console.log(`case3: ${case3} // ${case3 === 0}`);
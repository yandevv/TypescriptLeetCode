// First Approach - Sorting arr to get an ascending order and mapping out these numbers by their position with a hashmap, mapping and returning arr with these ranks. (152ms - Beats 82.14%)
function arrayRankTransform(arr: number[]): number[] {
	const sortedArr = [...arr].sort((a, b) => a - b);

	const rankByNum: Map<number, number> = new Map();

	let lastNum: number, carry = 1;
	sortedArr.forEach(num => {
		if(lastNum !== num) {
			rankByNum.set(num, carry);
			lastNum = num;
			carry++;
		}
	});

	return arr.map(num => rankByNum.get(num)!);
};

const case1 = arrayRankTransform([40,10,20,30]);
const case2 = arrayRankTransform([100,100,100]);
const case3 = arrayRankTransform([37,12,28,9,100,56,80,5,12]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
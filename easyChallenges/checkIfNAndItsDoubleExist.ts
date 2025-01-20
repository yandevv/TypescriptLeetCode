// First Approach - Iterating and hashmapping numbers and if sometime it finds a half or a double number double already encountered, it returns true. (79ms - Beats 6.14%)
function checkIfExist(arr: number[]): boolean {
	let arrMap: Map<number, boolean> = new Map();
	for(let i = 0; i < arr.length; i++) {
		if(arrMap.get(arr[i] * 2) || arrMap.get(arr[i] / 2))
			return true;
		arrMap.set(arr[i], true);
	}
	return false;
};

const case1 = checkIfExist([10,2,5,3]);
const case2 = checkIfExist([3,1,7,11]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
// First Approach - Stack method comparing the index number with the last number of stack,
// popping up with iterating until stack reaches length 0 and if increases maximumChunks. (0ms - Beats 100.00%)
function maxChunksToSorted(arr: number[]): number {
	let maximumChunks = 0, numStack: number[] = [];

	for(let i = 0; i < arr.length; i++) {
		numStack.push(arr[i]);

		if(numStack[numStack.length - 1] <= i) {
			while(numStack[numStack.length - 1] <= i) {
				numStack.pop();
			}
			
			if(numStack.length === 0) {
				maximumChunks++;
			}
		}
	}

	return maximumChunks;
};

const case1 = maxChunksToSorted([4,3,2,1,0]);
const case2 = maxChunksToSorted([1,0,2,3,4]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
// First Approach - Hashmapping the distinctness of each string with a boolean and iterating entries over getting the kth distinct string. (71ms - Beats 41.67%)
function kthDistinct(arr: string[], k: number): string {
	const isDistinct: Map<string, boolean> = new Map();
	arr.forEach(value => {
		if(!isDistinct.has(value)) {
			isDistinct.set(value, true)
		} else {
			isDistinct.set(value, false);
		}
	});
	let i = 0;
	for(let entry of isDistinct.entries()) {
		if(entry[1]) i++;
		if(i === k) return entry[0];
	}
	return "";
};
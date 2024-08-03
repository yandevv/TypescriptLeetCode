// First Approach - Hashmapping target numbers count and iterating over arr decreasing every number into hash count, and if it doesn't exists or in the end hashmapping size is bigger than zero, it's false, otherwise true. (67ms - Beats 44.0%)
function canBeEqual(target: number[], arr: number[]): boolean {
	const targetNumberCount: Map<number, number> = new Map();
	target.forEach(tgtNum => targetNumberCount.set(tgtNum, (targetNumberCount.get(tgtNum) ?? 0) + 1));

	for(let i = 0; i < arr.length; i++) {
		if(targetNumberCount.get(arr[i]) !== undefined) {
			let actlNumberCount: number = targetNumberCount.get(arr[i])! - 1;
			targetNumberCount.set(arr[i], actlNumberCount);
			if(actlNumberCount === 0) targetNumberCount.delete(arr[i]);
			continue;
		}
		return false;
	}

	return targetNumberCount.size === 0 ? true : false;
};

// Second Approach - Sorting both arrays and comparing each other and if it's different, returns false, otherwise true. (58ms - 84.0%) - Hinted
function canBeEqual(target: number[], arr: number[]): boolean {
	target.sort((a, b) => a - b);
	arr.sort((a, b) => a - b);

	for(let i = 0; i < arr.length; i++)
		if(target[i] !== arr[i]) return false;

	return true;
};
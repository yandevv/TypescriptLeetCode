// First Approach - Creating a res array with m empty arrays and pushing back a value to floored index divided by n array. (199ms - Beats 16.33%)
function construct2DArray(original: number[], m: number, n: number): number[][] {
	if(m * n !== original.length)
		return [];

	const res: number[][] = Array.from({ length: m }).map(() => new Array());
	original.forEach((value, index) => res[Math.floor(index / n)].push(value));

	return res;
};
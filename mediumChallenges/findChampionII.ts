// First Approach - Iterating over edges and removing from a pre-defined set with 0 to n - 1 values and, returning -1 if set is greater than 1, otherwise return -1. (8ms - Beats 100.00%)
function findChampion(n: number, edges: number[][]): number {
	const nodesWithoutParent: Set<number> = new Set(new Array(n).fill(0).map((value, index) => index));

	edges.forEach(edge => nodesWithoutParent.delete(edge[1]));

	return nodesWithoutParent.size === 1 ? Array.from(nodesWithoutParent.values())[0] : -1;
};

const case1 = findChampion(3, [[0,1],[1,2]]);
const case2 = findChampion(4, [[0,2],[1,3],[1,2]]);

console.log(`case1: ${case1} // ${case1 === 0}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
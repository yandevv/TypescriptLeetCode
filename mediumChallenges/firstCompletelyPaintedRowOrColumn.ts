// First Approach - Hash tabling each mat number with it i and j values, iterating
// afterwards through arr tracking row and column counts to compare with m and n values
// (checking if any row and column is filled up). (172ms - Beats 16.67%)
function firstCompleteIndex(arr: number[], mat: number[][]): number {
	const rowColumnByMat: Map<number, number[]> = new Map(), m = mat.length, n = mat[0].length;
	for(let i = 0; i < mat.length; i++) {
		for(let j = 0; j < mat[i].length; j++) {
			rowColumnByMat.set(mat[i][j], [i, j]);
		}
	}

	const rowCount: number[] = new Array(m).fill(0), columnCount: number[] = new Array(n).fill(0);
	for(let i = 0; i < arr.length; i++) {
		const [iNum, jNum] = rowColumnByMat.get(arr[i])!;
		rowCount[iNum]++;
		if(rowCount[iNum] === n)
			return i;

		columnCount[jNum]++;
		if(columnCount[jNum] === m)
			return i;
	}

	return n * m - 1;
};

// Second Approach - Same analogy from first approach but with tracking of row and column indexes being by array indexed by arr num value. (21ms - Beats 100.00%)
function firstCompleteIndex(arr: number[], mat: number[][]): number {
	const n = mat.length, m = mat[0].length;
	const columnByValue: number[] = new Array(m * n + 1), rowByValue: number[] = new Array(m * n + 1);
	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			rowByValue[mat[i][j]] = i;
			columnByValue[mat[i][j]] = j;
		}
	}

	const rowCount: number[] = new Array(n).fill(0), columnCount: number[] = new Array(m).fill(0);
	for(let i = 0; i < arr.length; i++) {
		rowCount[rowByValue[arr[i]]]++;
		columnCount[columnByValue[arr[i]]]++;

		if(rowCount[rowByValue[arr[i]]] === m || columnCount[columnByValue[arr[i]]] === n)
			return i;
	}

	return n * m - 1;
};

const case1 = firstCompleteIndex([1,3,4,2], [[1,4],[2,3]]);
const case2 = firstCompleteIndex([2,8,7,4,1,3,5,6,9], [[3,2,5],[1,4,6],[8,7,9]]);
const case3 = firstCompleteIndex([6,2,3,1,4,5], [[5,1],[2,4],[6,3]]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 2}`);
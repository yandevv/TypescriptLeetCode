// First Approach - Iterating over grid and storing servers by row and column, iterating over these arrays after
// and tracking by row and column in a set the servers. (11ms - Beats 18.75%)
function countServers(grid: number[][]): number {
	const n = grid.length, m = grid[0].length;
	const serverByRow: string[][] = Array.from(new Array(n), () => []), serverByColumn: string[][] = Array.from(new Array(m), () => []);

	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			if(grid[i][j]) {
				serverByRow[i].push(`${i}-${j}`);
				serverByColumn[j].push(`${i}-${j}`);
			}
		}
	}

	const communicateServersSet: Set<string> = new Set();
	for(let row of serverByRow) {
		if(row.length > 1) {
			row.forEach((server) => {
				communicateServersSet.add(server);
			});
		}
	}

	for(let column of serverByColumn) {
		if(column.length > 1) {
			column.forEach((server) => {
				communicateServersSet.add(server);
			});
		}
	}

	return communicateServersSet.size;
};

// Second Approach - Same analogy from first approach but without first pass storing the servers
// by rows and columns. (8ms - Beats 18.75%)
function countServers(grid: number[][]): number {
	const n = grid.length, m = grid[0].length;

	const communicateServersSet: Set<string> = new Set();
	for(let i = 0; i < n; i++) {
		let hasOne = false, firstServer: string;
		for(let j = 0; j < m; j++) {
			if(grid[i][j]) {
				if(hasOne) {
					communicateServersSet.add(`${i}-${j}`);
					communicateServersSet.add(firstServer!);
				} else {
					firstServer = `${i}-${j}`;
					hasOne = true;
				}
			}
		}
	}

	for(let j = 0; j < m; j++) {
		let hasOne = false, firstServer: string;
		for(let i = 0; i < n; i++) {
			if(grid[i][j]) {
				if(hasOne) {
					communicateServersSet.add(`${i}-${j}`);
					communicateServersSet.add(firstServer!);
				} else {
					firstServer = `${i}-${j}`;
					hasOne = true;
				}
			}
		}
	}

	return communicateServersSet.size;
};

const case1 = countServers([[1,0],[0,1]]);
const case2 = countServers([[1,0],[1,1]]);
const case3 = countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]);

console.log(`case1: ${case1} // ${case1 === 0}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
console.log(`case3: ${case3} // ${case3 === 4}`);
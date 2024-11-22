// First Approach - Brute forcing with 4-directional iteration on guard positions after marking guards and walls position in a 2-dimensional map. (112ms - Beats 100.00%)
function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
	const cells: number[][] = Array(m).fill(0).map(row => Array(n).fill(0));

	let availableCells = m * n;

	walls.forEach(wall => {
		const [y, x] = wall;
		cells[y][x] = -1;
		availableCells--;
	});

	guards.forEach(guard => {
		const [y, x] = guard;
		cells[y][x] = -1;

		availableCells--;
	})

	guards.forEach(guard => {
		cells[guard[0]][guard[1]] = -1;

		let actualY = guard[0] - 1;
		let actualX = guard[1];

		// Checking north cells
		while(actualY > -1 && cells[actualY][actualX] !== -1) {
			if(cells[actualY][actualX] === 0) {
				availableCells--;
			}

			cells[actualY][actualX] = 1;

			actualY--;
		}

		actualY = guard[0];
		actualX = guard[1] + 1;

		// Checking east cells
		while(actualX < n && cells[actualY][actualX] !== -1) {
			if(cells[actualY][actualX] === 0) {
				availableCells--;
			}

			cells[actualY][actualX] = 1;

			actualX++;
		}

		actualY = guard[0] + 1;
		actualX = guard[1];

		// Checking south cells
		while(actualY < m && cells[actualY][actualX] !== -1) {
			if(cells[actualY][actualX] === 0) {
				availableCells--;
			}

			cells[actualY][actualX] = 1;

			actualY++;
		}

		actualY = guard[0];
		actualX = guard[1] - 1;

		// Checking west cells
		while(actualX > -1 && cells[actualY][actualX] !== -1) {
			if(cells[actualY][actualX] === 0) {
				availableCells--;
			}

			cells[actualY][actualX] = 1;

			actualX--;
		}
	});

	return availableCells;
};

const case1 = countUnguarded(4, 6, [[0,0],[1,1],[2,3]], [[0,1],[2,2],[1,4]]);
const case2 = countUnguarded(3, 3, [[1,1]], [[0,1],[1,0],[2,1],[1,2]]);
const case3 = countUnguarded(2, 7, [[1,5],[1,1],[1,6],[0,2]], [[0,6],[0,3],[0,5]]);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === 4}`);
console.log(`case3: ${case3} // ${case3 === 1}`);
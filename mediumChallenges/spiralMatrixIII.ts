// First Approach - Simulating every step of spiral and checking with it's in the boundaries of the grid, if so it adds on the ans array. (98ms - Beats 40.00%)
function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
	let i = rStart, j = cStart;
	
	let step = 1, direction: 0 | 1 | 2 | 3 = 0;
	let ans: [number, number][] = [[i, j]];
	while(ans.length < rows * cols) {
		const actualStep = Math.floor(step);
		if(direction === 0) {
			for(let k = 0; k < actualStep; k++) {
				j++;
				if(i >= 0 && i < rows && j >= 0 && j < cols) {
					ans.push([i, j]);
				}
			}
			direction = 1;
		} else if(direction === 1) {
			for(let k = 0; k < actualStep; k++) {
				i++;
				if(i >= 0 && i < rows && j >= 0 && j < cols) {
					ans.push([i, j]);
				}
			}
			direction = 2;
		} else if(direction === 2) {
			for(let k = 0; k < actualStep; k++) {
				j--;
				if(i >= 0 && i < rows && j >= 0 && j < cols) {
					ans.push([i, j]);
				}
			}
			direction = 3;
		} else if(direction === 3) {
			for(let k = 0; k < actualStep; k++) {
				i--;
				if(i >= 0 && i < rows && j >= 0 && j < cols) {
					ans.push([i, j]);
				}
			}
			direction = 0;
		}
		step += 0.5;
	}

	return ans;
};
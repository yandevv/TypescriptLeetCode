import { Queue } from '@datastructures-js/queue';

// First Approach - BFS and Queue approach iterating firstly through isWater's cells queueing up water cell's
// positions and BFSing the queue enqueuing the cardinals near cells each iteration. (458ms - Beats 6.25%)
function highestPeak(isWater: number[][]): number[][] {
	const n = isWater.length, m = isWater[0].length;

	const height: number[][] = Array.from(new Array(n), () => new Array(m).fill(0));
	const isVisited: (0 | 1)[][] = Array.from(new Array(n), () => new Array(m).fill(0));

	const queue: Queue<[number, number, number]> = new Queue();
	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			if(isWater[i][j])
				queue.enqueue([i, j, 0]);
		}
	}

	while(queue.size() > 0) {
		const [i, j, value] = queue.dequeue();

		if(isVisited[i][j])
			continue;

		isVisited[i][j] = 1;
		height[i][j] = value;

		if(i > 0) {
			queue.enqueue([i - 1, j, value + 1]);
		}

		if(i < n - 1) {
			queue.enqueue([i + 1, j, value + 1]);
		}

		if(j > 0) {
			queue.enqueue([i, j - 1, value + 1]);
		}

		if(j < m - 1) {
			queue.enqueue([i, j + 1, value + 1]);
		}
	}

	return height;
};

// Second Approach - BFS and Queue approach by Samir Kumar without isVisited array and attributing value to
// cell before it reaches it on BFS iteration, being almost 4x times more optimal.
// (https://leetcode.com/problems/map-of-highest-peak/solutions/6312989/beats-98-29-without-bfs-with-bfs-matrix-solution-for-leetcode-1765/?envType=daily-question&envId=2025-01-22)
function highestPeak(isWater: number[][]): number[][] {
	const n = isWater.length, m = isWater[0].length;

	const height: number[][] = Array.from(new Array(n), () => new Array(m));

	const queue: Queue<[number, number]> = new Queue();
	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			if(isWater[i][j]) {
				queue.enqueue([i, j]);
				height[i][j] = 0;
			} else {
				height[i][j] = -1;
			}
		}
	}

	const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];

	while(queue.size() > 0) {
		const [r, c] = queue.dequeue();

		for(let direction of directions) {
			const nr = r + direction[0];
			const nc = c + direction[1];

			if(nr >= 0 && nr < n && nc >= 0 && nc < m && height[nr][nc] === -1) {
				height[nr][nc] = height[r][c] + 1;
				queue.enqueue([nr, nc]);
			}
		}
	}

	return height;
};

// Third Approach - Double iteration method consisting in a Top to Bottom and LTR iteration and Bottom to Top
// and RTL iteration, catching the minimum value from the near already iterated cells.
// (https://leetcode.com/problems/map-of-highest-peak/solutions/6313071/no-bfs-simple-loop-detailed-explanation/?envType=daily-question&envId=2025-01-22)
function highestPeak(isWater: number[][]): number[][] {
	const n = isWater.length, m = isWater[0].length;

	const height: number[][] = Array.from(new Array(n), () => new Array(m).fill(n + m));

	for(let i = 0; i < n; i++) {
		for(let j = 0; j < m; j++) {
			if(isWater[i][j]) {
				height[i][j] = 0;
			} else {
				if(i > 0) {
					height[i][j] = Math.min(height[i][j], height[i - 1][j] + 1);
				}

				if(j > 0) {
					height[i][j] = Math.min(height[i][j], height[i][j - 1] + 1);
				}
			}
		}
	}

	for(let i = n - 1; i >= 0; i--) {
		for(let j = m - 1; j >= 0; j--) {
			if(i < n - 1) {
				height[i][j] = Math.min(height[i][j], height[i + 1][j] + 1);
			}

			if(j < m - 1) {
				height[i][j] = Math.min(height[i][j], height[i][j + 1] + 1);
			}
		}
	}

	return height;
};

const case1 = highestPeak([[0,1],[0,0]]);
const case2 = highestPeak([[0,0,1],[1,0,0],[0,0,0]]);

console.log('case1:');
console.log(case1);
console.log('case2:');
console.log(case2);
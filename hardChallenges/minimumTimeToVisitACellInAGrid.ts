// First Approach - BFS and Dijkstra algorithm with min-prio heap paths combined with the time required to, mapping up the visited coordinates. (https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/3233927/dijkstra-bfs-priorityqueue/?envType=daily-question&envId=2024-11-29)
const moves = [[0, -1], [0, 1], [1, 0], [-1, 0]]

function minimumTime(grid: number[][]): number {
	const N = grid.length;
	const M = grid[0].length;

	const check = (x: number, y: number) => x >= 0 && y >= 0 && x < N && y < M;

	let visited: boolean[][] = [...new Array(N)].map(_ => new Array(M).fill(false));

	if (grid[0][1] > 1 && grid[1][0] > 1) {
		return -1;
	}

	const heap = new MinPriorityQueue();
	heap.enqueue([0, 0, 0], 0);

	while(heap.size()) {
		let [i, j, time] = heap.dequeue().element;

		visited[i][j] = true;

		if(i == N - 1 && j == M - 1) {
			return time;
		}

		for(const [diffX, diffY] of moves) {
			const newX = i + diffX, newY = j + diffY;
			if(!check(newX, newY)) {
				continue;
			}

			if(visited[newX][newY]) {
				continue;
			}

			let newTime = time + 1
			if(time + 1 < grid[newX][newY]) {
				let diff = grid[newX][newY] - time - 1
				newTime = diff % 2 == 0 ?
					grid[newX][newY] : grid[newX][newY] + 1
			}

			visited[newX][newY] = true;
			heap.enqueue([newX, newY, newTime], newTime)
		}
	}

	return -1;
};

const case1 = minimumTime([[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]);
const case2 = minimumTime([[0, 2, 4], [3, 2, 1], [1, 0, 4]]);

console.log(`case1: ${case1} // ${case1 === 7}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
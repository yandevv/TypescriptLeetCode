// First Approach - Djikstra's approach with priority based on how many obstacles was need to break through the path, comparing and storing visited row-column's. (https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6091780/dijkstra-algorithm/?envType=daily-question&envId=2024-11-28)
function minimumObstacles(grid: number[][]): number {
	const n = grid.length, m = grid[0].length;

	let seen = new Set();
	seen.add(encr(0, 0));

	const directions: number[][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];

	function isValid(r, c) {
		if(!(r >= 0 && r < n && c >= 0 && c < m)) {
			return false;
		}

		const key = encr(r, c);

		return !seen.has(key);
	}

	let heap = new MinPriorityQueue();
	heap.enqueue([0, 0, 0], 0)

	while(!heap.isEmpty()) {
		const [r, c, o] = heap.dequeue().element;

		if(r === n - 1 && c === m - 1) {
			return o;
		}

		directions.forEach(([a, b]) => {
			const nr = a + r;
			const nc = b + c;
			const value = grid?.[nr]?.[nc];
			const newObstacles = value === 1 ? o + 1 : o;

			if(!isValid(nr, nc)) {
				return;
			}

			heap.enqueue([nr, nc, newObstacles], newObstacles);
			seen.add(encr(nr, nc));
		})
	}

	return -1;
};

function encr(row: number, column: number): string {
	return `${row}-${column}`;
}

const case1 = minimumObstacles([[0,1,1],[1,1,0],[1,1,0]]);
const case2 = minimumObstacles([[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]);

console.log(`case1: ${case1} // ${case1 === 2}`);
console.log(`case2: ${case2} // ${case2 === 0}`);
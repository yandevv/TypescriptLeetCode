// First Approach - Bipartite checking approach and BFS iteration through all nodes gathering the maximum
// layering of each node being root. (https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/6348041/solution-with-detail-explanation-beats-100-in-time-and-space-unknown/?envType=daily-question&envId=2025-01-30)
function magnificentSets(n: number, edges: number[][]): number {
	const adjacencyList: number[][] = Array.from({ length: n }, () => []);

	for (const [u, v] of edges) {
		const uIndex = u - 1;
		const vIndex = v - 1;
		adjacencyList[uIndex].push(vIndex);
		adjacencyList[vIndex].push(uIndex);
	}

	const globalVisited: boolean[] = Array(n).fill(false);

	function getMaxLayerCount(startNode: number): number {
		const distance: number[] = Array(n).fill(-1);
		distance[startNode] = 0;

		const queue: number[] = [startNode];

		let maxLayer = 1;

		while(queue.length > 0) {
			const current = queue.shift()!;
			const currentDist = distance[current];

			for(const neighbor of adjacencyList[current]) {
				if(distance[neighbor] === -1) {
					distance[neighbor] = currentDist + 1;
					maxLayer = Math.max(maxLayer, distance[neighbor] + 1);
					queue.push(neighbor);
					continue;
				}

				if(Math.abs(distance[neighbor] - currentDist) !== 1) {
					return -1;
				}
			}
		}

		return maxLayer;
	}

	function exploreComponent(startNode: number): number {
		const queue: number[] = [startNode];
		const distance: number[] = Array(n).fill(-1);
		distance[startNode] = 0;
		globalVisited[startNode] = true;

		const componentNodes: number[] = [startNode];

		while(queue.length > 0) {
			const current = queue.shift()!;
			const currentDist = distance[current];

			for(const neighbor of adjacencyList[current]) {
				if(distance[neighbor] === -1) {
					distance[neighbor] = currentDist + 1;
					queue.push(neighbor);
					componentNodes.push(neighbor);
					globalVisited[neighbor] = true;
					continue;
				}

				if(distance[neighbor] === currentDist) {
					return -1;
				}

			}
		}

		let maxGroups = 1;
		for(const node of componentNodes) {
			const layerCount = getMaxLayerCount(node);
			if(layerCount === -1) {
				return -1;
			}
			maxGroups = Math.max(maxGroups, layerCount);
		}

		return maxGroups;
	}

	let totalMaxGroups = 0;

	for(let i = 0; i < n; i++) {
		if(globalVisited[i]) {
			continue;
		}

		const resultForComponent = exploreComponent(i);

		if(resultForComponent === -1) {
			return -1;
		}

		totalMaxGroups += resultForComponent;
	}

	return totalMaxGroups;
}

const case1 = magnificentSets(6, [[1,2],[1,4],[1,5],[2,6],[2,3],[4,6]]);
const case2 = magnificentSets(3, [[1,2],[2,3],[3,1]]);

console.log(`case1: ${case1} // ${case1 === 4}`);
console.log(`case2: ${case2} // ${case2 === -1}`);
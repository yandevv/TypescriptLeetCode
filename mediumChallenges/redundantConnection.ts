// First Approach - DFS method identifying the cycle inside graph and backtracking with the encountered node
// of cycle, adding every nodeNumber of cycle in a Set to compare with edges's array catching the last edge
// that matches with Set. (16ms - Beats 16.22%)
function dfs(nodeNumber: number, graph: number[][], isVisited: number[], cycleParticipantNodes: Set<number> = new Set(), lastNodeNumber = 0): number {
	isVisited[nodeNumber - 1] = 1;

	for(let edgeNodeNum of graph[nodeNumber - 1]) {
		if(edgeNodeNum !== lastNodeNumber) {
			if(isVisited[edgeNodeNum - 1]) {
				cycleParticipantNodes.add(nodeNumber);
				return edgeNodeNum;
			}
	
			const cycleNumber = dfs(edgeNodeNum, graph, isVisited, cycleParticipantNodes, nodeNumber);
			if(cycleNumber) {
				cycleParticipantNodes.add(nodeNumber);
	
				if(cycleNumber === nodeNumber) {
					return 0;
				} else
					return cycleNumber;
			}
		}
	}

	return 0;
}

function findRedundantConnection(edges: number[][]): number[] {
	const n = edges.length;

	const graph: number[][] = Array.from(new Array(n), () => []);
	for(let edge of edges) {
		graph[edge[1] - 1].push(edge[0]);
		graph[edge[0] - 1].push(edge[1]);
	}

	const cycleParticipantNodes: Set<number> = new Set()
	dfs(1, graph, new Array(n).fill(0), cycleParticipantNodes);

	console.log(cycleParticipantNodes.entries());

	let farthestEdge: number[] = [];
	for(const edge of edges) {
		if(cycleParticipantNodes.has(edge[0]) && cycleParticipantNodes.has(edge[1])) {
			farthestEdge = edge;
		}
	}

	return farthestEdge;
};

// 

const case1 = findRedundantConnection([[1,2],[1,3],[2,3]]);
const case2 = findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]);
const case3 = findRedundantConnection([[1,3],[3,4],[1,5],[3,5],[2,3]]);

console.log(`case1: ${case1} // Should be: [2,3]`);
console.log(`case2: ${case2} // Should be: [1,4]`);
console.log(`case3: ${case3} // Should be: [3,5]`);
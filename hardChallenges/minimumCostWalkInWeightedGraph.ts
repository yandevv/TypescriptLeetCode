import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// First Try - BFS with Djikstra-like only tracking the lastNode visited, outputing wrong answer as it may be necessary to transverse to common nodes. (Wrong Answer)
// function minimumCost(n: number, edges: number[][], queries: number[][]): number[] {
//   const edgesMap: Map<number, number[]> = new Map(), edgesWeight: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
//   for(const edge of edges) {
//     const [u, v, w] = edge;

//     const uNodes = edgesMap.get(u) ?? [];
//     uNodes.push(v);
//     edgesMap.set(u, uNodes);

//     const vNodes = edgesMap.get(v) ?? [];
//     vNodes.push(u);
//     edgesMap.set(v, vNodes);

//     edgesWeight[u][v] = w;
//     edgesWeight[v][u] = w;
//   }

//   function calculateMinDistance(startNode: number, targetNode: number) {
//     const minPQ = new MinPriorityQueue<number[]>((track) => track[2]);

//     const initialNodeEdges = edgesMap.get(startNode);
//     if(!initialNodeEdges)
//       return -1;

//     for(const edgeNode of initialNodeEdges)
//       minPQ.enqueue([edgeNode, startNode, edgesWeight[edgeNode][startNode]]);

//     while(minPQ.size()) {
//       const [actualNode, lastNode, cost] = minPQ.dequeue()!;

//       if(actualNode === targetNode)
//         return cost;

//       const actualNodeEdges = edgesMap.get(actualNode);
//       if(!actualNodeEdges)
//         continue;

//       for(const edgeNode of actualNodeEdges) {
//         if(edgeNode === lastNode)
//           continue;

//         minPQ.enqueue([edgeNode, actualNode, cost & edgesWeight[actualNode][edgeNode]]);
//       }
//     }

//     return -1;
//   }

//   const ans: number[] = [];
//   for(const query of queries) {
//     ans.push(calculateMinDistance(query[0], query[1]));
//   }

//   return ans;
// };

// First Approach - Union-find method solution relating every node with a common parent and tracking the cost of
// every system of nodes equally as AND operations never decrease. (https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph/solutions/6558666/leetcodedaybyday-beats-100-python3-92-53-c-80-59-java-79-js-100-ts/?envType=daily-question&envId=2025-03-20)
function findParent(node : number, parent: number[]) : number{
  if(parent[node] < 0)
    return node;

  parent[node] = findParent(parent[node], parent);

  return parent[node];
}

function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
  const parent = new Array(n).fill(-1);
  const cost = new Array(n).fill(-1);

  for(let edge of edges){
    const [u, v, w] = edge;

    const ru = findParent(u, parent);
    const rv = findParent(v, parent);

    if(ru != rv){
      cost[ru] &= cost[rv];
      parent[rv] = ru;
    }

    cost[ru] &= w;
  }

  const res: number[] = [];
  for(let q of query){
    const [u, v] = q;

    const ru = findParent(u, parent);
    const rv = findParent(v, parent);

    if(ru == rv){
      res.push(cost[ru]);
    } else {
      res.push(-1);
    }
  }

  return res;
};

const case1 = minimumCost(5, [[0,1,7],[1,3,7],[1,2,1]], [[0,3],[3,4]]);
const case2 = minimumCost(3, [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], [[1,2]]);

console.log(`case1: ${case1} // Should be: [1,-1]`);
console.log(`case2: ${case2} // Should be: [0]`);
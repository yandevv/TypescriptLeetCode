// First Try - DFS method traversing through both trees and calculating the
// maximum target nodes. (Time Limit Exceeded - 816 / 825 testcases passed)
// function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
//   function dfs(node: number, parent: number, children: number[][], depth: number = 0): number {
//     let res = depth % 2 === 0 ? 1 : 0;
//     for(const child of children[node]) {
//       if(child === parent)
//         continue;

//       res += dfs(child, node, children, depth + 1);
//     }

//     return res;
//   }

//   const n = edges1.length + 1;
//   const childrenEdges1: number[][] = Array.from({ length: n }, () => []);

//   for(const [u, v] of edges1) {
//     childrenEdges1[u].push(v);
//     childrenEdges1[v].push(u);
//   }

//   const edges1Targets: number[] = [];
//   for(let i = 0; i < n; i++)
//     edges1Targets[i] = dfs(i, -1, childrenEdges1);

//   const m = edges2.length + 1;
//   const childrenEdges2: number[][] = Array.from({ length: m }, () => []);

//   for(const [u, v] of edges2) {
//     childrenEdges2[u].push(v);
//     childrenEdges2[v].push(u);
//   }

//   let maxValueSecondTree = Number.MIN_SAFE_INTEGER;
//   for(let i = 0; i < m; i++) {
//     maxValueSecondTree = Math.max(dfs(i, -1, childrenEdges2), maxValueSecondTree);
//   }

//   const res: number[] = Array(n);
//   for(let i = 0; i < n; i++)
//     res[i] = edges1Targets[i] + maxValueSecondTree;

//   return res;
// }

// Second Approach - DFS method traversing through both trees and calculating the maximum target
// values for each node that participate through alternated depths, summing all the nods that
// are at even depths in the first tree and odd depths in the second tree, and vice versa.
// (569ms - Beats -%)
function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
  function dfs(node: number, parent: number, children: number[][], depth: number = 0, edgesEven: number[], count: number[]) {
    if(depth % 2 === 0) {
      edgesEven[node] = 1;
      count[0]++;
    } else {
      edgesEven[node] = 0;
      count[1]++;
    }

    for(const child of children[node]) {
      if(child === parent)
        continue;

      dfs(child, node, children, depth + 1, edgesEven, count);
    }
  }

  const n = edges1.length + 1;
  const childrenEdges1: number[][] = Array.from({ length: n }, () => []);

  for(const [u, v] of edges1) {
    childrenEdges1[u].push(v);
    childrenEdges1[v].push(u);
  }

  const edges1Even: number[] = [], edges1Count: number[] = [0, 0];
  dfs(0, -1, childrenEdges1, 0, edges1Even, edges1Count);

  const m = edges2.length + 1;
  const childrenEdges2: number[][] = Array.from({ length: m }, () => []);

  for(const [u, v] of edges2) {
    childrenEdges2[u].push(v);
    childrenEdges2[v].push(u);
  }

  const edges2Even: number[] = [], edges2Count: number[] = [0, 0];
  dfs(0, -1, childrenEdges2, 0, edges2Even, edges2Count);

  let maxValueSecondTree = Math.max(...edges2Count);

  const res: number[] = Array(n);
  for(let i = 0; i < n; i++) {
    if(edges1Even[i] === 1) {
      res[i] = edges1Count[0] + maxValueSecondTree;
    } else
      res[i] = edges1Count[1] + maxValueSecondTree;
  }

  return res;
}

const case1 = maxTargetNodes([[0,1],[0,2],[2,3],[2,4]], [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]);
const case2 = maxTargetNodes([[0,1],[0,2],[0,3],[0,4]], [[0,1],[1,2],[2,3]]);

console.log(`case1: ${case1} // Should be: [8,7,7,8,8]`);
console.log(`case2: ${case2} // Should be: [3,6,6,6,6]`);
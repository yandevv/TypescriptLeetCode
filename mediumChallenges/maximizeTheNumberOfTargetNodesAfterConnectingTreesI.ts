// First Approach - BFS method using a Map to store the edges between nodes and then traversing through
// the nodes of both trees to find the maximum target nodes reachable within k steps, summing the
// maximum count of targets of second tree with the count of target of every node in first tree.
// (1037ms - Beats -%).
// function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
//   const n = edges1.length + 1, m = edges2.length + 1;

//   if(k === 0)
//     return Array(n).fill(1);

//   const node1Map = new Map<number, number[]>(), node2Map = new Map<number, number[]>();

//   for(const [edgeA, edgeB] of edges1) {
//     if(!node1Map.has(edgeA)) {
//       node1Map.set(edgeA, [edgeB]);
//     } else
//       node1Map.get(edgeA)!.push(edgeB);

//     if(!node1Map.has(edgeB)) {
//       node1Map.set(edgeB, [edgeA]);
//     } else
//       node1Map.get(edgeB)!.push(edgeA);
//   }

//   for(const [edgeA, edgeB] of edges2) {
//     if(!node2Map.has(edgeA)) {
//       node2Map.set(edgeA, [edgeB]);
//     } else
//       node2Map.get(edgeA)!.push(edgeB);

//     if(!node2Map.has(edgeB)) {
//       node2Map.set(edgeB, [edgeA]);
//     } else
//       node2Map.get(edgeB)!.push(edgeA);
//   }

//   let biggestTarget = Number.MIN_SAFE_INTEGER;
//   for(let i = 0; i < m; i++) {
//     if(k === 1) {
//       biggestTarget = 1;
//       break;
//     }

//     if(!node2Map.has(i))
//       continue;

//     const queue: number[][] = [], visited = new Set<number>([i]);
//     for(const node of node2Map.get(i)!) {
//       queue.push([node, 1]);
//     }

//     let count = 1;
//     while(queue.length > 0) {
//       const [node, depth] = queue.pop()!;

//       if(depth > k - 1)
//         continue;

//       visited.add(node);
//       count++;

//       if(node2Map.has(node)) {
//         for(const neighbor of node2Map.get(node)!) {
//           if(visited.has(neighbor))
//             continue;

//           queue.push([neighbor, depth + 1]);
//         }
//       }
//     }

//     biggestTarget = Math.max(biggestTarget, count);
//   }

//   const ans: number[] = [];
//   for(let i = 0; i < n; i++) {
//     const queue: number[][] = [], visited = new Set<number>([i]);
//     for(const node of node1Map.get(i)!) {
//       queue.push([node, 1]);
//     }

//     let count = 1;
//     while(queue.length > 0) {
//       const [node, depth] = queue.pop()!;

//       visited.add(node);
//       count++;

//       if(node1Map.has(node)) {
//         for(const neighbor of node1Map.get(node)!) {
//           if(visited.has(neighbor) || depth + 1 > k)
//             continue;

//           queue.push([neighbor, depth + 1]);
//         }
//       }
//     }

//     ans.push(count + biggestTarget);
//   }

//   return ans;
// };

// Second Approach - DFS method to traverse through the nodes of both trees and find the maximum target
// nodes of second tree, summing up with every target count of first tree, same as first approach but
// using simple arrays and DFS. (Best submission of graph)
function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
  function dfs(node: number, parent: number, children: number[][], k: number): number {
    if(k < 0) {
      return 0;
    }

    let res = 1;
    for(const child of children[node]) {
      if(child === parent) {
        continue;
      }

      res += dfs(child, node, children, k - 1);
    }

    return res;
  }

  function build(edges: number[][], k: number): number[] {
    const n = edges.length + 1;
    const children: number[][] = Array.from({ length: n }, () => []);

    for(const [u, v] of edges) {
      children[u].push(v);
      children[v].push(u);
    }

    const res: number[] = Array(n);
    for(let i = 0; i < n; i++) {
      res[i] = dfs(i, -1, children, k);
    }

    return res;
  }

  const n = edges1.length + 1;

  const count1 = build(edges1, k);
  const count2 = build(edges2, k - 1);

  const maxCount2 = Math.max(...count2);

  const res: number[] = Array(n);
  for(let i = 0; i < n; i++) {
    res[i] = count1[i] + maxCount2;
  }

  return res;
}

const case1 = maxTargetNodes([[0, 1], [0, 2], [2, 3], [2, 4]], [[0, 1], [0, 2], [0, 3], [2, 7], [1, 4], [4, 5], [4, 6]], 2);
const case2 = maxTargetNodes([[0, 1], [0, 2], [0, 3], [0, 4]], [[0, 1], [1, 2], [2, 3]], 1);

console.log(`case1: ${case1} // Should be: [9,7,9,8,8]`);
console.log(`case2: ${case2} // Should be: [6,3,3,3,3]`);
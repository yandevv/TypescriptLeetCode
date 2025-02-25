// Definition for a binary tree node.
class UndirectedTreeNode {
  nodeNumber: number;
  val: number;
  parent: UndirectedTreeNode | null;
  children: UndirectedTreeNode[];

  constructor(val?: number, parent?: UndirectedTreeNode | null, nodeNumber?: number) {
    this.val = val === undefined ? 0 : val;
    this.parent = parent === undefined ? null : parent;
    this.nodeNumber = nodeNumber === undefined ? 0 : nodeNumber;
    this.children  = [];
  }
}

//  First Try - Iteration through edges and creating a tree with nodes that relates the parent node and child nodes,
// therefore being possible to iterate through tree recursively, but with a algorithm error on identifying the
// parent node on edges. (Wrong Answer - 7 / 31 testcases passed)
// function treeBuilder(edges: number[][], amount: number[]): UndirectedTreeNode[] {
//   const nodesByNumber: UndirectedTreeNode[] = [];

//   for(const edge of edges) {
//     let parentNode = nodesByNumber[edge[0]];
//     if(!parentNode) {
//       parentNode = new UndirectedTreeNode(amount[edge[0]], null, edge[0]);
//       nodesByNumber[edge[0]] = parentNode;
//     }

//     let childNode = nodesByNumber[edge[1]];
//     if(!childNode) {
//       childNode = new UndirectedTreeNode(amount[edge[1]], parentNode, edge[1]);
//       nodesByNumber[edge[1]] = childNode;
//     }

//     parentNode.children.push(childNode);
//   }

//   return nodesByNumber;
// }

// function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
//   const n = amount.length, nodesByNumber = treeBuilder(edges, amount);

//   let maxBalance: number = Number.NEGATIVE_INFINITY;
//   function dfs(aliceNode: UndirectedTreeNode, bobNode: UndirectedTreeNode, balance: number, visited: boolean[]): void {
//     if(aliceNode === bobNode) {
//       balance += aliceNode.val / 2;
//     } else if(!visited[aliceNode.nodeNumber])
//       balance += aliceNode.val;

//     visited[aliceNode.nodeNumber] = true;
//     visited[bobNode.nodeNumber] = true;

//     if(aliceNode.children.length === 0) {
//       maxBalance = Math.max(balance, maxBalance);
//       return;
//     }

//     for(const childNode of aliceNode.children) {
//       dfs(childNode, bobNode.parent !== null ? bobNode.parent : bobNode, balance, [...visited])
//     }
//   }

//   dfs(nodesByNumber[0], nodesByNumber[bob], 0, new Array(n).fill(false));

//   return maxBalance!;
// };

// First Approach - DFS method recursing over a adjacency list being a tree, calculating the distance of Bob to each node at tree.
// (https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/6462088/single-dfs-solution-with-explanation-199-227ms-75-100-111-14-117-5-25-50)
function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
  const n = amount.length;
  const adj: number[][] = Array.from({ length: n }, () => []);

  // Use n as the initial “infinite” distance.
  const bobDist: number[] = new Array(n).fill(n);

  // Build the undirected tree.
  for(const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  function dfs(node: number, parent: number, depth: number): number {
    // If this node is Bob's starting point, set its distance to 0.
    if(node === bob) {
      bobDist[node] = 0;
    }

    let bestChildProfit = -Infinity;
    let profitHere = 0;

    // Visit children.
    for(let child of adj[node]) {
      if(child === parent)
        continue;

      const childProfit = dfs(child, node, depth + 1);
      bestChildProfit = childProfit > bestChildProfit ? childProfit : bestChildProfit;
      // Update Bob's distance for the current node.
      bobDist[node] = Math.min(bobDist[node], bobDist[child] + 1);
    }

    if(depth < bobDist[node]) {
      profitHere += amount[node];
    } else if(depth === bobDist[node]) {
      profitHere += (amount[node] >> 1); // equivalent to Math.floor(amount[node]/2)
    }

    return bestChildProfit === -Infinity ? profitHere : profitHere + bestChildProfit;
  }

  return dfs(0, -1, 0);
}

const case1 = mostProfitablePath([[0,1],[1,2],[1,3],[3,4]], 3, [-2,4,2,-4,6]);
const case2 = mostProfitablePath([[0,1]], 1, [-7280,2350]);
const case3 = mostProfitablePath([[0,1],[1,2],[2,3]], 3, [-5644,-6018,1188,-8502]);

console.log(`case1: ${case1} // ${case1 === 6}`);
console.log(`case2: ${case2} // ${case2 === -7280}`);
console.log(`case3: ${case3} // ${case3 === -11662}`);
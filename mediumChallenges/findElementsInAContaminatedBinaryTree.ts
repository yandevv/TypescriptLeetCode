// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// First Approach - DFSing through contaminated binary tree carrying the actual calculated node num and storing every
// number in a Set, checking the numbers with Set after on find method. (5ms - Beats 100.00%)
class FindElements {
  existingNumbers: Set<number> = new Set();

  constructor(root: TreeNode | null) {
    this.dfs(root!);
  }

  dfs(node: TreeNode, nodeValue: number = 0): void {
    this.existingNumbers.add(nodeValue);

    if(node.left) {
      this.dfs(node.left, nodeValue * 2 + 1);
    }

    if(node.right) {
      this.dfs(node.right, nodeValue * 2 + 2);
    }
  }

  find(target: number): boolean {
    return this.existingNumbers.has(target);
  }
}
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

// First Approach - DFS Right-First, iterating the very rightest last nodes (bigger keys) and accumulating a sum over the recursion (56ms O(n))
function bstToGst(root: TreeNode | null): TreeNode | null {
    if(!root) return root;
    let actualSum: number = 0;
    function dfs(actualRoot: TreeNode) {
        if(actualRoot.right) dfs(actualRoot.right);
        actualSum += actualRoot.val;
        actualRoot.val = actualSum;
        if(actualRoot.left) dfs(actualRoot.left);
    }
    dfs(root);
    return root;
};
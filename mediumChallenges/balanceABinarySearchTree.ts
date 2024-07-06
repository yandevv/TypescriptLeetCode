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

// First Approach - Recursively iterates all nodes and, in crescent order, process every node and save its value on a array, subsequently to build the balanced tree catch the middle number of every nums array (https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5369849/inorder-greedy-balanced-bst-45ms-beats-100/?envType=daily-question&envId=2024-06-26)
function balanceBST(root: TreeNode | null): TreeNode | null {
    const numsVector: number[] = [];

    function inOrder(root: TreeNode | null): void {
        if(root === null) return;
        inOrder(root.left);
        numsVector.push(root.val);
        inOrder(root.right);
    }

    function balanceTree(l: number, r: number): TreeNode | null {
        if(l > r) return null;
        const m: number = Math.floor((l + r) / 2);
        const left: TreeNode | null = balanceTree(l, m - 1);
        const right: TreeNode | null = balanceTree(m + 1, r);
        return new TreeNode(numsVector[m], left, right);
    }

    inOrder(root);
    return balanceTree(0, numsVector.length - 1);
};
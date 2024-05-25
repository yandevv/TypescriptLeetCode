/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// DFS Approach
function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    if(root!.left) {
        if(removeLeafNodes(root!.left, target) === null) {
            root!.left = null;
        };
    }
    if(root!.right) {
        if(removeLeafNodes(root!.right, target) === null) {
            root!.right = null;
        };
    }
    if(!root!.left && !root!.right && root!.val === target) {
        return null;
    }
    return root;
};
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

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if(root) {
        if(depth > 2) {
            if(root.left) {
                addOneRow(root.left, val, depth - 1);
            }
            if(root.right) {
                addOneRow(root.right, val, depth - 1);
            }
        } else if(depth === 1) {
            const prevRoot: TreeNode = root;
            root = new TreeNode(val, prevRoot);
        } else {
            const prevLeft: TreeNode | null = root?.left;
            const prevRight: TreeNode | null = root?.right;
            root.left = new TreeNode(val, prevLeft);
            root.right = new TreeNode(val, null, prevRight);
        }
    }
    return root;
};
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

// First Approach - DFS approach transversing every node and whenever the hashmap returns true it deletes from it's parentNode and insert into result the children's trees.
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const toDeleteMap: Map<number, boolean> = new Map();
    to_delete.forEach((num) => toDeleteMap.set(num, true));
    const forestNodes: TreeNode[] = [];
    function dfs(node: TreeNode, parentNode?: TreeNode) {
        if(node.left) dfs(node.left, node);
        if(node.right) dfs(node.right, node);
        if(toDeleteMap.get(node.val)) {
            if(node.left) forestNodes.push(node.left);
            if(node.right) forestNodes.push(node.right);
            if(parentNode) {
                if(parentNode.left && parentNode.left.val === node.val) {
                    parentNode.left = null;
                } else {
                    parentNode.right = null;
                }
            }
        } else if(!parentNode) {
            forestNodes.push(node);
        }
    }
    dfs(root!);
    return forestNodes;
};
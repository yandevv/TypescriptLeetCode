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

// First Approach - Distance between calculated by LCA distance of two nodes
function countPairs(root: TreeNode | null, distance: number): number {
    const leavesNodes: TreeNode[][] = [];
    function findLeavesDFS(node: TreeNode, path: TreeNode[] = []) {
        path.push(node);
        if(node.left) findLeavesDFS(node.left, [...path]);
        if(node.right) findLeavesDFS(node.right, [...path]);
        if(!node.left && !node.right) leavesNodes.push(path);
    }
    findLeavesDFS(root!);
    let ans: number = 0;
    for(let i: number = 0; i < leavesNodes.length; i++) {
        for(let j: number = i + 1; j < leavesNodes.length; j++) {
            let k: number = 0;
            const leaf1 = leavesNodes[i];
            const leaf2 = leavesNodes[j];
            while(k < leaf1.length && k < leaf2.length && leaf1[k + 1] === leaf2[k + 1]) k++;
            const distanceBetween = leaf1.length + leaf2.length - 2 * k - 2;
            if(distanceBetween <= distance) {
                ans++;
            }
        }
    }
    return ans;
};
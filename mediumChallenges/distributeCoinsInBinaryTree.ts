// First Try - DFS through the root left and right subtrees and sum the moves
// function distributeCoins(root: TreeNode | null): number {
//     if(root === null) return 0;
//     function dfs(node: TreeNode, lastNode?: TreeNode): number {
//         let moves: number = 0;
//         if(node.left !== null) {
//             moves += dfs(node.left, node);
//         }
//         if(node.right !== null) {
//             moves += dfs(node.right, node);
//         }
//         if(node.val === 0) return moves + 1;
//         if(node.val > 1) {
//             if(lastNode) lastNode.val += node.val - 1;
//             return moves + Math.abs(node.val - 1);
//         };
//         return moves;
//     }
//     let totalMoves: number = 0;
//     if(root.left) {
//         totalMoves += dfs(root.left);
//     }
//     if(root.right) {
//         totalMoves += dfs(root.right);
//     }
//     return totalMoves;
// };

// First Approach - Post-order DFS to distribute coins through nodes (https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172544/move-coins-to-parent-dfs-0ms-beats-100/)
function distributeCoins(root: TreeNode | null): number {
    function dfs(root: TreeNode | null, parent: TreeNode | null): number {
        if(root === null) return 0;
        let moves = dfs(root.left, root) + dfs(root.right, root);
        const newParentValue = root.val - 1;
        if(parent !== null) parent.val += newParentValue;
        moves += Math.abs(newParentValue);
        return moves;
    }
    return dfs(root, null)
};
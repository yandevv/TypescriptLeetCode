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

// First Approach - DFS method iterating through both trees at the same time, comparing if it's getting at tree's bottom simultaneously when their node are flipped or not. (https://leetcode.com/problems/flip-equivalent-binary-trees/solutions/5959889/easy-peasy-dfs-0ms-runtime-beats-100-in-typescript-java-c-php-go-python/?envType=daily-question&envId=2024-10-24)
function flipEquiv(node1: TreeNode | null, node2: TreeNode | null): boolean {
	if (!node1 && !node2) {
		return true;
	}	else if(node1 && node2) {
		if(node1.val === node2.val) {
			if(flipEquiv(node1.left, node2.left) === true && flipEquiv(node1.right, node2.right) === true) {
				return true;
			}
			else if(flipEquiv(node1.left, node2.right) === true && flipEquiv(node1.right, node2.left) === true)
				return true;
		}
	}
	return false;
};
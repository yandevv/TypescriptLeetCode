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

// First Approach - O(n) approach DFSing two times the same tree, the first one summing up nodes to sum array by their depth index and another DFSing replacing the values of nodes. (https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5959305/fast-dfs-solution-9ms-beats-100-typescript/?envType=daily-question&envId=2024-10-23)
function replaceValueInTree(root: TreeNode | null): TreeNode | null {
	const sums: number[] = [];

	sumDFS(root, 0, sums);
	replaceDFS(root, 0, sums);

	root!.val = 0;

	return root;
}

function sumDFS(root: TreeNode | null, depth: number, sums: number[]): void {
	if(!root)
		return;

	sums[depth] = (sums[depth] || 0) + root.val;

	sumDFS(root.left, depth + 1, sums);
	sumDFS(root.right, depth + 1, sums);
}

function replaceDFS(root: TreeNode | null, depth: number, sums: number[]): void {
	if(!root)
		return;

	let siblingSum = 0;

	if(root.left)
		siblingSum += root.left.val;
	if(root.right)
		siblingSum += root.right.val;

	if(root.left)
		root.left.val = sums[depth + 1] - siblingSum;
	if(root.right)
		root.right.val = sums[depth + 1] - siblingSum;

	replaceDFS(root.left, depth + 1, sums);
	replaceDFS(root.right, depth + 1, sums);
}

const case1Tree = new TreeNode(
	5,
	new TreeNode(
		4,
		new TreeNode(1),
		new TreeNode(10)
	),
	new TreeNode(
		9,
		null,
		new TreeNode(7)
	)
);
const case1 = replaceValueInTree(case1Tree);

const case2Tree = new TreeNode(
	5,
	new TreeNode(
		4,
		new TreeNode(1),
		new TreeNode(10)
	),
	new TreeNode(
		9,
		null,
		new TreeNode(7)
	)
);
const case2 = replaceValueInTree(case2Tree);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
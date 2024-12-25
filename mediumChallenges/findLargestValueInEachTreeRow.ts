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

// First Approach - BFS method iterating through nodes by level and tracking the biggest number for each level,
// pushing it to a outer array and returning it on the end. (1ms - Beats 90.16%)
function largestValues(root: TreeNode | null): number[] {
	if(!root) {
		return [];
	}

	const nodeStack: TreeNode[] = [root!], biggestValues: number[] = [];

	while(nodeStack.length) {
		let biggestNumber = Number.NEGATIVE_INFINITY;

		const n = nodeStack.length;
		for(let i = 0; i < n; i++) {
			let node = nodeStack.shift()!;

			biggestNumber = Math.max(biggestNumber, node.val);

			if(node.left)
				nodeStack.push(node.left);

			if(node.right)
				nodeStack.push(node.right);
		}

		biggestValues.push(biggestNumber);
	}

	return biggestValues;
};

const case1Root = new TreeNode(
	1,
	new TreeNode(
		3,
		new TreeNode(5),
		new TreeNode(3),
	),
	new TreeNode(
		2,
		null,
		new TreeNode(9)
	)
);
const case1 = largestValues(case1Root);

const case2Root = new TreeNode(
	1,
	new TreeNode(2),
	new TreeNode(3)
);
const case2 = largestValues(case2Root);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
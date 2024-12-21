// Definition for a binary tree node.
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

// First Approach - Iterative algorithm based on iterating through levels and, if level count (0-indexed) divided by 2 remains 1, it reverse all the values. (49ms - Beats 17.24%)
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
	let level = 0, nodeStack: TreeNode[] = [root!];

	while(nodeStack.length) {
		let nodeStackLength = nodeStack.length, levelNodes: TreeNode[] = [];
		for(let i = 0; i < nodeStackLength; i++) {
			let node = nodeStack.shift()!;

			levelNodes.push(node);

			if(node.left) {
				nodeStack.push(node.left);
			}

			if(node.right) {
				nodeStack.push(node.right);
			}
		}


		if(level % 2 === 1 && level !== 0) {
			let i = 0, j = levelNodes.length - 1;
			while(i < j) {
				let aux = levelNodes[i].val;

				levelNodes[i].val = levelNodes[j].val;
				levelNodes[j].val = aux;

				i++; j--;
			}
		}

		level++;
	}

	return root;
};

const case1Tree = new TreeNode(
	2, 
	new TreeNode(
		3,
		new TreeNode(8),
		new TreeNode(13)
	),
	new TreeNode(
		5,
		new TreeNode(21),
		new TreeNode(34)
	)
);
const case1 = reverseOddLevels(case1Tree);

console.log('============');

const case2Tree = new TreeNode(
	7,
	new TreeNode(13),
	new TreeNode(11)
);
const case2 = reverseOddLevels(case2Tree);

console.log('============');

const case3Tree = new TreeNode(
	0,
	new TreeNode(
		1,
		new TreeNode(
			0,
			new TreeNode(1),
			new TreeNode(1)
		),
		new TreeNode(
			0,
			new TreeNode(1),
			new TreeNode(1)
		)
	),
	new TreeNode(
		2,
		new TreeNode(
			0,
			new TreeNode(2),
			new TreeNode(2)
		),
		new TreeNode(
			0,
			new TreeNode(2),
			new TreeNode(2)
		)
	)
);
const case3 = reverseOddLevels(case3Tree);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
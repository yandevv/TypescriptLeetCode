// Definition for a binary tree node.
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.left = (left === undefined ? null : left);
		this.right = (right === undefined ? null : right);
	}
}

// First Approach - BFS method iterating over nodes per level and storing the values of them, sorting these values in another array and comparing
// the position with the original one, swapping them with a HashMap made earlier. (835ms - Beats 75.00%)
function minimumOperations(root: TreeNode | null): number {
	const nodeStack: TreeNode[] = [root!];
	let swapCount = 0;

	while(nodeStack.length) {
		let stackLength = nodeStack.length, nums: number[] = [];
		for(let i = 0; i < stackLength; i++) {
			let node = nodeStack.shift()!;

			if(node.left)
				nodeStack.push(node.left);

			if(node.right)
				nodeStack.push(node.right);

			nums.push(node.val);
		}

		let sortedNums = [...nums].sort((a, b) => a - b);

		let numsIndexes: Map<number, number> = new Map();
		nums.forEach((number, index) => numsIndexes.set(number, index));

		nums.forEach((num, index) => {
			if(num !== sortedNums[index]) {
				let sortedNumIndex = numsIndexes.get(sortedNums[index])!;

				nums[sortedNumIndex] = num;
				nums[index] = sortedNums[index];

				numsIndexes.set(num, sortedNumIndex);
				numsIndexes.set(sortedNums[index], index);

				swapCount++;
			}
		})
	}

	return swapCount;
};

const case1Root = new TreeNode(
	1,
	new TreeNode(
		4,
		new TreeNode(7),
		new TreeNode(6)
	),
	new TreeNode(
		3,
		new TreeNode(
			8,
			new TreeNode(9),
			null
		),
		new TreeNode(
			5,
			new TreeNode(10),
			null
		)
	)
);
const case1 = minimumOperations(case1Root);

const case2Root = new TreeNode(
	1,
	new TreeNode(
		3,
		new TreeNode(7),
		new TreeNode(6)
	),
	new TreeNode(
		2,
		new TreeNode(5),
		new TreeNode(4)
	)
);
const case2 = minimumOperations(case2Root);

const case3Root = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(4),
		new TreeNode(5)
	),
	new TreeNode(
		3,
		new TreeNode(6),
		null
	)
);
const case3 = minimumOperations(case3Root);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
console.log(`case3: ${case3}`);
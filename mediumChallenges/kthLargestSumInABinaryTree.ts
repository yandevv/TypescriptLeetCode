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

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// First Approach - DFS method tracked by depth param and increasing the node value at levelSums with depth index, putting it after in a min heap (min priority queue) and dequeueing k - 1 times, returning front at the end. (72ms - Beats 100%)
function dfs(node: TreeNode | null, depth: number, levelSums: number[]) {
	if(!node) {
		return levelSums;
	}

	levelSums[depth] = (levelSums[depth] ?? 0) + node.val;

	if(node.left) {
		dfs(node.left, depth + 1, levelSums);
	}

	if(node.right) {
		dfs(node.right, depth + 1, levelSums);
	}

	return levelSums;
}

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
	const levelSums = dfs(root, 0, []);

	const maxPQ = new MaxPriorityQueue();

	levelSums.forEach(levelSum => maxPQ.enqueue(levelSum));

	if(k > maxPQ.size())
		return -1;

	for(k; k > 1; k--) {
		maxPQ.dequeue();
	}

	return maxPQ.front().element;
};

// Second Approach - BFS method tracking pushing back into node queues with their depth, summing up the actual level sum and queueing it into min heap whenever the next node is different than the actual, calculating the kth biggest like the last approach. (Bugged when measured)
function kthLargestLevelSum(root: TreeNode | null, k: number): number {
	const maxPQ = new MaxPriorityQueue();

	function bfs(nodeQueue: [TreeNode, number][], levelSum: number) {
		const node = nodeQueue.shift()!;
	
		if(node[0].left)
			nodeQueue.push([node[0].left, node[1] + 1]);
	
		if(node[0].right)
			nodeQueue.push([node[0].right, node[1] + 1]);
	
		if(nodeQueue[0]) {
			if(nodeQueue[0][1] === node[1]) {
				return bfs(nodeQueue, levelSum + node[0].val);
			} else {
				maxPQ.enqueue(levelSum + node[0].val);
				return bfs(nodeQueue, 0)
			}
		} else {
			maxPQ.enqueue(levelSum + node[0].val);
			return;
		}
	}

	bfs([[root!, 0]], 0);

	if(k > maxPQ.size())
		return -1;

	for(k; k > 1; k--) {
		maxPQ.dequeue();
	}

	return maxPQ.front().element;
};

const case1Tree = new TreeNode(
	5,
	new TreeNode(
		8,
		new TreeNode(
			2,
			new TreeNode(4),
			new TreeNode(6)
		),
		new TreeNode(1)
	),
	new TreeNode(
		9,
		new TreeNode(3),
		new TreeNode(7)
	)
);
const case1 = kthLargestLevelSum(case1Tree, 2);

const case2Tree = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(3)
	)
);
const case2 = kthLargestLevelSum(case2Tree, 1);

console.log(`case1: ${case1} // ${case1 === 13}`);
console.log(`case2: ${case2} // ${case2 === 3}`);
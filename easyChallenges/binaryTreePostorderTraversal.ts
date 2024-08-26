// First Approach - DFSing node and pushing back to ans array node values. (54ms - Beats 70.48%)
function postorderTraversal(root: TreeNode | null): number[] {
	const ans: number[] = [];

	function dfs(root: TreeNode): void {
		if(!root)
			return;

		dfs(root.left);
		dfs(root.right);

		ans.push(root.val);
	}

	dfs(root);

	return ans;
};
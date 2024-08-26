class _Node {
	val: number
	children: _Node[]
	constructor(val?: number, children?: _Node[]) {
			this.val = (val === undefined ? 0 : val)
			this.children = (children === undefined ? [] : children);
	}
}

// First Approach - DFSing through root's children and pushing back to ans node values. (69ms - Beats 89.71%)
function postorder(root: _Node | null): number[] {
	if(!root)
		return [];

	let ans: number[] = [];

	function dfs(root: _Node) {
		if(!root)
			return;
		for(let child of root.children) {
			dfs(child);
		}
		ans.push(root.val);
	}

	dfs(root);

	return ans;
};
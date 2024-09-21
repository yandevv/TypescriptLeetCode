// First Approach - DFS approach iterating over each number and their subsequent number classes, and when reach a number over n it returns. (https://leetcode.com/problems/lexicographical-numbers/solutions/5813848/recursive-dfs-vs-iteration-beats-100/?envType=daily-question&envId=2024-09-21)
function lexicalOrder(n: number): number[] {
	const ans: number[] = [];

	function dfs(i: number) {
		if(i > n) return;

		if(i > 0) ans.push(i);

		for(let j = i === 0 ? 1 : 0; j <= 9; j++) {
			let x = 10 * i + j;
			if(x > n) break;
			dfs(x);
		}
	}

	dfs(0);

	return ans;
};

// Second Approach - Iterative approach that has the same algorithm of first approach. (https://leetcode.com/problems/lexicographical-numbers/solutions/5813848/recursive-dfs-vs-iteration-beats-100/?envType=daily-question&envId=2024-09-21)
function lexicalOrder(n: number): number[] {
	const ans: number[] = [];

	let x = 1;

	 for(let i = 0; i < n; i++) {
		ans[i] = x;

		if(x * 10 > n) {
			if(x === n) x = Math.floor(x / 10);
			x++;
			while(x % 10 === 0) x = Math.floor(x / 10);
		} else x *= 10;
	 }

	return ans;
};
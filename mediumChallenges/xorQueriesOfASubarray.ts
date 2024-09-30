// First Approach - Iterating over queries and calculating the xor value iterating over the subarray of query. (1317ms - Beats 7.14%)
function xorQueries(arr: number[], queries: number[][]): number[] {
	const ans: number[] = [];

	queries.forEach(query => {
		let xorValue = arr[query[0]];
		for(let i = query[0] + 1; i <= query[1]; i++) {
			xorValue ^= arr[i];
		}
		ans.push(xorValue);
	})

	return ans;
};

// Second Approach - Prefix sum approach, precalculating the xor values through array. (98ms - Beats 57.14%)
function xorQueries(arr: number[], queries: number[][]): number[] {
	const n = arr.length;
	const prefix = new Array(n);
	prefix[0] = arr[0];

	for(let i = 1; i < n; i++) {
		prefix[i] = prefix[i - 1] ^ arr[i];
	}

	const res: number[] = [];
	for(const [left, right] of queries) {
		if(left === 0) {
			res.push(prefix[right]);
		} else {
			res.push(prefix[right] ^ prefix[left - 1]);
		}
	}

	return res;
};

const case1 = xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]]);
const case2 = xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]]);

console.log(`case1: ${case1}`);
console.log(`case2: ${case2}`);
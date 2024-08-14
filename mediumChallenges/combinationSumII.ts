// First Try - Recursive approach by two steps, one getting the actual index number and other skipping it. (Wrong Answer - 67 / 176 testcases passed)
// function dfs(paths: number[][], index: number, path: number[], sum: number, candidates: number[], target: number) {
// 	if(candidates[index] > target || candidates.length <= index)
// 		return;

// 	dfs(paths, index + 1, [...path], sum, candidates, target);

// 	path.push(candidates[index]);
// 	sum += candidates[index];

// 	if(sum > target)
// 		return;

// 	if(sum === target) {
// 		paths.push(path);
// 		return;
// 	}

// 	dfs(paths, index + 1, [...path], sum, candidates, target);
// }

// function combinationSum2(candidates: number[], target: number): number[][] {
// 	candidates.sort((a, b) => a - b);
// 	console.log("🚀 ~ combinationSum2 ~ candidates:", candidates)

// 	const ans: number[][] = [];

// 	dfs(ans, 0, [], 0, candidates, target);

// 	return ans;
// };

// First Approach - Backtracking and getting the combination by subtracting the actual index number by the target. (https://leetcode.com/problems/combination-sum-ii/solutions/5628773/beats-100-explained-with-video-c-java-python-backtracking-explained-in-detail/)
function combinationSum2(candidates: number[], target: number): number[][] {
	candidates.sort((a, b) => a - b);

	let results: number[][] = [];
	function backtrack(start: number, target: number, currentCombination: number[]) {
			if (target === 0) {
					results.push([...currentCombination]);
					return;
			}
			
			for (let i = start; i < candidates.length; i++) {
					if (i > start && candidates[i] === candidates[i - 1]) continue;

					if (candidates[i] > target) break;

					currentCombination.push(candidates[i]);
					
					backtrack(i + 1, target - candidates[i], currentCombination);
					
					currentCombination.pop();
			}
	}

	backtrack(0, target, []);
	
	return results;
};
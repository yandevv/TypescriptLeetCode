// First Approach - Calculating and saving the maximum points from each column in a row, using the values from the previous row, and after all the max value from the last dp will be the answer. (https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5652427/typescript-approach/?envType=daily-question&envId=2024-08-17)
function maxPoints(points: number[][]): number {
	const m = points.length
	const n = points[0].length

	let dp = [...points[0]]

	for (let r = 1; r < m; r++) {
			const left_dp = new Array(n).fill(0)
			const right_dp = new Array(n).fill(0)

			left_dp[0] = dp[0]
			for (let c = 1; c < n; c++) {
					left_dp[c] = Math.max(left_dp[c - 1] - 1, dp[c])
			}

			right_dp[n - 1] = dp[n - 1]
			for (let c = n - 2; c >= 0; c--) {
					right_dp[c] = Math.max(right_dp[c + 1] - 1, dp[c])
			}

			for (let c = 0; c < n; c++) {
					dp[c] = points[r][c] + Math.max(left_dp[c], right_dp[c])
			}
	}

	return Math.max(...dp)
}
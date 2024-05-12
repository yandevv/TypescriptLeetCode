function largestLocal(grid: number[][]): number[][] {
    let ans: number[][] = [];
    const n: number = grid.length - 2;
    for(let i = 0; i < n; i++) {
        ans.push([]);
        for(let j = 0; j < n; j++) {
            ans[i][j] = 0;
            for(let k = i; k <= i+2; k++) {
                for(let l = j; l <= j+2; l++) {
                    ans[i][j] = Math.max(ans[i][j], grid[k][l]);
                }
            }
        }
    }
    return ans;
};
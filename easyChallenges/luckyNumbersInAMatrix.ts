// First Approach - All rows iteration getting all lowest numbers in a set and a second iterating on columns to get the highest number, checking with created set.
function luckyNumbers (matrix: number[][]): number[] {
    let m = matrix[0].length;
    let n = matrix.length;
    const lowestValueRow: Set<number> = new Set();
    for(let i = 0; i < n; i++) {
        let minValue = matrix[i][0];
        for(let j = 1; j < m; j++) minValue = Math.min(minValue, matrix[i][j]);
        lowestValueRow.add(minValue);
    }
    let ans: number[] = [];
    for(let i = 0; i < m; i++) {
        let maxValue = matrix[0][i];
        for(let j = 1; j < n; j++) maxValue = Math.max(maxValue, matrix[j][i]);
        if(lowestValueRow.has(maxValue)) ans.push(maxValue);
    }
    return ans;
};
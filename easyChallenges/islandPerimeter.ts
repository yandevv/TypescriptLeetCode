function islandPerimeter(grid: number[][]): number {
    let perimeter: number = 0;
    let rowMaxIndex: number = grid.length - 1;
    let columnMaxIndex: number = grid[0].length - 1;
    for(let i = 0; i <= rowMaxIndex; i++) {
        for(let j = 0; j <= columnMaxIndex; j++) {
            if(grid[i][j]) {
                const leftAddition: 0|1 = !grid[i][j - 1] ? 1 : 0;
                const topAddition: 0|1 = grid[i - 1] ? !grid[i - 1][j] ? 1 : 0 : 1;
                const rightAddition: 0|1 = !grid[i][j + 1] ? 1 : 0;
                const bottomAddition: 0|1 = grid[i + 1] ? !grid[i + 1][j] ? 1 : 0 : 1;
                perimeter += leftAddition + topAddition + rightAddition + bottomAddition;
            }
        }
    }
    return perimeter;
};
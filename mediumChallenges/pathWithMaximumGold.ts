function getMaximumGold(grid: number[][]): number {
    let maximumGold: number = 0;
    function pathIterator(mockGrid: number[][], row: number, column: number, actualGold: number) {
        const goldValue: number = mockGrid[row][column];
        if(goldValue === 0 || goldValue === undefined) return;
        maximumGold = Math.max(maximumGold, actualGold + goldValue);
        const newMock: number[][] = mockGrid.map((array) => array = [...array]);
        newMock[row][column] = 0;
        //Left Call
        pathIterator(newMock, row, column - 1, actualGold + goldValue);
        //Up Call
        if(newMock[row - 1] !== undefined) {
            pathIterator(newMock, row - 1, column, actualGold + goldValue);
        }
        //Right Call
        pathIterator(newMock, row, column + 1, actualGold + goldValue);
        //Down Call
        if(newMock[row + 1] !== undefined) {
            return pathIterator(newMock, row + 1, column, actualGold + goldValue);
        }
    }
    for(let i: number = 0; i < grid.length; i++) {
        for(let j: number = 0; j < grid[i].length; j++) {
            if(grid[i][j] !== 0) {
                pathIterator(grid, i, j, 0);
            }
        }
    }
    return maximumGold;
};
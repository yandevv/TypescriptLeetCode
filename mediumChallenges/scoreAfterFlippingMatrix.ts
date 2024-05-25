function matrixScore(grid: number[][]): number {
    for(let i in grid) {
        const act: number = parseInt(grid[i].join(''), 2);
        const flippedGrid: number[] = grid[i].map((value) => value === 0 ? 1 : 0)
        const flipped: number = parseInt(flippedGrid.join(''), 2);
        if(flipped > act) {
            grid[i] = flippedGrid;
        }
    }
    for(let i in grid[0]) {
        let mockGrid: number[][] = [];
        grid.forEach((array) => mockGrid.push([...array]));
        for(let j in grid) {
            mockGrid[j][i] = grid[j][i] === 0 ? 1 : 0;
        }
        const mockedSum: number = mockGrid.reduce((prev, curr) => prev + parseInt(curr.join(''), 2) , 0);
        const gridSum: number = grid.reduce((prev, curr) => prev + parseInt(curr.join(''), 2), 0);
        if(mockedSum > gridSum) {
            grid = [...mockGrid];
        }
    }
    let ans: number = 0;
    grid.forEach((val) => ans += parseInt(val.join(''), 2));
    return ans;
};
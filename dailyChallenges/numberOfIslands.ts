function numIslands(grid: string[][]): number {
    let islandsNumber = 0;

    function bfs(callStack: string[][]) {
        if(!callStack.length) {
            return;
        }

        const actualGrid = callStack.shift();

        const row = parseInt(actualGrid![0]);
        const column = parseInt(actualGrid![1]);

        // Checking left actual gridPoint
        if(grid[row][column - 1] === "1") {
            grid[row][column - 1] = "-1";
            callStack.push([`${row}`, `${column - 1}`]);
        }
        // Checking top actual gridPoint
        if(grid[row - 1]) {
            if(grid[row - 1][column] === "1") {
                grid[row - 1][column] = "-1";
                callStack.push([`${row - 1}`, `${column}`]);

            }
        }
        // Checking right actual gridPoint
        if(grid[row][column + 1] === "1") {
            grid[row][column + 1] = "-1";
            callStack.push([`${row}`, `${column + 1}`]);
        }
        // Checking bottom actual gridPoint
        if(grid[row + 1]) {
            if(grid[row + 1][column] === "1") {
                grid[row + 1][column] = "-1";
                callStack.push([`${row + 1}`, `${column}`])

            }
        }

        return bfs(callStack);
    }

    for(let i in grid) {
        for(let j in  grid[i]) {
            if(grid[i][j] === "1") {
                islandsNumber++;
                grid[i][j] = "-1";

                bfs([[i, j]]);
            }
        }
    }

    return islandsNumber;
};
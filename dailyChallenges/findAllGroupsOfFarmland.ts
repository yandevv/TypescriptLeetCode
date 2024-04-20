function findFarmland(land: number[][]): number[][] {
    const areaGroups: number[][] = [];

    function farmlandGroupDfs(rightBottomCorner: number[], callStack: number[][]): number[] {
        if(!callStack.length) return rightBottomCorner;
        
        const actualCallStack = callStack.pop();
        const row = actualCallStack![0];
        const column = actualCallStack![1];

        // Checks if right 
        if(land[row][column + 1] === 1) {
            land[row][column + 1] = -1;
            callStack.push([row, column + 1]);
        }
        if(land[row + 1]) {
            if(land[row + 1][column] === 1) {
                land[row + 1][column] = -1;
                callStack.unshift([row + 1, column]);
            }
        }

        rightBottomCorner = [row, column];
        return farmlandGroupDfs(rightBottomCorner, callStack);
    }

    for(let i: number = 0; i < land.length; i++) {
        for(let j: number = 0; j < land[i].length; j++) {
            if(land[i][j] === 1) {
                land[i][j] = -1;
                const rightBottomCorner = farmlandGroupDfs([], [[i, j]]);
                areaGroups.push([i, j, rightBottomCorner[0], rightBottomCorner[1]]);
            }
        }
    }

    return areaGroups;
};
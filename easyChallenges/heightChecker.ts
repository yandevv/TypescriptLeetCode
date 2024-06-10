// First Approach - Sorting and comparing sorted array with original array, counting the differences
function heightChecker(heights: number[]): number {
    const originalHeights = [...heights];
    heights.sort((a, b) => a - b);
    let unexpectedCount: number = 0;
    for(let i: number = 0; i < heights.length; i++) {
        if(originalHeights[i] !== heights[i]) unexpectedCount++;
    }
    return unexpectedCount;
};
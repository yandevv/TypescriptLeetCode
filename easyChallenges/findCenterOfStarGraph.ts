// First Approach - Comparing second edge array with first one, discovering what's the repeated number
function findCenter(edges: number[][]): number {
    if(edges[1].includes(edges[0][0])) return edges[0][0];
    if(edges[1].includes(edges[0][1])) return edges[0][1];
    return -1;
};
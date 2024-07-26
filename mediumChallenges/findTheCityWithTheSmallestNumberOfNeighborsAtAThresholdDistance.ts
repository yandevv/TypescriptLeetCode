// First Approach - Floyd Warshall solution calculating min distance to every node from every node, making it easy to double loop through nodes (https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/solutions/5540224/floyd-warshall-algorithm-time-o-n-3-space-o-n-2/?envType=daily-question&envId=2024-07-26)
function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    const distanceMatrix: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        distanceMatrix[i] = new Array(n).fill(distanceThreshold + 1);
        distanceMatrix[i][i] = 0;
    }
    for (const [from, to, weight] of edges) {
        distanceMatrix[from][to] = weight;
        distanceMatrix[to][from] = weight;
    }
    for (let mid = 0; mid < n; ++mid) {
        for (let from = 0; from < n; ++from) {

            if (mid == from || distanceMatrix[from][mid] > distanceThreshold) {
                continue;
            }
            for (let to = 0; to < n; ++to) {
                distanceMatrix[from][to] = Math.min(
                    distanceMatrix[from][to],
                    distanceMatrix[from][mid] + distanceMatrix[mid][to]
                );
            }
        }
    }
    let city = -1;
    let minReachable = n;
    for (let from = 0; from < n; ++from) {
        let reachable = 0;
        for (let to = 0; to < n; ++to) {
            reachable += +(distanceMatrix[from][to] <= distanceThreshold);
        }
        if (reachable <= minReachable) {
            minReachable = reachable;
            city = from;
        }
    }
    return city;
}
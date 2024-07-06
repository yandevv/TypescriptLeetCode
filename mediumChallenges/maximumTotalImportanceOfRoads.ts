// First Approach - Mapping all cities and their number of roads, transforming the map in a array and proceeding to sort the array by the number of roads to get their importance level
function maximumImportance(n: number, roads: number[][]): number {
    const routesCount: Map<number, number> = new Map();
    roads.forEach((road) => {
        routesCount.set(road[0], (routesCount.get(road[0]) ?? 0) + 1);
        routesCount.set(road[1], (routesCount.get(road[1]) ?? 0) + 1);
    })
    const routesArray: [number, number][] = Array.from(routesCount.entries());
    routesArray.sort((routeA, routeB) => routeB[1] - routeA[1]);
    const citiesValues: number[] = [];
    routesArray.forEach((route) => {
        citiesValues[route[0]] = n;
        n--;
    });
    let maxTotal: number = 0;
    roads.forEach((road) => {
        maxTotal += citiesValues[road[0]] + citiesValues[road[1]];
    })
    return maxTotal;
};
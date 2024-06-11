// First Approach - Mapping arr2 nums with their indices and bubble sorting with Javascript Built-in sort method (comparing with their indices of orderMap)
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const orderMap: Map<number, number> = new Map();
    arr2.forEach((num, index) => orderMap.set(num, index));
    arr1.sort((a, b) => (orderMap.get(a) ?? a + orderMap.size + 1) - (orderMap.get(b) ?? b + orderMap.size + 1));
    return arr1;
};
function trap(height: number[]): number {
    let trappedWater: number = 0;
    let maxRight: number[] = [];

    let auxMaximum: number = 0;
    for(let leftPointer = 0; leftPointer < height.length; leftPointer++) {
        if(!auxMaximum || height[leftPointer] === auxMaximum) {
            auxMaximum = 0;
            for(let rightPointer = leftPointer + 1; rightPointer < height.length; rightPointer++) {
                auxMaximum = Math.max(auxMaximum, height[rightPointer]);
            }
        }
        maxRight.push(auxMaximum);
    }

    auxMaximum = 0;
    for(let leftPointer = height.length - 1; leftPointer >= 0; leftPointer--) {
        if(!auxMaximum || height[leftPointer] === auxMaximum) {
            auxMaximum = 0;
            for(let rightPointer = leftPointer - 1; rightPointer >= 0; rightPointer--) {
                auxMaximum = Math.max(auxMaximum, height[rightPointer]);
            }
        }
        
        let minDifference = Math.min(maxRight[leftPointer], auxMaximum) - height[leftPointer];
        trappedWater += minDifference > 0 ? minDifference : 0;
    }

    return trappedWater;
};
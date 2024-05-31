// First Approach - Math approach with total subarray xor calc, and if it's equal 0 it's a valid subarray to split into two
function countTriplets(arr: number[]): number {
    let count: number = 0;
    for(let i: number = 0; i < arr.length; i++) {
        let xorSum: number = arr[i];
        for(let j: number = i + 1; j < arr.length; j++) {
            xorSum ^= arr[j];
            if(xorSum === 0) {
                count += (j - i);
            }
        }
    }
    return count;
};
// First Approach - O(n) approach iterating by time, increasing and decreasing by its direction
function passThePillow(n: number, time: number): number {
    let direction: number = 0 // 0: Forward - 1: Backwards 
    let num: number = 1;
    for(time; time > 0; time--) {
        if(direction === 0) {
            num++;
        } else {
            num--;
        }
        if(num === n) direction = 1;
        if(num === 1) direction = 0;
    }
    return num;
};

// Second Approach - Math O(n) solution with Euclidean division abstraction
function passThePillow(n: number, time: number): number {
    let chunks: number = Math.floor(time / (n - 1));
    return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
};
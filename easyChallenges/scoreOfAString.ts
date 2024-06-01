// First Approach - O(n) for loop, iterating every char and subtracting with your next, summing up the absolute value and return at end
function scoreOfString(s: string): number {
    let sum: number = 0;
    for(let i: number = 0; i < s.length; i++) {
        if(i < s.length - 1) sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return sum;
};
// First Try (14041 / 21040 testcases passed)
// function isPowerOfThree(n: number): boolean {
//     if(n === 0) return false;
//     return parseInt(`${n * (1/3)}`) === n * (1/3);
// };

function isPowerOfThree(n: number): boolean {
    let powerNumber = 1;
    while(powerNumber <= n) {
        if(powerNumber === n) return true;
        powerNumber *= 3;
    }
    return false;
};
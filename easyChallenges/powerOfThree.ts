// First Try (14041 / 21040 testcases passed)
// function isPowerOfThree(n: number): boolean {
//     if(n === 0) return false;
//     return parseInt(`${n * (1/3)}`) === n * (1/3);
// };

// First try with while and multiplying 3 until match n
// function isPowerOfThree(n: number): boolean {
//     let powerNumber = 1;
//     while(powerNumber <= n) {
//         if(powerNumber === n) return true;
//         powerNumber *= 3;
//     }
//     return false;
// };

// Second try with recursion
function isPowerOfThree(n: number): boolean {
    if(n === 1) return true;
    if(n % 3 !== 0 || n < 1) return false;
    n = n / 3;
    return isPowerOfThree(n);
};
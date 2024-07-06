// First Try - Brute forcing O(2n) iterating through [0, n] and checking exponentiations (25 / 127 testcases passed - TLE on 'c = 1000000000')
function judgeSquareSum(c: number): boolean {
    for(let i: number = 0; i <= c; i++) {
        for(let j: number = 0; j <= c; j++) {
            if((i ** 2 + j ** 2) === c) return true;
        }
    }
    return false;
};

// Second Try - Brute forcing O(n) iterating through [0, n] and checking mathematically if it's possible (98 / 127 testcases passed - TLE on 'c = 2147482647')
function judgeSquareSum(c: number): boolean {
    for(let i: number = 0; i <= c; i++) if(Number.isInteger(Math.sqrt(c - i ** 2))) return true;
    return false;
};

// First Approach - Fermat Theorem application, iterating between 2 and sqrt(c) and checking prime numbers divisors
function judgeSquareSum(c: number): boolean {
    for(let i: number = 2; i ** 2 <= c; i++) {
        if(c % i === 0) {
            let exponentCount: number = 0;
            while(c % i === 0) {
                exponentCount++;
                c /= i;
            }
            if(i % 4 === 3 && exponentCount % 2 !== 0) return false;
        }
    }
    return (c % 4 !== 3);
};
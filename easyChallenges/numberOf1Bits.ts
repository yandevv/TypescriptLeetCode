function hammingWeight(n: number): number {
    function countSetBits(n: number, setBitsCount: number): number {
        if(n !== 1) {
            if(n % 2 === 1) setBitsCount++;
            return countSetBits((n - n % 2) / 2, setBitsCount);
        }
        setBitsCount++;
        return setBitsCount;
    }
    return countSetBits(n, 0);
};
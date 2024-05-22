function palindromeChecker(s: string): boolean {
    let l: number = 0;
    let r: number = s.length - 1;
    const sSplitted: string[] = s.split("");
    while(l <= r) {
        if(sSplitted[l] !== sSplitted[r]) return false;
        l++;
        r--;
    }
    return true;
};

function partition(s: string): string[][] {
    function dfs(actualS: string, partitions: string[][], actualSubstrings: string[] = []): void {
        if(actualS.length === 0) partitions.push(actualSubstrings);
        for(let i: number = 1; i <= actualS.length; i++) {
            const slicedS: string = actualS.slice(0, i);
            const isPalindrome = palindromeChecker(slicedS);
            if(isPalindrome) {
                const newActualSubstrings: string[] = [...actualSubstrings];
                newActualSubstrings.push(slicedS);
                dfs(actualS.slice(i, actualS.length), partitions, newActualSubstrings);
            }
        }
    }
    const partitions: string[][] = [];
    dfs(s, partitions);
    return partitions;
};
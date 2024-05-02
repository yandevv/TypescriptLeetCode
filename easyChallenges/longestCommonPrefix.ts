function longestCommonPrefix(strs: string[]): string {
    let biggestPrefix: string = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let j = 0;
        while(j < biggestPrefix.length) {
            if(biggestPrefix.split("")[j] !== strs[i].split("")[j]) break;
            j++;
        }
        biggestPrefix = biggestPrefix.slice(0, j);
    }
    return biggestPrefix;
};
function isAnagram(s: string, t: string): boolean {
    const letterCount: Map<string, number> = new Map<string, number>();
    const sSplitted = s.split("");
    for(let i in sSplitted) {
        if(letterCount.get(sSplitted[i]) !== undefined) {
            letterCount.set(sSplitted[i], letterCount.get(sSplitted[i])! + 1);
            continue;
        }
        letterCount.set(sSplitted[i], 1);
    }
    const tSplitted = t.split("");
    for(let i in tSplitted) {
        if(letterCount.get(tSplitted[i]) !== undefined) {
            letterCount.set(tSplitted[i], letterCount.get(tSplitted[i])! - 1);
            continue;
        }
        return false;
    }
    for(let num of letterCount.values()) {
        if(num !== 0) return false;
    }
    return true;
};
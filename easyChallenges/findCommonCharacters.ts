// First Approach - Iterating each word counting the frequency of letters and comparing with the global frequency, setting the min value of both
function commonChars(words: string[]): string[] {
    const globalLetterMapping: Map<string, number> = new Map();
    for(let letter of words[0]) globalLetterMapping.set(letter, (globalLetterMapping.get(letter) ?? 0) + 1);
    for(let i: number = 1; i < words.length; i++) {
        const wordLetterMapping: Map<string, number> = new Map();
        for(let letter of words[i].split("")) wordLetterMapping.set(letter, (wordLetterMapping.get(letter) ?? 0) + 1);
        for(let entry of globalLetterMapping.entries()) {
            const minFreq: number = Math.min(entry[1], wordLetterMapping.get(entry[0]) ?? 0);
            if(!minFreq) {
                globalLetterMapping.delete(entry[0]);
                continue;
            }
            globalLetterMapping.set(entry[0], minFreq);
        }
    }
    let ans: string[] = [];
    for(let entry of globalLetterMapping.entries()) ans = ans.concat(new Array(entry[1]).fill(entry[0]));
    return ans;
};
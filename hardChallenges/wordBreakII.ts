function wordBreak(s: string, wordDict: string[]): string[] {
    function dfs(actualS: string, words: string[] = []): string[] {
        if(!actualS.length) {
            return [words.join(" ")];
        };
        let phrases: string[] = [];
        for(let i = 0; i <= actualS.length; i++) {
            const substring: string = actualS.substring(0, i);
            if(wordDict.find((word) => word === substring)) {
                const newWords = [...words];
                newWords.push(substring);
                phrases = phrases.concat(dfs(actualS.substring(i), newWords));
            }
        }
        return phrases;
    }
    return dfs(s);
};
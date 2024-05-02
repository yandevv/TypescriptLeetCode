function reversePrefix(word: string, ch: string): string {
    const newWord: string[] = [];
    let foundCh: boolean = false;
    const wordSplitted: string[] = word.split("");
    for(let char of wordSplitted) {
        newWord.push(char);
        if(char === ch && !foundCh) {
            newWord.reverse();
            foundCh = true;
        }
    }
    return newWord.join("");
};
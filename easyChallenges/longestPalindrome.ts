// First Approach - Hash mapping all letters with booleans, increasing length value whenever I try to set a true value key
function longestPalindrome(s: string): number {
    const lettersMap: Map<string, boolean> = new Map();
    let palindromeLength: number = 0;
    for(let letter of s.split("")) {
        if(lettersMap.get(letter)) {
            palindromeLength += 2;
            lettersMap.delete(letter);
            continue;
        }
        lettersMap.set(letter, true);
    }
    if(lettersMap.size) palindromeLength++;
    return palindromeLength;
};
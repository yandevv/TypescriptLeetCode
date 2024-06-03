// First Approach - Transversing all chars of s and comparing with an index of t, counting how many chars s match with t, and subtracting it with t length
// function appendCharacters(s: string, t: string): number {
//     const splittedS: string[] = s.split("");
//     const splittedT: string[] = t.split("");
//     let l: number = 0;
//     for(let i: number = 0; i < splittedS.length; i++) {
//         if(splittedS[i] === splittedT[l]) l++
//     }
//     return splittedT.length - l;
// };

// Second Approach - Two-pointer approach with a s and t pointers, comparing each other and increasing tIndex whenever have a match (https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5249501/beats-100-explained-with-video-c-java-python-js-two-pointers-strings/?envType=daily-question&envId=2024-06-03)
function appendCharacters(s: string, t: string): number {
    let sIndex: number = 0, tIndex: number = 0;
    while(sIndex < s.length && tIndex < t.length) {
        if(t.charAt(tIndex) === s.charAt(sIndex)) tIndex++;
        sIndex++;
    }
    return t.length - tIndex;
};
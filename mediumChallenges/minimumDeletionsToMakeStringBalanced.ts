// First Try - Iterating over string and counting the 'b' sequence letter and comparing with 'a' letter count forward of every index, summing up with ans the lowest value - Wrong Answer (6 / 157 testcases passed)
// function minimumDeletions(s: string): number {
//     let bCount = 0;
//     let ans = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s.charAt(i) === "a" && s.charAt(i - 1) === "b") {
//             if(s.charAt(i + 1) === "b") {
//                 ans++;
//                 continue;
//             }
//             if(s.charAt(i + 1) === "a") {
//                 let j = i + 1;
//                 let aCount = 1;
//                 while(s.charAt(j) === "a") {
//                     aCount++;
//                     j++;
//                     if(aCount > bCount) break;
//                 }
//                 ans += Math.min(aCount, bCount);
//             }
//         }
//         if(s.charAt(i) === "a") {
//             bCount = 0;
//         } else bCount++;
//     }
//     return ans;
// };

// First Approach - Prefix and Suffix summing 'a' and 'b' letters, respectively, and comparing the lowest difference between their indexes minus 1, returning the number of 'a' is needed to remove by the number of 'b' it passed. (https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556005/prefix-suffix-sums-o-1-space-vs-dp-19ms-beats-100/?envType=daily-question&envId=2024-07-30)
function minimumDeletions(s: string): number {
    const prefixSumB: number[] = [s.charAt(0) === "b" ? 1 : 0];
    const suffixSumA: number[] = [0];
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === "a") suffixSumA[0]++;
    }
    for(let i = 1; i < s.length; i++) {
        prefixSumB[i] = prefixSumB[i - 1] + (s.charAt(i) === "b" ? 1 : 0);
        suffixSumA[i] = suffixSumA[i - 1] - (s.charAt(i - 1) === "a" ? 1 : 0);
    }
    let ans = s.length;
    for(let i = 0; i < s.length; i++) {
        ans = Math.min(ans, prefixSumB[i] + suffixSumA[i] - 1);
    }
    return ans;
};

// Second Approach - Same intuition as first approach, but a memory improvement bt storing prefix and suffix sums into int variables, comparing, increasing and decreased in the second loop. (https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556005/prefix-suffix-sums-o-1-space-vs-dp-19ms-beats-100/?envType=daily-question&envId=2024-07-30)
function minimumDeletions(s: string): number {
    let prefixSumB: number = 0;
    let suffixSumA: number = 0;
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === "a") suffixSumA++;
    }
    let ans = s.length;
    for(let i = 0; i < s.length; i++) {
        prefixSumB = prefixSumB + (s.charAt(i) === "b" ? 1 : 0);
        suffixSumA = suffixSumA - (s.charAt(i - 1) === "a" ? 1 : 0);
        ans = Math.min(ans, prefixSumB + suffixSumA - 1);
    }
    return ans;
};

// Third Approach - Iterating over string counting b letters and getting the lower value of ans itself and b count. (https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5556005/prefix-suffix-sums-o-1-space-vs-dp-19ms-beats-100/?envType=daily-question&envId=2024-07-30)
function minimumDeletions(s: string): number {
    let count = 0, ans = 0;
    for(let char of s) {
        ans = Math.min(ans += (char === "a" ? 1 : 0), count += (char === "b" ? 1 : 0));
    }
    return ans;
};
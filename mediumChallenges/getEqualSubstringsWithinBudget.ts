// First try - Iterating through scores with 1-pointer (21 / 37 testcases passed)
function equalSubstring(s: string, t: string, maxCost: number): number {
    const score: number[] = [];
    for(let i: number = 0; i < s.length; i++) {
        score[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let maximumLength: number = 0;
    let sum: number = 0;
    let count: number = 0;
    for(let i: number = 0; i < score.length; i++) {
        if(score[i] + sum > maxCost) {
            maximumLength = Math.max(maximumLength, count);
            sum = 0;
            count = 0;
        }
        if(score[i] <= maxCost) {
            sum += score[i];
            count++;
        }
    }
    return maximumLength;
};

// First Approach - 2-pointer through score counting substrings
function equalSubstring(s: string, t: string, maxCost: number): number {
    const score: number[] = [];
    for(let i: number = 0; i < s.length; i++) {
        score[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let maximumLength: number = 0;
    for(let i: number = 0; i < score.length; i++) {
        let sum: number = 0;
        let count: number = 0;
        for(let j: number = i; j < score.length; j++) {
            if(sum + score[j] > maxCost) break;
            sum += score[j];
            count++;
        }
        maximumLength = Math.max(maximumLength, count);
    }
    return maximumLength;
};

// Second Approach - O(n) with Sliding Window, iterating all numbers and adjusting the start of window (https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218505/97-44-easy-solution-with-explanation/?envType=daily-question&envId=2024-05-28)
function diffCalc(index: number, s: string, t: string) {
    return Math.abs(s.charCodeAt(index) - t.charCodeAt(index));
}

function equalSubstring(s: string, t: string, maxCost: number): number {
    let maximumLength: number = 0;
    let i: number = 0;
    let currCost: number = 0;
    for(let j: number = 0; j < s.length; j++) {
        currCost += diffCalc(j, s, t);
        while(currCost > maxCost) {
            currCost -= diffCalc(i, s, t);
            i++;
        }
        maximumLength = Math.max(maximumLength, j - i + 1);
    }
    return maximumLength;
};
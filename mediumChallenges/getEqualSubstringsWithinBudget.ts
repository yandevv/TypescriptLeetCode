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
// First Approach (Reverse sorting score, iterating score and finding the index of actual score value on sorted score (nlog(n) + n))
function findRelativeRanks(score: number[]): string[] {
    let sortedScore: number[] = [...score].sort((a, b) => b - a);
    let newScore: string[] = [];
    for(let num of score) {
        let podiumPos: number = sortedScore.findIndex((value) => value === num);
        if(podiumPos === 0) newScore.push("Gold Medal");
        if(podiumPos === 1) newScore.push("Silver Medal");
        if(podiumPos === 2) newScore.push("Bronze Medal");
        if(podiumPos > 2) newScore.push(`${podiumPos + 1}`);
    }
    return newScore;
};
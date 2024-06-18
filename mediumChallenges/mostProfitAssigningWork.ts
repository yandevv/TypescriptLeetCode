// First Approach - Dynamic Programming the maximum profit for every difficulty job and iterating every worker ability getting the best profit (https://leetcode.com/problems/most-profit-assigning-work/solutions/5329650/beats-100-explained-with-video-c-java-python-js-dp-interview-solution/?envType=daily-question&envId=2024-06-18)
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    let maximumProfitUpToDifficulty: number[] = []
    for(let i: number = 0; i < difficulty.length; i++) {
        maximumProfitUpToDifficulty[difficulty[i]] = Math.max(maximumProfitUpToDifficulty[difficulty[i]] ?? 0, profit[i]);
    }
    for(let i: number = 1; i < maximumProfitUpToDifficulty.length; i++) {
        maximumProfitUpToDifficulty[i] = Math.max(maximumProfitUpToDifficulty[i] ?? 0, maximumProfitUpToDifficulty[i - 1] ?? 0);
    }
    let maxProfit: number = 0;
    for(let ability of worker) {
        if(ability > maximumProfitUpToDifficulty.length - 1) {
            maxProfit += maximumProfitUpToDifficulty[maximumProfitUpToDifficulty.length - 1];
            continue;
        }
        maxProfit += maximumProfitUpToDifficulty[ability];
    }
    return maxProfit;
};
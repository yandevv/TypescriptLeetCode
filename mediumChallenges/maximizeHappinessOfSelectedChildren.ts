// First Approach (reverse sorting and slicing with the k value, iterating and carrying and negativeCarry for sum)
function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a);
    happiness = happiness.slice(0, k);
    let ans = 0;
    let negativeCarry: number = 0;
    for(let i of happiness) {
        ans += Math.max(i - negativeCarry, 0);
        negativeCarry++;
    }
    return ans
};

// Second Approach (reverse sorting, iterating k times and subtracting i value)
function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a);
    let ans = 0;
    for(let i: number = 0; i < k; i++) {
        ans += Math.max(happiness[i] - i, 0);
    }
    return ans
};
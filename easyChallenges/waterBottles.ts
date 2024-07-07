// First Approach - Looping while numBottles is divisible by numExchange, and summing up answer with divided emptyBottles
function numWaterBottles(numBottles: number, numExchange: number): number {
    let answer: number = numBottles;
    let emptyBottles: number = numBottles;
    while(emptyBottles >= numExchange) {
        answer += Math.floor(emptyBottles / numExchange);
        emptyBottles = Math.floor(emptyBottles / numExchange) + emptyBottles % numExchange;
    }
    return answer;
};

// Second Approach - Math solution (https://leetcode.com/problems/water-bottles/solutions/5431028/python-one-line-math-solution-o-1-beating-100/?envType=daily-question&envId=2024-07-07)
function numWaterBottles(numBottles: number, numExchange: number): number {
    return numBottles + Math.floor((numBottles - 1) / (numExchange - 1));
};
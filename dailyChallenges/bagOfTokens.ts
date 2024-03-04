function bagOfTokensScore(tokens: number[], power: number): number {
    let points: number = 0;

    if(tokens.length <= 0) return 0;
    let totalTokensSum = tokens.reduce((prev, current) => prev + current);

    if(!totalTokensSum) return 0;
    
    tokens.sort((a, b) => a - b);
    
    while(true) {
        if(power >= tokens[0]) {
            const shiftedToken = tokens.shift()!
            power -= shiftedToken;
            totalTokensSum -= shiftedToken;
            points++;
            continue;
        }
        if(tokens.length > 1 && totalTokensSum >= points && points > 0) {
            const poppedToken = tokens.pop()!;
            power += poppedToken;
            totalTokensSum -= poppedToken;
            points--;
            continue;
        }
        break;
    }

    return points;
};
function pivotInteger(n: number): number {
    let pivot = -1;

    let totalPossibleSum = 0;
    for(let i = 1; i <= n; i++) {
        totalPossibleSum += i;
    }

    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
        if(sum === (totalPossibleSum - sum + i)) {
            pivot = i;
            break;
        }
    }

    return pivot;
};
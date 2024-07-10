function averageWaitingTime(customers: number[][]): number {
    let actualTime: number = 1;
    let n: number = customers.length, totalWaitedTime: number = 0;
    let index: number = 0;
    while(index < customers.length) {
        actualTime = Math.max(actualTime, customers[index][0]);
        totalWaitedTime += (actualTime - customers[index][0]) + customers[index][1];
        actualTime += customers[index][1];
        index++;
    }
    return totalWaitedTime / n;
};
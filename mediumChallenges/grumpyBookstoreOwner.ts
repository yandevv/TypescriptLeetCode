// First Approach - Sliding window through customers array, reducing customers when grumpy is false and summing up the best minutes grumpy denying
function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let maximumNotGrumpy: number = 0;
    for(let i: number = 0; i < minutes; i++) {
        if(grumpy[i]) {
            maximumNotGrumpy += customers[i];
        }
    }
    let left: number = 0, right: number = minutes - 1;
    let actualSlideMaximum: number = maximumNotGrumpy;
    while(right < customers.length && customers.length !== minutes) {
        if(grumpy[left]) actualSlideMaximum -= customers[left];
        left++;
        right++;
        if(grumpy[right]) actualSlideMaximum += customers[right];
        maximumNotGrumpy = Math.max(maximumNotGrumpy, actualSlideMaximum);
    }
    return customers.reduce((prev, curr, index) => {
        if(!grumpy[index]) return prev + curr;
        return prev;
    }, 0) + maximumNotGrumpy;
};
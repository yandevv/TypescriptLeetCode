function maxFrequencyElements(nums: number[]): number {
    nums.sort((a, b) => b - a);

    if(nums.length < 1) return 0;

    let countByNum: {[index: number]: number} = {};
    let frequency: number[] = [0, 1];
    nums.forEach((num: number) => {
        if(!countByNum[num]) {
            countByNum[num] = 1;
            frequency[0] = 1;
            return;
        }

        frequency[0]++;
        countByNum[num]++;

        if(frequency[0] > frequency[1]) {
            frequency[1]++;
        }
    })

    let totalFrequency: number = 0;
    for(let i in countByNum) {
        if(countByNum[i] === frequency[1]) {
            totalFrequency += countByNum[i]
        }
    }

    return totalFrequency;
};
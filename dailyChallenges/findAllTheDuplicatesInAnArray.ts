function findDuplicates(nums: number[]): number[] {
    const duplicatedNums: number[] = [];

    let numbersDict: {[key: number]: boolean} = {};

    nums.forEach((value) => {
        if(numbersDict[value]) {
            duplicatedNums.push(value);
            return;
        }
        numbersDict[value] = true;
    });

    return duplicatedNums;
};
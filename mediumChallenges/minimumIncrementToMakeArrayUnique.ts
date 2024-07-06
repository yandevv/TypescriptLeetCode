// First Try - Hashmapping all values, iterating through entries and incrementing the value diminuishing count value (56 / 63 testcases passed)
function minIncrementForUnique(nums: number[]): number {
    let numberMap: Map<number, number> = new Map();
    nums.forEach((num) => {
        const numGet: number | undefined = numberMap.get(num);
        if(numGet) {
            numberMap.set(num, numGet + 1);
        } else {
            numberMap.set(num, 1);
        }
    });
    let count: number = 0;
    for(let entry of numberMap.entries()) {
        let entryValue: number = entry[0];
        let entryCount: number = entry[1];
        let thisCount: number = 0;
        while(entryCount > 1) {
            thisCount++;
            entryValue++;
            if(!numberMap.get(entryValue)) {
                numberMap.set(entryValue, 1);
                count += thisCount;
                entryCount--;
            }
        }
    }
    return count;
};

// First Approach - Counting carry on numbers and increasing increments variable as nums is iterated
function minIncrementForUnique(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let increments: number = 0;
    let carryOn: number = 0;
    for(let i = 0; i < nums.length; i++) {
        increments += carryOn;
        if(nums[i] === nums[i + 1]) {
            carryOn++;
            continue;
        }
        carryOn = Math.max(0, carryOn - (nums[i + 1] - nums[i] - 1));
    }
    return increments;
};
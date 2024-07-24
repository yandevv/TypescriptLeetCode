// First Approach - Converting every number to string and accessing it by their index, getting it converted number and constructing another number, mapping it into a map with originalNumber and mappedNumber. After all, sorting with the mapped values (535ms - Beats 25%)
function sortJumbled(mapping: number[], nums: number[]): number[] {
    const mappedNums: number[] = [];
    const newValMap: Map<number, number> = new Map();
    for(let i = 0; i < nums.length; i++) {
        let stringVal = nums[i].toString();
        let newStringVal = "";
        for(let i = 0; i < stringVal.length; i++) newStringVal += mapping[Number.parseInt(stringVal.charAt(i))];
        const newVal = Number.parseInt(newStringVal);
        if(!newValMap.has(nums[i])) newValMap.set(nums[i], newVal);
        mappedNums.push(newVal);
    }
    nums.sort((a, b) => newValMap.get(a)! - newValMap.get(b)!);
    return nums;
};

// Second Approach - Converting every number to mapped number using decimal places and mapping it with original number with the mapped number, comparing it and sorting the original nums array. (434ms - Beats 50.00%)
function sortJumbled(mapping: number[], nums: number[]) {
    function translateInteger (num: number): number {
        if (num === 0) {
            return mapping[0];
        }
        let res = 0;
        let curMult = 1;
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            res += mapping[digit] * curMult;
            curMult *= 10;
        }
        return res;
    };
    const numberMapping: Map<number, number> = new Map();
    for (let num of nums) {
        if (!(num in numberMapping)) {
            numberMapping.set(num, translateInteger(num));
        }
    }
    nums.sort((a, b) => numberMapping.get(a)! - numberMapping.get(b)!);
    return nums;
};
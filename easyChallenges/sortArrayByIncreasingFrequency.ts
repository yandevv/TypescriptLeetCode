// First Approach - Mapping frequency of numbers and sorting with building method (53ms - Beats 100%)
function frequencySort(nums: number[]): number[] {
    const freqMap: Map<number, number> = new Map();
    nums.forEach((num) => freqMap.set(num, (freqMap.get(num) ?? 0) + 1));
    nums.sort((a, b) => {
        const freqA: number = freqMap.get(a)!;
        const freqB: number = freqMap.get(b)!;
        if(freqA !== freqB) {
            return freqA - freqB
        } else return b - a;
    })
    return nums;
};
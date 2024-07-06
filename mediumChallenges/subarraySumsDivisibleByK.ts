// First Approach - Prefix summing, saving it in hashmap to compare how many times it was seen
function subarraysDivByK(nums: number[], k: number): number {
    let count: number = 0;
    let prefixSum: number = 0;
    const prefixMap: Map<number, number> = new Map([[0, 1]]);
    for(let num of nums) {
        prefixSum += num;
        let remainder = prefixSum % k;
        if(remainder < 0) { // Treating negative numbers
            remainder += k;
        }
        if(prefixMap.has(remainder)) {
            count += prefixMap.get(remainder)!;
            prefixMap.set(remainder, prefixMap.get(remainder)! + 1);
        } else {
            prefixMap.set(remainder, 1);
        }
    }
    return count;
};
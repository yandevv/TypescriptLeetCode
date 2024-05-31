// First Approach - Bit Manipulation with XOR Gate, iterating through all numbers and separating the leftmost bit through the array again, XORing the values (https://leetcode.com/problems/single-number-iii/solutions/5233206/demon-level-explanation-3-approaches/?envType=daily-question&envId=2024-05-31)
function singleNumber(nums: number[]): number[] {
    let xorSum: number = 0;
    nums.forEach((num) => xorSum ^= num);
    const lowestBit: number = xorSum & (-xorSum);
    const res: number[] = [0, 0];
    nums.forEach((num) => {
        if((lowestBit & num) === 0) {
            res[0] ^= num;
        } else {
            res[1] ^= num;
        }
    })
    return res;
};
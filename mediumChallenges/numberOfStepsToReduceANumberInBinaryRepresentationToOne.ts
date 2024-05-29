// First try - Converting number with Number object parsing and dividing till zero (BigInt max 16bits problem) (38 / 73 testcases passed)
function numSteps(s: string): number {
    let number: number = Number.parseInt(s, 2);
    let count: number = 0;
    while(number > 1) {
        count++;
        if(number % 2 === 0)  {
            number = number / 2;
            continue;
        }
        number++;
    }
    return count;
};

// First Approach - Bit manipulation counting with carry values and "slicing" zero bits (https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/?source=submission-noac)
function numSteps(s: string): number {
    let length: number = s.length - 1;
    let carry: number = 0;
    let count: number = 0;
    while(length > 0) {
        if(parseInt(s.charAt(length)) + carry === 0) {
            carry = 0;
            count++;
        } else if(parseInt(s.charAt(length)) + carry === 2) {
            carry = 1;
            count++;
        }
        else {
            carry = 1;
            count += 2;
        }
        length--;
    }
    if(carry === 1) count++;
    return count;
};
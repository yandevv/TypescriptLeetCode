// First approach using O(1) Time-Complexity on nums storing, and O(n) on index calculation
class NumArray {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        let sum: number = 0;
        for(let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}

// Second approach using O(n) Time-Complexity on result storing for prefix sum, and O(1) on index calculation using prefix sum.
class NumArray {
    result: number[] = [];
    constructor(nums: number[]) {
        this.result[0] = nums[0];
        for(let i = 1; i < nums.length; i++) {
            this.result[i] = this.result[i - 1] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return left > 0 ? this.result[right] - this.result[left - 1] : this.result[right];
    }
}
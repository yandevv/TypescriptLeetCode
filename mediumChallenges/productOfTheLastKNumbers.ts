// First Approach - Brute forcing with adding numbers in an array, iterating it backwards in getProduct method. (872ms - Beats 42.67%)
// class ProductOfNumbers {
//   nums: number[];

//   constructor() {
//     this.nums = [];
//   }

//   add(num: number): void {
//     this.nums.push(num);
//   }

//   getProduct(k: number): number {
//     const n = this.nums.length;

//     let product = 1;
//     for(let i = n - 1; i >= n - k; i--) {
//       product *= this.nums[i];
//     }

//     return product;
//   }
// }

// Second Aproach - Prefix multiplying nums and resetting whenever an add method call zeros, as all the
// numbers before it will be zero too. (https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/6420402/beats-100-efficient-product-tracker-approach-easiest-solution-ever-algorithm-explained/?envType=daily-question&envId=2025-02-14)
class ProductOfNumbers {
  nums: number[] = [];
  prod: number = 1;

  constructor() {}

  add(num: number): void {
    if(num === 0) {
      this.nums = [];
      this.prod = 1;
      return;
    }

    this.prod *= num;
    this.nums.push(this.prod);
  }

  getProduct(k: number): number {
    if(this.nums.length < k)
      return 0;

    const ans = this.nums[this.nums.length - 1];
    if(this.nums.length === k)
      return ans;

    return ans / this.nums[this.nums.length - 1 - k];
  }
}

const case1Object = new ProductOfNumbers();
case1Object.add(3);
case1Object.add(0);
case1Object.add(2);
case1Object.add(5);
case1Object.add(4);
console.log(`case1Object first test: ${case1Object.getProduct(2)} // ${case1Object.getProduct(2) === 20}`);
console.log(`case1Object second test: ${case1Object.getProduct(3)} // ${case1Object.getProduct(3) === 40}`);
console.log(`case1Object third test: ${case1Object.getProduct(4)} // ${case1Object.getProduct(4) === 0}`);
case1Object.add(8);
console.log(`case1Object fourth test: ${case1Object.getProduct(2)} // ${case1Object.getProduct(2) === 32}`);
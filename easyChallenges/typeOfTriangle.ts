// First Approach - Sorting the sides to check the triangle validity by summing the two smaller sides and comparing
// it to the largest side (that need to be bigger than), that way it's only needed to check the
// sides equality to determine the type. (0ms - Beats 100.00%)
function triangleType(nums: number[]): string {
  const [a, b, c] = nums.sort((a, b) => a - b);

  if(a + b <= c)
    return 'none';

  if(a === b && b === c)
    return 'equilateral';

  if(a === b || b === c || a === c)
    return 'isosceles';

  return 'scalene';
};

// Second Approach - Same of the first approach, but don't using sort and checking all the three possible
// comparisons. (0ms - Beats 100.00%)
function triangleType(nums: number[]): string {
  const [a, b, c] = nums;

  const sum1Comparison = a + b > c;
  const sum2Comparison = b + c > a;
  const sum3Comparison = c + a > b;

  if(!sum1Comparison || !sum2Comparison || !sum3Comparison)
    return 'none';

  if(a === b && b === c)
    return 'equilateral';

  if(a === b || b === c || a === c)
    return 'isosceles';

  return 'scalene';
};

const case1 = triangleType([3,3,3]);
const case2 = triangleType([3,4,5]);

console.log(`case1: ${case1} // ${case1 === 'equilateral'}`);
console.log(`case2: ${case2} // ${case2 === 'scalene'}`);
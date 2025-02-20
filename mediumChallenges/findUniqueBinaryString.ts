// First Approach - Set tracking binary strings that are present and backtracking through
// binary strings checking if it's present in Set (0ms - Beats 100.00%)
function findDifferentBinaryString(nums: string[]): string {
  const n = nums.length;

  const binarySet: Set<string> = new Set();
  for(const binaryNum of nums)
    binarySet.add(binaryNum);

  function backtrack(binaryString: string = ''): string {
    if(binaryString.length === n) {
      return binarySet.has(binaryString) ? '' : binaryString;
    }

    const addZeroResult = backtrack(binaryString + '0');
    if(addZeroResult.length === n)
      return addZeroResult;

    const addOneResult = backtrack(binaryString + '1');
    if(addOneResult.length === n)
      return addOneResult;

    return '';
  }

  return backtrack();
};

const case1 = findDifferentBinaryString(["01","10"]);
const case2 = findDifferentBinaryString(["00","01"]);
const case3 = findDifferentBinaryString(["111","011","001"]);

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${case2}`);
console.log(`case3: ${case3} // ${case3}`);
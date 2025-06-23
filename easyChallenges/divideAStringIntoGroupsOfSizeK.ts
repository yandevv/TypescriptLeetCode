// First Approach - Brute force method iterating over string and slicing it into parts of size k, and if the length
// is smaller than k, it concatenate `fill` variable repeated enough times to make the last group valid, appending
// it into a answer variable and returning it in the end. (0ms - Beats 100.00%)
function divideString(s: string, k: number, fill: string): string[] {
  const ans: string[] = [];
  for(let i = 0; i < s.length; i += k) {
    let part = s.slice(i, i + k);
    if(part.length < k) {
      part += fill.repeat(k - part.length);
    }

    ans.push(part);
  }

  return ans;
};

const case1 = divideString("abcdefghi", 3, "x");
const case2 = divideString("abcdefghij", 3, "x");

console.log(`case1: ${case1} // Should be: ["abc","def","ghi"]`);
console.log(`case2: ${case2} // Should be: ["abc","def","ghi","jxx"]`);

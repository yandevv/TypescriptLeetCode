import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// First Try - Min Heap method inserting all letters into a priority queue and dequeuing them based on
// their charcode values, building the result string in the smallest lexicographically possible but
// not respecting the stack order of challenge. (Failed in local testcases)
// function robotWithString(s: string): string {
//   const lettersMinPq = new MinPriorityQueue<string>(letter => letter.charCodeAt(0));

//   for(const letter of s) {
//     lettersMinPq.enqueue(letter);
//   }

//   let result = "";
//   while(lettersMinPq.size() > 0) {
//     result += lettersMinPq.dequeue()!;
//   }

//   return result;
// };

// First Approach - Precalculating the smallest letter from left side of string and iterating over string again
// making the stack, comparing each iterating if the front of stack is lower than the smallest possible to the
// left side, popping the stack if so append to the string. (187ms - Beats 8.33%)
function robotWithString(s: string): string {
  const smallestFromRight: number[] = [];
  for(let i = s.length - 1; i >= 0; i--) {
    if(smallestFromRight.length === 0 || s.charCodeAt(i) <= smallestFromRight[i + 1]) {
      smallestFromRight[i] = s.charCodeAt(i);
    } else
      smallestFromRight[i] = smallestFromRight[i + 1];
  }

  const stack: string[] = [];
  let result = "";
  for(let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    while(stack.length > 0 && stack[stack.length - 1].charCodeAt(0) <= smallestFromRight[i + 1])
      result += stack.pop()!;
  }

  while(stack.length > 0)
    result += stack.pop()!;

  return result;
};

// Second Approach - Same as the first approach but using greedy stack. (https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/6815342/use-suffix-array-gready-stack-c-11ms-beats-100/?envType=daily-question&envId=2025-06-06)
function robotWithString(s: string): string {
  const n = s.length;

  const smallestFromRight: number[] = [];
  smallestFromRight[n - 1] = s.charCodeAt(n - 1);
  for(let i = n - 2; i >= 0; i--) {
    smallestFromRight[i] = Math.min(smallestFromRight[i + 1], s.charCodeAt(i));
  }

  const stack: string[] = [];
  let result = "", top = -1;
  for(let i = 0; i < n; i++) {
    stack[++top] = s[i];

    while(top >= 0 && (i === n - 1 || stack[top].charCodeAt(0) <= smallestFromRight[i + 1]))
      result += stack[top--];
  }

  return result;
};

const case1 = robotWithString("zza");
const case2 = robotWithString("bac");
const case3 = robotWithString("bdda");
const case4 = robotWithString("vzhofnpo");

console.log(`case1: ${case1} // ${case1 === "azz"}`);
console.log(`case2: ${case2} // ${case2 === "abc"}`);
console.log(`case3: ${case3} // ${case3 === "addb"}`);
console.log(`case4: ${case4} // ${case4 === "fnohopzv"}`);
import { PriorityQueue } from "@datastructures-js/priority-queue";

// First Try - Min Heap method iterating through the string and tracking the letters by their min ASCII value
// and index (secondary sort), removing the stars and the letter with the min ASCII value at each step. Not
// working because of index issues when removing characters from the string.
// (Wrong Answer - 420 / 602 testcases passed)
// function clearStars(s: string): string {
//   let n = s.length;

//   if(s[0] === '*')
//     s = s.slice(1);

//   const letterPq = new PriorityQueue<[number, number]>((a: [number, number], b: [number, number]) => {
//     if(a[0] === b[0]) {
//       return b[1] - a[1];
//     }

//     return a[0] - b[0];
//   });

//   for(let i = 0; i < n; i++) {
//     if(s[i] === '*') {
//       s = s.slice(0, i) + s.slice(i + 1);

//       n--;
//       i--;

//       if(letterPq.size() > 0) {
//         const [_, index] = letterPq.dequeue()!;

//         s = s.slice(0, index) + s.slice(index + 1);

//         n--;
//         i--;
//       }
//     } else
//       letterPq.enqueue([s.charCodeAt(i), i]);
//   }

//   return s;
// };

// First Approach - Greedy method iterating through the string and tracking the letters by their ASCII
// value in a array with their indexes, removing the stars by replacing the letter index with a star
// and then filtering the stars at the end. (Editorial Solution)
function clearStars(s: string): string {
  const cnt: number[][] = Array(26).fill([]).map(() => []);
  const arr = s.split("");
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== "*") {
      cnt[arr[i].charCodeAt(0) - "a".charCodeAt(0)].push(i);
    } else {
      for(let j = 0; j < 26; j++) {
        if(cnt[j].length > 0) {
          arr[cnt[j].pop()!] = "*"; 
          break;
        }
      }
    }
  }
  return arr.filter((c) => c !== "*").join("");
}

// Second Approach - First Try approach with the First Approach logic using a priority queue to track
// the letter by their ASCII value. (383ms - Beats 25.00%)
function clearStars(s: string): string {
  const sArr = s.split("");

  const letterPq = new PriorityQueue<[number, number]>((a: [number, number], b: [number, number]) => {
    if(a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  for(let i = 0; i < sArr.length; i++) {
    if(sArr[i] === '*') {
      if(letterPq.size() > 0) {
        const [_, index] = letterPq.dequeue()!;

        sArr[index] = '*';
      }
    } else
      letterPq.enqueue([s.charCodeAt(i), i]);
  }

  return sArr.filter((c) => c !== "*").join("");
};

const case1 = clearStars("aaba*");
const case2 = clearStars("abc");
const case3 = clearStars("d*d*");
const case4 = clearStars("dk**");

console.log(`case1: ${case1} // ${case1 === "aab"}`);
console.log(`case2: ${case2} // ${case2 === "abc"}`);
console.log(`case3: ${case3} // ${case3 === ""}`);
console.log(`case4: ${case4} // ${case4 === ""}`);
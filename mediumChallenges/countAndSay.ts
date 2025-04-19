// First Approach - Recursive method using tail call optimization using n parameter to decrease
// the "count" - (2ms - Beats 92.88%)
// function countAndSay(n: number, encodedString = "1"): string {
//   n--;

//   if(n === 0)
//     return encodedString;

//   let count = 1, char = encodedString[0], newEncodedString = "";
//   for(let i = 1; i < encodedString.length; i++) {
//     if(encodedString[i] === char) {
//       count++;
//     } else {
//       newEncodedString += `${count}${char}`;
//       char = encodedString[i];
//       count = 1;
//     }
//   }
//   newEncodedString += `${count}${char}`;

//   return countAndSay(n, newEncodedString);
// };

// Second Approach - Iterative method using the same algorithm as the first approach. (2ms - Beats 92.88%)
function countAndSay(n: number): string {
  let lastEncodedString = "1";
  for(let cnt = n - 1; cnt > 0; cnt--) {
    let count = 1, char = lastEncodedString[0], newEncodedString = "";
    for(let i = 1; i < lastEncodedString.length; i++) {
      if(lastEncodedString[i] === char) {
        count++;
      } else {
        newEncodedString += `${count}${char}`;
        char = lastEncodedString[i];
        count = 1;
      }
    }
    newEncodedString += `${count}${char}`;
    lastEncodedString = newEncodedString;
  }

  return lastEncodedString;
};

const case1 = countAndSay(4);
const case2 = countAndSay(1);

console.log(`case1: ${case1} // ${case1 === "1211"}`);
console.log(`case2: ${case2} // ${case2 === "1"}`);
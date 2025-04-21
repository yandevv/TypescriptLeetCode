// First Approach - Hashmap method projecting the number of rabbits based on the answers
// and if there's more than one rabbit with the same answer, we can reduce the number
// of rabbits by 1 until 0, where we can add the number of rabbits to the answer again.
// (0ms - Beats 100.00%)
function numRabbits(answers: number[]): number {
  const answersMap: Map<number, number> = new Map();
  let ans = 0;
  for(const answer of answers) {
    if(answer === 0) {
      ans++;
      continue;
    }

    if(!answersMap.get(answer)) {
      ans += answer + 1;
      answersMap.set(answer, answer);
      continue;
    }

    answersMap.set(answer, answersMap.get(answer)! - 1);

    if(answersMap.get(answer) === 0) {
      answersMap.delete(answer);
    }
  }

  return ans;
};

const case1 = numRabbits([1,1,2]);
const case2 = numRabbits([10,10,10]);
const case3 = numRabbits([1,0,1,0,0]);
const case4 = numRabbits([0,0,1,1,1]);

console.log(`case1: ${case1} // ${case1 === 5}`);
console.log(`case2: ${case2} // ${case2 === 11}`);
console.log(`case3: ${case3} // ${case3 === 5}`);
console.log(`case4: ${case4} // ${case4 === 6}`);
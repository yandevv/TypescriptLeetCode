// First Approach - DFS method exploring all leaves focused on the alphabetical order (a -> c), pushing every word to an array
// and resulting the k - 1 index or an empty string. (8ms - Beats 66.67%)
function getHappyString(n: number, k: number): string {
  const happyStrings: string[] = [];
  function dfs(string: string, lastCharacter: string): void {
    if(string.length === n) {
      happyStrings.push(string);
      return;
    }

    for(let i = 0; i < 3; i++) {
      const char = String.fromCharCode(97 + i);
      if(lastCharacter === char)
        continue;

      dfs(string + char, char);
    }
  }

  dfs('', '');

  return happyStrings[k - 1] ?? "";
};

const case1 = getHappyString(1, 3);
const case2 = getHappyString(1, 4);
const case3 = getHappyString(3, 9);

console.log(`case1: ${case1} // ${case1 === "c"}`);
console.log(`case2: ${case2} // ${case2 === ""}`);
console.log(`case3: ${case3} // ${case3 === "cab"}`);
function fizzBuzz(n: number): string[] {
    const returnArray: string[] = [];
    for(let i = 1; i <= n; i++) {
        const threeDiv = i % 3 === 0;
        const fiveDiv = i % 5 === 0;
        if(threeDiv && fiveDiv) {
            returnArray.push("FizzBuzz");
            continue;
        };
        if(threeDiv) {
            returnArray.push("Fizz");
            continue;
        };
        if(fiveDiv) {
            returnArray.push("Buzz");
            continue;
        };
        returnArray.push(`${i}`);
    }
    return returnArray;
};
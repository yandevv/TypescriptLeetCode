// First Try (sorting and shifting weights summing up and counting boats - 38 / 78 testcases passed)
// function numRescueBoats(people: number[], limit: number): number {
//     let numBoats = 0;
//     people.sort((a, b) => a - b);
//     let auxSum = 0;
//     while(people.length > 0) {
//         if(auxSum + people[0] <= limit) {
//             auxSum += people.shift()!;
//             continue;
//         }
//         numBoats++;
//         auxSum = 0;
//     }
//     if(auxSum <= limit) numBoats++;
//     return numBoats;
// };

// First Approach (sorting people weights and comparing two pointers with start weight and last weight, popping and shifting as needed)
function numRescueBoats(people: number[], limit: number): number {
    let numBoats: number = 0;
    people.sort((a, b) => a - b);
    let r: number = people.length - 1;
    while(people.length) {
        if(people[0] + people[r] <= limit) {
            people.shift();
            people.pop();
            r -= 2;
            numBoats++;
            continue;
        }
        people.pop();
        r--;
        numBoats++;
    }
    return numBoats;
};
// First Approach - Iterating all the values, grouping according handCount and removing the values of groups from hand array
function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(hand.length % groupSize !== 0) return false;
    if(groupSize === 1) return true;
    hand.sort((a, b) => a - b);
    let i: number = 0;
    let lastNumber: number = hand.splice(i, 1)[0], handCount = 1;
    while(hand.length > 0) {
        if(Math.abs(lastNumber - hand[i]) > 1 || i > hand.length) return false;
        if(Math.abs(lastNumber - hand[i])) {
            lastNumber = hand.splice(i, 1)[0];
            handCount++;
            i--; 
        }
        if(handCount === groupSize) {
            i = 0;
            lastNumber = hand.splice(i, 1)[0];
            handCount = 1;
            continue;
        }
        i++;
    }
    return true;
};
// First Approach - Sorting both seats and students arrays and summing seats and students numbers absolute difference at every index
function minMovesToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let movesSum: number = 0;
    seats.forEach((seatNumber, index) => {
        movesSum += Math.abs(seatNumber - students[index]);
    });
    return movesSum;
};
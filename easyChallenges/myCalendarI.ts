// First Approach - Tracking current bookedEvents and for each new event registered iterate all booked events checking if it's possible to book. (141ms - Beats 72.55%)
class MyCalendar {
	bookedEvents: [number, number][] = [];

	constructor() {}

	book(start: number, end: number): boolean {
		let isValid = true;

		for(let i = 0; i < this.bookedEvents.length; i++) {
			const bookedEvent = this.bookedEvents[i];

			const firstVerification = start < bookedEvent[0] && end <= bookedEvent[0];
			const secondVerification = start >= bookedEvent[1];

			if(!(firstVerification || secondVerification)) {
				isValid = false;
				break;
			}
		}

		if(isValid) {
			this.bookedEvents.push([start, end]);
			return true;
		}

		return false;
	}
}

const case1Object = new MyCalendar();
console.log(`case1Object - Test 1: ${case1Object.book(10, 20)}`);
console.log(`case1Object - Test 2: ${case1Object.book(15, 25)}`);
console.log(`case1Object - Test 3: ${case1Object.book(20, 30)}`);
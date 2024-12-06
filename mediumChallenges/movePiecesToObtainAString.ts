// First Try - Two pointer method checking if both string have same characters or checking "L" and "R" by logical checks. (Wrong Answer)
function canChange(start: string, target: string): boolean {
	let p1 = 0, p2 = 0;
	while(p1 < start.length && p2 < target.length) {
		if(start[p1] === target[p2]) {
			p1++;
			p2++;

			continue;
		}

		if(start[p1] === "L")
			return false;

		if(target[p2] === "R")
			return false

		if(start[p1] === "R") {
			while(target[p2] !== "R") {
				if(target[p2] === "L" || p2 >= target.length)
					return false;

				p2++;
			}

			p2++;
			p1 = p2;

			continue;
		}

		if(target[p2] === "L") {
			while(start[p1] !== "L" || p1 >= start.length) {
				if(start[p1] === "R")
					return false;

				p1++;
			}

			p1++;
			p2 = p1;

			continue;
		}
	}

	return true;
};

// First Approach - Two-pointer iterative method skipping "_" characters and checking by target character and their indexes, if it's a "L" char start's index can't
// be behind target's index and if it's a "R" char target's index can't be behind start's index. (https://leetcode.com/problems/move-pieces-to-obtain-a-string/submissions/1472217322/?envType=daily-question&envId=2024-12-05)
function canChange(start: string, target: string): boolean {
	let n = target.length;

	let i = 0, j = 0;
	while(i <= n && j <= n) {
		while(i < n && target[i] === "_")
			i++;

		while(j < n && start[j] === "_")
			j++;

		if(i === n || j === n)
			return i === n && j === n;

		if(target[i] !== start[j])
			return false;

		if(target[i] === "L") {
			if(j < i)
				return false;
		} else {
			if(i < j)
				return false;
		}

		i++;
		j++;
	}

	return true;
};

const case1 = canChange("_L__R__R_", "L______RR");
const case2 = canChange("R_L_", "__LR");
const case3 = canChange("_R", "R_");
const case4 = canChange("_R", "_R");

console.log(`case1: ${case1} // ${case1}`)
console.log(`case2: ${case2} // ${!case2}`)
console.log(`case3: ${case3} // ${!case3}`)
console.log(`case4: ${case4} // ${case4}`)
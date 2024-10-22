// First Try - Iterating over splitted sentence1 and sentence2 and if their iteration indexes values are different, it iterates over the biggest one until they equals again, that way changing check variable and if it happens again, now with check variable false, it returns false. (Wrong Answer)
// function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
// 	const sentence1Splitted = sentence1.split(" ");
// 	const sentence2Splitted = sentence2.split(" ");

// 	let i = 0, j = 0, check = true;
// 	while(i < sentence1Splitted.length && j < sentence2Splitted.length) {
// 		if(sentence1Splitted[i] !== sentence2Splitted[j]) {
// 			if(check) {
// 				while(sentence1Splitted[i] !== sentence2Splitted[j] && i < sentence1Splitted.length && j < sentence2Splitted.length)
// 					sentence1Splitted.length > sentence2Splitted.length ? i++ : j++;

// 				check = false;
// 				continue;
// 			} else return false;
// 		}
// 		i++; j++;
// 	}

// 	return true;
// };

// First Approach - Stack Approach shifting and popping within shorter sentence iteration when the first words of both or the last ones are equals, otherwise returning false. (https://leetcode.com/problems/sentence-similarity-iii/solutions/2577936/typescript-solution-with-stacks/?envType=daily-question&envId=2024-10-06)
function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
	const shorterSentSplitted = (sentence1.length > sentence2.length ? sentence2 : sentence1).split(" ")
	const longerSentSplitted = (sentence1.length > sentence2.length ? sentence1 : sentence2).split(" ")
	
	while(shorterSentSplitted.length) {
			if(shorterSentSplitted[0] === longerSentSplitted[0]) {
					shorterSentSplitted.shift()
					longerSentSplitted.shift()
			} else if(shorterSentSplitted[shorterSentSplitted.length - 1] === longerSentSplitted[longerSentSplitted.length - 1]) {
					shorterSentSplitted.pop()
					longerSentSplitted.pop()
			} else {
					return false
			}
	}
	
	return true
};

const case1 = areSentencesSimilar("My name is Haley", "My Haley");
const case2 = areSentencesSimilar("of", "A lot of words");
const case3 = areSentencesSimilar("Eating right now", "Eating");

console.log(`case1: ${case1} // ${case1}`);
console.log(`case2: ${case2} // ${!case2}`);
console.log(`case3: ${case3} // ${case3}`);
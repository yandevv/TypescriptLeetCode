var maxScoreWords = function(words: string[], letters: string[], score: number[]): number {
    let n: number = words.length;
    let res: number = 0;
    let letters_count: number[] = new Array(26).fill(0);
    for (let letter of letters) {
        let ind = letter.charCodeAt(0) - 97;
        letters_count[ind]++;
    }
    let words_scores = {};
    for (let word of words) {
        let s: number = 0;
        for (let c of word) {
            let ind: number = c.charCodeAt(0) - 97;
            s += score[ind];
        }
        words_scores[word] = s;
    }
    for (let mask = 0; mask < (1 << n); ++mask) { // There will be exactly 2^n different states
        let cur_count: number[] = new Array(26).fill(0);
        let can_create: boolean = true;
        let cur_score: number = 0;
        for (let word_ind = 0; word_ind < n; ++word_ind) {
            if (mask & (1 << word_ind)) { // if in mask bit of this word is 1
                let word: string = words[word_ind];
                cur_score += words_scores[word];
                for (let c of word) {
                    let ind: number = c.charCodeAt(0) - 97;
                    cur_count[ind]++;
                    if (cur_count[ind] > letters_count[ind]) {
                        can_create = false;
                        break;
                    }
                }
            }
            if (!can_create) {
                break;
            }
        }
        if (can_create && cur_score > res) {
            res = cur_score;
        }
    }
    return res;
};
// First Try - Hashtabling dictionary and comparing with each word combined (126 / 127 testcases passed - Last don't passes)
function replaceWords(dictionary: string[], sentence: string): string {
    const dictionaryMap: Map<string, boolean> =  new Map();
    for(let dict of dictionary) dictionaryMap.set(dict, true);
    let newSentence: string = "";
    let actualWord: string = "";
    let i: number = 0;
    while(i < sentence.length) {
        const actualChar: string = sentence.charAt(i);
        if(actualChar === " ") {
            newSentence += " ";
            actualWord = "";
        } else {
            actualWord += actualChar;
            newSentence += actualChar;
            if(dictionaryMap.get(actualWord)) {
                actualWord = "";
                while(sentence.charAt(i+1) !== " " && i < sentence.length) i++;
            }
        }
        i++;
    }
    return newSentence;
};

// First Approach - Trie implementation to index all the dictionaries words, and an augment method to search through words and return the root word
class TrieNode {
    childNode: TrieNode[];
    wordEnd: boolean;
    constructor() {
        this.wordEnd = false;
        this.childNode = [];
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insertNode(word: string): void {
        let currentNode: TrieNode = this.root;
        for(let i: number = 0; i < word.length; i++) {
            const letterIndex: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(currentNode.wordEnd) return; // Trie Insertion Augment to match shortest dictionary word length problem constraint
            if(currentNode.childNode[letterIndex] === undefined) currentNode.childNode[letterIndex] = new TrieNode();
            currentNode = currentNode.childNode[letterIndex];
        }
        currentNode.wordEnd = true;
    }
    searchRootWord(word: string): string {
        let currentNode: TrieNode = this.root;
        let rootWord: string = "";
        for(let i: number = 0; i < word.length; i++) {
            const letterIndex: number = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(currentNode.wordEnd) return rootWord;
            if(currentNode.childNode[letterIndex] === undefined) break;
            rootWord += word.charAt(i);
            currentNode = currentNode.childNode[letterIndex];
        }
        return word;
    }
}

function replaceWords(dictionary: string[], sentence: string): string {
    const trie: Trie = new Trie();
    for(let word of dictionary) trie.insertNode(word);
    const sentenceSplitted: string[] = sentence.split(" ");
    for(let i in sentenceSplitted) {
        sentenceSplitted[i] = trie.searchRootWord(sentenceSplitted[i]);
    }
    return sentenceSplitted.join(" ");
};
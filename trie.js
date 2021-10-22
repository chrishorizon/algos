class TrieNode {
    constructor(char = "") {
        // each node stores its own character value
        this.character = char;

        // each node has a JS object
        // the keys are characters
        // the values are TrieNodes
        this.children = {};

        // each node has a boolean check to see if its the end of a word
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        // root node represents an empty string
        this.root = new TrieNode();
    }

    /**
     * Adds the given to the Trie.
     * @param {string} word Word that is being added to the Trie
     * @returns {boolean} true/false status of adding the word
     */
    add(word) { }

    /**
     * Returns an array with any complete words beginning
     * with the given starting substring.
     * - Time: O(?)
     * - Space: O(?)
     * @returns {array} of strings
     */
    autoComplete(startingSubstring) {
        // TIP: separating logic into separate helper functions may help figuring this out and help code readability
    }
}

let searchHistory = new Trie();
searchHistory
    .add("cat")
    .add("can")
    .add("candy")
    .add("crud")
    .add("apple")
    .add("a")
    .add("an")
    .add("and");
console.log(searchHistory);

console.log(searchHistory.autoComplete("a"));
console.log(searchHistory.autoComplete("ca")); // ["cat", "can", "candy"]
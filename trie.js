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
    add(word) {
        let node = this.root; // runner / current

        for (const character of word) {
            if (!node.children.hasOwnProperty(character)) {
                node.children[character] = new TrieNode(character);
            }
            node = node.children[character];
        }
        node.isEndOfWord = true;
        return this
    }

    /**
     * Returns an array with any complete words beginning
     * with the given starting substring.
     * @returns {array} of strings
     */
    autoComplete(startingSubstring) {
        // TIP: separating logic into separate helper functions may help figuring this out and help code readability
        let startNode = this.getLastOfSubstring(startingSubstring);

        return this.getCompletions(startingSubtring, "", startNode);
    }

    // Finds the last character node of the given substring
    getLastOfSubstring(substring) {
        let runner = this.root;

        for (const character of substring) {
            if (runner.children.hasOwnProperty(character)) {
                runner = runner.children[character];
            }
        }
        return runner;
    }

    // Recursive call to get the word completions
    getCompletions(prepend = "", branchString = "", node = this.root, completions = []) {
        if (node.isEndOfWord) {
            completions.push(prepend + branchString);
        }

        // BASE CASE
        // this prevents the function from running infinitely
        if (!node.children) {
            return completions;
        }

        // looping through the keys of a given node's .children
        for (const character in node.children) {
            this.getCompletions(prepend, branchString + node.children[character].character, node.children[character], completions);
        }

        return completions;
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
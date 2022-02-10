/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

function rehash(s) {
    let myString = "";
    let myHash = {};
    for (let i = 0; i < s.length; i++) {
        let j = i + 1;
        let numString = "";
        if (/[a-zA-Z]/.test(s[i]) && !(s[i] in myHash)) {
            myHash[s[i]] = 0;
        }
        while (!/[a-zA-Z]/.test(s[j])) {
            numString += s[j];
            j++;
        }
        myHash[s[i]] += parseInt(numString);
        i = j - 1;
    }
    const keyArr = Object.keys(myHash).sort();
    for (let i = 0; i < keyArr.length; i++) {
        myString += keyArr[i] + myHash[keyArr[i]];
    }
    return myString;
}

console.log(rehash(str1))

/*****************************************************************************/

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */

function lengthOfLongestSubString(str) {
    var record = 0;
    var tracker = 0;
    var newArray = [];
    for (let i = 0; i < str.length; i++) {
        tracker = i;
        while (!newArray.includes(str[i]) && str[i] != undefined) {
            newArray.push(str[i]);
            i++;
        }
        if (newArray.length > record) {
            record = newArray.length;
        }
        i = tracker;
        newArray = [];
    }
    return record;
}

console.log(lengthOfLongestSubString(str4))


/*****************************************************************************/
/*
Write me a function that will take in a string and return another string
    with all the letters in each word reversed (but the words in the original order still).
    e.g. "Hello world" -> "olleH dlrow"
*/

let s = "Hello world";

function isWhitespace(letter){
    return [' ', '\n', '\t'].includes(letter)
}

function reverseWords(text) {
    let currentWord = []
    const result = []

    // Split text string into an array of letters and iterate over each letter
    text.split('').forEach(letter => {
        if (isWhitespace(letter)) {
            // If letter is whitespace, add currentWord in reverse order to the result, letter by letter
            // since we're using .pop() it will take the elements from the end of the array to the front
            while (currentWord.length > 0) {
                result.push(currentWord.pop())
            }

            // Add the whitespace letter after currentWord (reversed)
            result.push(letter)
        } else {

            // If the letter is not whitespace, add it to the currentWord
            currentWord.push(letter)
        }
    })

    // After looping through the whole set of letters, check if we have a word that needs to be added
    // in case the string did not end in whitespace.
    while (currentWord.length > 0) {
        result.push(currentWord.pop())
    }

    // Join the array of letters back into a single string
    return result.join('')
}
console.log(reverseWords(s));

// Optimized Reverse String without string concatenation
let s = "Hello world";

function revStr(str) {
    let temp = [];
    let res = [];

    // iterate through each character
    str.split('').forEach(letter => {
            while(temp.length > 0) {
                res.push(temp.pop())
            } 
            temp.push(letter)
    });
    // once loop is done iterating through characters, check if there is any
    // chars in temp that were missed and push them to res variable if there is
    // while(temp.length > 0) {
    //     res.push(temp.pop())
    // }
    // reverse array
    for(let i = res.length-1; i >= 0; i--) {
        temp.push(res[i])
    }
    return temp.join('');
}

console.log(revStr(s));




let x = ['1', '2', '15', '-7', '300']
let y = x.sort()

console.log(y);


let z = "abcdefg"
function rec(str){
    if (str.length <= 1) {
        return str;
    }
    let firstChar = str.charAt(0)
    let lastChar = str.slice(1)
    console.log(lastChar);

    return rec(lastChar) + firstChar
}
console.log(rec(z));


const promises = [3, 2, 1].map(d => (
    new Promise(resolve => {
        setTimeout(() => {
            resolve(d)
        })
    }, d * 1000)
))

Promise.race(promises).then((val) => {
    console.log(val);
})


function b(sent) {
    let root = {}
    sent.forEach(s => {
        let base = root
        s.split(' ').forEach(w => {
            if (base[w] === undefined){
                base[w] = {}
            }
            base = base[w]
        })
    })
    return root;
}

let tree = b(['Hello world', 'Hello there'])

console.log(tree);


function func(a, b) {
    a += 1
    b.push(1)
}
const a = 0
const b = []
func(a, b)
console.log(a, b);


function del(it) {
    for(var i =0; i < it.length; i++) {
        if(it[i].length == 0) {
            console.log(it);
            it.splice(i, 1);
        }
    }
}

var names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
del(names);
console.log(names);


const f = n => n <= 1 ? 1 : n * f(n-1)

let g = f(4);

console.log(g);


let words = ["Hello", "World"];

words.forEach((word, i) => {
    (words[i] = word.split('').reverse().join('').toLowerCase())
    console.log(words[i]);
})
// console.log(words);


function hasPosNeg(arr) {
    let hasPos = false
    let hasNeg = false

    arr.forEach(num => {
        hasPos = num > 0
        hasNeg = num < 0
    })
    return [hasPos, hasNeg]
}

let test = [0,1,2]

console.log(hasPosNeg(test));


let t = [1,3,5,2,4]

function _(func, item) {
    let i = 0
    for (let it of item){
        if (func(it)) {
            item[i] = it
            i += 1
        }
    }
    item.splice(i)
}
console.log(_(t));

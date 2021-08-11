// Count Positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] > 0) {
        countPositives++;
    }
}
console.log("there are " + countPositives + " positive values");


// Code Flow Functinos
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);



// Return of Return
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);


// Reverse an Array
var arr1 = ["a", "b", "c", "d", "e"];

var arr2 = arr1.reverse();
console.log(arr1)

// Create a function to Reverse an array - always need a FOR loop for an array
function sample(arr){
    var temp;
    var lastElem = arr.length - 1;
    for(var i = 0; i < arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[lastElem -i];
        arr[lastElem - i] = temp;
    }
    return arr;
}
var myArr = ["a", "b", "c", "d", "e"];
console.log(sample(myArr));
console.log(myArr)


// sample
function reverse(arr){
    var test =[]
    for(let i=arr.length-1;i>=0; i--){
        test.push(arr[i])
    }
    return test;
}
console.log(reverse(["a", "b", "c", "d", "e"]))

// Math Operations
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


// Dice Roller
function d6() {
    var roll = Math.ceil(Math.random() * 5);

    return roll;
}
    
console.log("The player rolled: " + d6());


// Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function Oracle(){
    var oraclesReply = lifesAnswers[Math.ceil(Math.random() * lifesAnswers.length)];

    return oraclesReply;
}

console.log(Oracle());


//W2D4 Algos -----------------------------------------------------------

var arr = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

// We can console.log the `8` in this array if we
console.log(arr[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr, value){
    for(var i = 0; i < arr.length; i++){
        for(var x = 0; x < arr[i].length; x++){
            if(arr[i][x] == value) {
                return true;
            }
        }
    }
    return false;
}
console.log(isPresent2d(arr, 7));


// complete the following function
function flatten(arr) {
    var flat = [];
    // your code here
    for(var i = 0; i < arr.length; i++){
        for(var x = 0; x < arr[i].length; x++){
            flat.push(arr[i][x]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// W2D2

// What are objects
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

console.log()

// Arrays of Objects
var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// Console.log the pokémon objects whose id is evenly divisible by 3
for(var i=0; i < pokémon.length; i++){
    if(pokémon[i].id % 3 == 0){
        console.log(pokémon[i].name);
    }
}

// Console.log the pokémon objects that have more than one type
for(var i=0; i < pokémon.length; i++){
    if(pokémon[i].types.length > 1){
        console.log(pokémon[i].name)
    }
}

// Console.log the names of the pokémon whose only type is "poison"
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types == "poison"){
        console.log(pokémon[i].name);
    }
}

// console.log the first type of all the pokémon whose second type is "flying"
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types[1] == "flying"){
        console.log(pokémon[i].types[0]);
    }
}


// W3D1 -----------------------------------------------------------
/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
*/

// Function 1
function acronym(str) {
    acro = "";
    if(str[0] !== ' '){
        acro += str[0].toUpperCase();
    }
    for(var i=0; i<str.length; i++){
        if(str[i] === ' ' && i+1<str.length){
            acro += str[i+1].toUpperCase();
        }
    }
    return acro;
}

// Function 2
function acronym2(str) {
    var newAcro = "";
    for(var i = 0; i <str.length; i++){
        if(i == 0 && str[i] != " "){
            newAcro += str[i];
        } else if(str[i] != " " && str[i-1] == " "){
            newAcro += str[i];
        }
    }
newAcro = newAcro.toUpperCase();
return newAcro;
}

var str1 = " there's no free lunch - gotta pay yer way. ";
var str2 = "Live from New York, it's Saturday Night Live!";

console.log(acronym(str1));
console.log(acronym(str2));


//Reverse a string ----------------------------------------
var str1 = "creature";
var str2 = "dog";

// function 1
function reverseString(str) {
    return str.split('').reverse().join('')
}

// function 2
function reverseString2(string) {
    let reversed = '';
    for(let i = string.length-1; i >=0; i--) {
        reversed += string[i];
    }
    return reversed
}

// function 3
function backwards(str){
    newStr = '';
    for(var i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString2(str1));

// W3D2 --------------------------------
/* 
    Given in an alumni interview in 2021.
    String Encode
    You are given a string that may contain sequences of consecutive characters.
    Create a function to shorten a string by including the character,
    then the number of times it appears. 


    If final result is not shorter (such as "bb" => "b2" ),
    return the original string.
    
    const str1 = "aaaabbcddd";
    const expected1 = "a4b2cd3";
    
    const str2 = "";
    const expected2 = "";
    
    const str3 = "a";
    const expected3 = "a";
    
    const str4 = "bbcc";
    const expected4 = "bbcc";
    
    const str5 = "aaaabbcdddaaa";
    const expected5 = "a4b2cd3a3";

    const str6 = "aabbbaaaaccdddd";
    const expected6 = "a2b3a4c2d4";

    const str7 = "hellowoooorld"
    const expected7 = "hel2owo4rld";


*/

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs only if the
 * character occurs more than one time.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
*/
function encodeStr(str) {
    
}
/* 
    String Decode  

    const str1 = "a3b2cd3";
    const expected1 = "aaabbcddd";

    const str2 = "a3b2c12d10";
    const expected2 = "aaabbccccccccccccdddddddddd";

    HINT: isNaN(someValue)
    Example: isNaN("yes") => true
    isNaN("8") => false
*/
/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    
}

// W3D3 --------------------------------
/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation, or capitalization
*/
const str2 = "racecar";

const str3 = "Dud";

function isPalindrome(str){
    for (var i = 0; i < str.length/2; i++){
        // this is comparing 2 index starting from 0 and the last going forward
        if (str[i] == str[str.length - 1]){
            return true;
        }
        return false;
    }
}

console.log(isPalindrome(str3))

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;


// W3D4

/*
Given a sorted array of page numbers where a term appears,
produce an index string.
Consecutive pages should form ranges separated by a hyphen
*/
var input = [1, 5, 6, 7, 8, 9, 10, 14, 22, 23, 24, 25, 27];

function bookIndex(arr){
    var temp = [];
    for(var i = 0; i < arr.length; i++){
        if (arr[i]+i == arr[i+1]){
            var start = arr[i];
                while(arr[i]+1 == arr[i+1]){
                    i++;
                }
                var end = arr[i];
                temp.push(start + "-" + end)
        } else {
            temp.push(arr[i]);
        }
    }
    return temp.join();
}

console.log(bookIndex(input))


// W3D5
/*
    Generate Coin Change

    Given a number of U.S. cents, return an object with the optimal 
    configuration of coins.

*/
var input = 173;

function generateCoinChangeObject(cents){
    output = [];
    temp = input % 25;
    output['quarters'] = Math.floor(input/25);
    temp2 = temp %10;
    output['dimes'] = Math.floor(temp / 10);
    temp3 = temp2 % 5;
    output['nickels'] = Math.floor(temp2 / 5);
    output['pennies'] = temp3

    return output
}

console.log(generateCoinChangeObject(input))


// W4D1

/* 
    Two challenges!

    addToFront: Write a method of the SLList class that accepts a value, and adds a node with that 
    value to the front of the list. 
    
    Steps:
        1. Create a new node
        2. Assign that node's next attribute to the list's current head
        3. Assign the list's current head to the new node

    KEEP IN MIND: What dictates that a node is the first element in the list? Might need to reset that.

    addToBack: Write a method of the SLList class that accepts a value, and adds a node with that
    value to the BACK of the list.

    Steps:
        1. Create a new node
        2. Start at the head of the list
        3. Run to the last node
        4. Set the last node's next attribute to the new node
    EDGE CASE: What if the list is empty? How do we even know if the list is empty?


    BONUS IF YOU ARE DONE QUICKLY:
    contains: Write a method of the SLList class that accepts a value, and returns a boolean based
    on whether or not a node with that value exists in the list

    Steps:
        1. Start at the head of the list
        2. Check if the value of the node we're looking at equals the value passed in
        3. If it does, return true
        4. If not, go to the next node.
        5. If we checked every single node and we're still running the method, the value does not exist in the list.
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        // Step 1: Create a new node
        var newNode = new SLNode(value);

        // Step 2: Assign its .next to the current head
        newNode.next = this.head;

        // Step 3: Reassign the list's head to the node we just created
        this.head = newNode;

        // Step 4: we done
        return this;
    }

    addToBack(value) {
        // EDGE CASE: List is empty
        if(this.head == null) {
            // If the list is empty, the head is null. If the head is null, there is no node in the list.
            // Basically, if the list is empty, adding to the back is the same as adding to the front,
            // and our addToFront method is done, so
            return this.addToFront(value);
        }
        // Step 1: Create a new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next attribute to be the new node we just created earlier
        runner.next = newNode;

        // Step 5: We done.
        return this;
    }

    contains(value) {
        // Step 1: Start at the head of the list
        var runner = this.head;

        while(runner != null) { // we're checking if runner is null instead of runner.next is null because we want to make sure we make our 
            // comparison on the last node as well
            // Step 2: Check if each node contains the value we're looking for
            if(runner.value == value) {
                // Step 3: If it does, return true
                return true;
            }

            // Step 4: If not, move runner over 1
            runner = runner.next;
        }

        // Step 5: If we finished our while loop, the value does not exist
        return false;
    }
}

var newList = new SLList();

newList.addToBack(5).addToBack(1).addToFront(3);

console.log(newList)

// WD4D2


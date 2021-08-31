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
    String Encode - Compress String
    Create a function to shorten a string by including the character,
    then the number of times it appears. 
    
    const str1 = "aaaabbcddd";
    const expected1 = "a4b2cd3";
    
    const str2 = "";
    const expected2 = "";
*/

function encodeStr(str) {
    // First, we need the string we'll encode our message into
    var encoded = "";

    // Obviously, we need to loop through the characters of the string given to us
    for(var i = 0; i < str.length; i++) {
        // Ok, so how do we do this? Well, we'll need to keep track of the character, then how many times it appears.
        // Then, add the character followed by the number of times it appears to our encoded string, then move the iterating
        // variable forward that many times.

        // what character?
        var char = str[i];
        // how many times consecutively?
        var count = 1;
        // keeping track of the index of each consecutive character
        var j = i + 1;
        // well, we want to keep adding to count for each consecutive character that matches our char
        while(str[j] == char){
            // if the character at j is our character, increment our counter, and our j index
            count++;
            j++;
        }
        // Now, we want to add it to our encoded string as, for example, if char is "a" and count is 4, a4.
        // But, if count is 1, just add the character.
        if(count == 1) {
            encoded += char;
        } else {
            encoded += char + count;
            // Now, we need to increment i by enough characters so it skips over the consecutive
            // instances of char. If, for example, we had "aaaabb", when i is 0, we need to move it
            // up to 4. count is 4. so i += count should do the trick.
            // HOWEVER!! At the end of this iteration of the for loop, i will increment by 1 anyways.
            // So i += count-1;
            i = j - 1;
        }
    }
    // BUT REMEMBER THE CAVEAT FROM THE PROMPT!!
    // If the encoded string is not shorter than the original string, return the original string
    if(encoded.length >= str.length) {
        return str;
    } else {
        return encoded;
    }
}

/* 
    String Decode  

    const str1 = "a3b2cd3";
    const expected1 = "aaabbcddd";

    const str2 = "a3b2c12d10";
    const expected2 = "aaabbccccccccccccdddddddddd";
*/
function decodeStr(str) {
    // Step 1: We need our decoded variable
    var decoded = "";
    // Step 2: Iterate through the characters in the string
    for(var i = 0; i < str.length; i++) {
        // Step 3 (optional): Store the character in a variable for easier checks
        var char = str[i];
        // Step 4: Create a count string. The numbers in following the character will be strings, and there may be multiple digits,
        // so store it in a string
        var countStr = "";
        // Step 5: We need a new index variable to check the following characters
        var j = i + 1;
        // Step 6: Check the number following the character (if there even is a subsequent number)
        // We'll do this by continuing to add the numerical characters to our countStr as long as it's a number
        while(!isNaN(str[j])) {
            countStr += str[j];
            j++;
        }
        // Step 7: Make an actual count variable
        var count;
        // Step 8: If countStr is an empty string, set count to the number 1, otherwise convert the string to its number
        if(countStr == "") {
            count = 1;
        } else {
            // parseInt will convert a stringed number to the actual number
            count = parseInt(countStr);
        }
        // Step 9: add char to decoded count number of times
        for(j = 0; j < count; j++) {
            decoded += char;
        }
        // Step 10: Increment i to skip over the number. 
        i += countStr.length;
    }
    // Step 11: Return the decoded message
    return decoded;
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
        // Step 1: Create a new node for our new head
        var newHead = new SLNode(value);

        // Step 2: Assign the new node's .next attribute to be the current list's head node
        newHead.next = this.head;

        // Step 3: Reassign the list's head node to be the new node
        this.head = newHead;
        
        return this;
    }

    addToBack(value) {
        // EDGE CASE: If the list is empty, adding to the back is the same as adding to the front
        if(this.head == null) { // the list is empty if there IS no head
            // and we've already built out our method for adding to the front, soooo
            this.addToFront(value);
            return this;
        }

        // Step 1: Create our new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next to be the new node
        runner.next = newNode;
        return this;
    }

    contains(value) {
        // EDGE CASE: What if the list is empty?
        if(this.head == null) {
            // If there's nothing in the list, it can't contain a node with any value. Duh.
            return false;
        }

        // Start at the head of the list
        var runner = this.head;

        // We need to check every single node
        while(runner != null) {
            // Check if the value of runner matches the value passed in
            if(runner.value == value) {
                // If it does, we're done
                return true;
            } else { // Otherwise, we need to move runner down the line
                runner = runner.next;
            }
        }

        // If we're still here, then we've checked every node, so we're done, and it's not there.
        return false;
    }

    printList() {
        if(this.head == null) {
            console.log("List is empty");
            return;
        }
        var string = "H: ";
        var runner = this.head;

        while(runner != null) {
            string += runner.value + " -> ";
            runner = runner.next;
        }
        console.log(string);
    }

    removeFront() {
        // If the list is empty, there's nothing to remove, so we'll just return null
        if(this.head == null) {
            return null;
        }
        // We need to keep track of the node we are planning on removing because we want to 
        // ensure that we can return its value. Once we reassign the head, if there is no variable
        // referencing the current head, we lose it forever.
        var removed = this.head;
        // Set the head to be the second node
        this.head = removed.next;
        // This one is kind of optional. Garbage collection will throw away original head once nothing is referencing it anymore
        removed.next = null;
        // And finally, return the value of the node we remove
        return removed.value;
    }

    removeBack() {
        // EDGE CASE: If the list is empty, there's nothing to remove.
        // If the list only contains 1 thing, the back is the front.
        // Both cases are handled by our removeFront() method, soooo
        if(this.head == null || this.head.next == null) {
            return this.removeFront();
        }

        // Start our runner at the first node (always this.head)
        var runner = this.head;

        // Now, we want to stop at the second to last node.
        // while(runner.next != null) {
        //      runner = runner.next;
        // }
        // will get runner to the LAST node.
        // So:
        while(runner.next.next != null) {
            runner = runner.next;
        }
        // this will get us to the SECOND TO LAST node.

        // Because we want to remove the last node, and runner
        // is at the second to last node, let's store the last node (runner.next)
        // in a variable
        var removed = runner.next;
        // Then, to remove that last node, we just need to set runner.next to null
        runner.next = null;
        // And finally, return our removed node's value!
        return removed.value;
    }

    moveMinToFront() {
        var min = this.head;
        var runner = min.next;
        while (runner.next != null){
            if (runner.value < min.value){
                runner = 
                this.head = runner;
                return this;
            }
        }
    }
    
    moveMaxToBack() {

    }
}

var myList = new SLList();
myList.addToBack(7).addToBack(2).addToBack(3).addToBack(1).addToBack(4);

myList.moveMinToFront()
myList.printList() // expected: H: 1 -> 7 -> 2 -> 3 -> 4 ->


// Reverse an array ----------------
var arr = [1, 2, 3, 4, 5];

// built-in function for reverse
var newArr = arr.reverse();
console.log(newArr)

function reverseArr(array){
    // Create an empty variable to push each value iterating in the for loop
    var temp = [];
    // Iterate through the array starting from the end with the decrementor
    for(var i = array.length-1; i >= 0; i--){
        // Push each value per loop into the empty variable
        temp.push(array[i]);
    }
    // After the loop completes, return the variable 
    return temp;
}
console.log(reverseArr(arr))

for(var i=1; i <= 100; i++){
    if(i % 15 == 0){
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0){
        console.log('Fizz');
    }
    else if(i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i)
    }
}

for(var i = 1; i <= 100; i++){
    (i % 15 == 0 ? console.log("Fizzbuzz") : console.log(i));
}

var testOne = "abcdefg";

function revStr(str){
    // initialize an empty string variable
    let revStr = "";

    // loop through data from tail to head
    for(let i = str.length -1; i >= 0; i--) {
        // add each character to the variable
        revStr += str[i];
    }
    // return variable
    return revStr;
}

var revTestOne = revStr(testOne)
console.log(revTestOne)


let i = 1;
while(i != 101){
    if(i % 15 == 0) console.log("Fizzbuzz")
    else if(i % 5 == 0) console.log("Buzz")
    else if(i % 3 == 0) console.log("Fizz")
    else console.log(i)
    i++;
}

var sample = ["a", "b", 'c', 'd', 'e']

function revArr(arr){
    let newArray = [];
    for(let i = arr.length -1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

var newSample = revArr(sample)
console.log(newSample)

// Singly Linked List ===========

// Create a class to construct a new node instance
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// Create singly linked list class
class SinglyLinkedList {
    // constructs a new instance of an empty linked list that inherits all the methods
    constructor(){
        this.head = null;
    }

    isEmpty(){
        // return this.head === null;
        return !this.head;
    }

    toArr(){
        const arr = [];
        let runner = this.head;

        while(runner){
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    insertAtBack(data){
        // create a new node
        let newNode = new Node(data);

        // check if empty
        if(this.isEmpty()){
            this.head = newNode;
        } else {
            // create a runner
            let runner = this.head;
            // loop through list
            while(runner.next != null){
                runner = runner.next;
            }
            // assign runner.next to new node
            runner.next = newNode;
        }
        return this;        
    }

    insertAtFront(data) {
        let firstNode = new Node(data);

        if(this.isEmpty()){
            this.head = newNode;
        } else {
            firstNode.next = this.head;
            this.head = firstNode;
        }
        return this;
    }

    removeHead(){
        // check if empty
        if(this.isEmpty()) return null;

        // move head pointer to head.next
        this.head = this.head.next;
        return this;
    }

    average(){
        if(this.isEmpty()) return null;

        let runner = this.head;
        let value = 0;
        let count = 0;
        while(runner != null){
            value += runner.data;
            count++;
            runner = runner.next;
        }
        return value / count;
    }

    removeBack(){
        // edge case - check if list is empty
        if(this.isEmpty()) return null;

        // create runner variables
        let runner = this.head;
        // loop through list and stop at second to last node
        while(runner.next.next != null){
            runner = runner.next;
        }
        // initialize a new variable to equal null
        // let removed = runner.next;
        runner.next = null;
        // to return removed node data, use line 182
        // return removed.data;
        return this;
    }

    // Determines whether or not the given search value exists in this list.
    contains(val){
        if(this.isEmpty()) return false;

        // create runner variable
        let runner = this.head;
        // loop through list
        while(runner != null){
        // check if value of runner matches value passed in the parameter 
            if(runner.data == val){
                // if it exists, we're done
                return true;
            } else {
                // if it does not exist, move runner down the list
                runner = runner.next;
            }
        }
        // if we're here, every node was checked and val did not exists
        return false;
    }

    // Recursively determine wheter or not the given search value exists on the list
    containsRecursive(val, current = this.head) {
        // check if current matches value
        if(current.data == val){
            // if value exists, return true
            return true;
        } else if(current.next == null){
            // else if return false if current is at the end of the list
            return false;
        }
        // return function
        return this.containsRecursive(val, current.next);
    }

    // Recursively finds the maximum integer data of the nodes in this list.
    recursiveMax(runner = this.head, maxNode = this.head){
        if(this.head === null) return null;
        if(runner === null) return maxNode.data;
        if(runner.data > maxNode.data) maxNode = runner;
        return this.recursiveMax(runner.next, maxNode);
    }

}

let listIsEmpty = new SinglyLinkedList();
let testList = new SinglyLinkedList().insertAtBack(5).insertAtBack(10).insertAtBack(2);

// console.log(listIsEmpty.isEmpty());
// console.log(testList.isEmpty());
// console.log(testList.toArr());
// console.log(testList.average());
console.log(testList.recursiveMax());
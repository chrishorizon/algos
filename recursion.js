/*
    Using Recursion, find the nth value of the fibonacci sequence.

    Fibonacci sequence:

    0, 1, 1, 2, 3, 5, 8, 13, ... 

    Where the first 2 numbers are 0 and 1, and then each consecutive value is the sum 
    of the previous 2 numbers

    So findNthFibNum(7) would return 8, because 8 is the 7th number in the fibonacci sequence.
*/

function fib(num){
    if (num == 0){
        return 0;
    }
    return num + fib(num-1)
}
console.log(fib(4))


function findNthFibNum(num) {
    if (num <= 1) return 0
    if (num <= 2) return 1
    return findNthFibNum(num-1) + findNthFibNum(num-2)
}

console.log(findNthFibNum(6))


/* Recursive Factorial */

function factorialNum(num){
    if(num <= 1){
        return 1;
    }
    return num * factorialNum(num-1)
}
// Explanation: 1*2*3 = 6
console.log(factorialNum(3))

/* Recursively reverse a string
    helpful methods: str.slice(beginIndex[, endIndex]) */

function revStr(str){
    if(typeof str !== 'string') return "Not a string";
    if(str == '') return '';
    return str.slice(-1) + revStr(str.slice(0, -1))
}
const str1 = "abc";
const str2 = "";
const str3 = 5;

console.log(revStr(str1))
console.log(revStr(str2))
console.log(revStr(str3))

/*
    Recursive Binary Search
    Input: SORTED array of ints, int value
    Output: bool representing if value is found
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum, left_idx = 0, right_idx = sortedNums.length -1) {
    let mid = Math.trunc((left_idx + right_idx) /2);
    if (sortedNums[mid] == searchNum){
        return true;
    }
    if (left_idx > right_idx){
        return false
    }
    if (sortedNums[mid] > searchNum){
        right_idx = mid -1;
    } else{
        left_idx = mid +1;
    }
    return binarySearch(sortedNums, searchNum, left_idx, right_idx)
}

console.log(binarySearch(nums1, searchNum1, 0, nums2.length-1));

/* ----------------------------------------- */

function grid(n, m){
    if(n == 1 || m == 1){
        return 1
    }
    return grid(n, m-1) + grid(n-1, m)
}

console.log(grid(5,5))


/* THE GOOGLE ROBOT INTERVIEW QUESTION!!

Scientists have opened a portal to another dimension.
In that dimension, the plane of existence is just an infinite line.

Scientists want to send two robots through to do something. Idk what.

But when they are sent through this portal, they don't enter that plane of existence
in the same place. In fact, they land in entirely different places. 

Because this is a weird place, the robots actually land on top of the parachutes they 
used to float down (??? I know) 

For some reason, these scientists forgot to put any significant amount of money towards
the software development side of this experiment.

So here's the deal. Two robots, land on top of their parachutes, and have exactly the same code on them.

The code can comprise of a combination of our basic tool kit (setting variables, for loops, while
loops, if/else if/else checks, etc.), and a handful of predefined methods, which are as follows:

moveLeft(){} -> Moves the robot to the left one unit of distance in one unit of time.
moveRight(){} -> Moves the robot to the right one unit of distance in one unit of time.
wait(){} -> The robot stays in place for one unit of time.
parachuteCheck(){} -> Returns a boolean for whether or not the robot is currently on top of a parachute. Takes 
.                     one unit of time.
robotCheck(){} -> Returns a boolean for whether or not the robot has found another robot. Takes one unit 
.                 of time.


A piece of clarification!!

When I say the same code is on both robots, what I mean is that the program runs on both robots.
So if the program is just
moveLeft();

Both robots will move left.

SO!!! The goal is to write a program that GUARANTEES (this assumes the robots have an infinite power source)
that they will find each other.

DO NOT WRITE LOGIC FOR THE FOLLOWING 5 FUNCTIONS!
*/
function moveLeft(){
    //Move left 1 unit of distance in 1 unit of time.
}

function moveRight(){
    //Move right 1 unit of distance in 1 unit of time.
}

function wait(){
    //Stay in place for 1 unit of time.
}

function parachuteCheck(){
    //Check if on a parachute in 1 unit of time and return boolean based on results
}

function robotCheck(){
    //Check if you've met the other robot in 1 unit of time and return boolean based on results.
}

// THIS IS THE FUNCTION YOU WANT TO WRITE LOGIC FOR!!!
function initialize() {
    moveLeft();

    while(!parachuteCheck()){ // 1 unit of time
        moveLeft(); // 1 unit of time
        wait(); // 1 unit of time
        if(robotCheck()){  // 1 unit of time
            return true;
        } // total 4 units of time
    }
    while(!robotCheck()){ // 1 unit of time
        moveLeft(); // 1 unit of time
    } // total 2 units of time
    return true
}
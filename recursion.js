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

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
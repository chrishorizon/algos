// Reverse a string
let randomStr = "abcdefg";

function reverseString(str) {
    // Declare a variable and assign empty string;
    let result = "";

    // Loop through string, starting at last idx
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
// console.log(reverseString(randomStr));


/* TWO SUM
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
*/

let numsArr = [2, 7, 11, 15]; // [0,1]

function twoSum(arr, target) {
    // Initialize a new map
    let result = new Map();
    // Edge cases
    if (arr == null || arr.length <= 1) return result;

    // Loop through array
    for (let i = 0; i <= arr.length; i++) {
        // if result contains current idx, return idx's
        if (result.has(arr[i])) {
            return [result.get(arr[i]), i];
        } else {
            result.set(target - arr[i], i);
        }
    }
    return result;
}
// console.log(twoSum(numsArr, 9));


// 3Sum
let num = [-1,0,1,2,-1,-4];
let sorted = [-4, -1, -1, 0, 1, 2]

// Container With Most Water
var waterLevel = [3, 5, 1, 10, 6, 6];

// Best Time to Buy and Sell Stock
let prices = [7,1,5,3,6,4]; // 5

// Contains Duplicate
let numsArr1 = [2, 5, 7, 10, 3, 2]; // true
let numsArr2 = [2, 5, 7, 10, 3]; // false

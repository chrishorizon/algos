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


/* **** TWO SUM ****
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
// console.log(twoSum(numsArr, 17));


/* **** 3SUM ****
* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] that == 0.
*/
let num = [-1,0,1,2,-1,-4]; // sorted [-4, -1, -1, 0, 1, 2]

function threeSum(arr) {
    // declare variable and assign an empty array
    let result = [];
    // sort array
    arr.sort((a, b) => a - b);
    // EDGE CASE - if arr is null or less than 3, return
    if (arr == null || arr.length < 3) return result;

    let right = arr.length-1;

    // for loop through array
    for (let i = 0; i < arr.length - 2; i++) {
        // if current idx equals previous idx, continue
        if (arr[i] === arr[i-1]) continue;
        let left = i + 1;
        
        while (left < right) {
            // Declare variable with sum of i, j, k index's
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (arr[left] === arr[left + 1]) left++;
                while (arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            }
            // if sum var is less than 0, move left. If greater, than decrement right
            else if ( sum < 0) {
                left++;
            } else { right--; }
        }
    }
    return result;
}
// console.log(threeSum(num));


// Container With Most Water
var waterLevel = [3, 5, 1, 10, 6, 6];

// Best Time to Buy and Sell Stock
let prices = [7,1,5,3,6,4]; // 5

// Contains Duplicate
let numsArr1 = [2, 5, 7, 10, 3, 2]; // true
let numsArr2 = [2, 5, 7, 10, 3]; // false

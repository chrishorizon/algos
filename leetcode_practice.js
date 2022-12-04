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
            else (sum < 0) ? left++ : right--;
        }
    }
    return result;
}
// console.log(threeSum(num));


/* **** Container With Most Water ****
* Given n non-negative integers a1, a2, ..., an , where each represents a point at
* coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the
* line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a
* container, such that the container contains the most water.
*/
var waterLevel = [3, 5, 1, 10, 6, 6];

function maxArea(arr) {
    // EDGE CASE - if null, return null
    if (arr == null) return null;

    // declare result var and assign 0 value
    let result = 0;

    // declare var and assign left and right idx
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // assign max area to a variable
        let maxArea = (right - left) * Math.min(arr[left], arr[right]);
        // re-assign max area to result var
        result = Math.max(result, maxArea);

        // move idx with the lowest value
        (arr[left] < arr[right]) ? left++ : right--;
    }
    return result;
}

function maxArea(arr) {
    // Edge case - if variable not assigned a value
    if (arr == null) return null;

    // declare result var and assign 0 value
    let result = [];

    // declare var and assign left and right idx
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        result = Math.max(result, (right - left) * Math.min(arr[left], arr[right]));

        arr[left] < arr[right] ? left++ : right--;
    }
    return result;
}
// console.log(maxArea(waterLevel));


/* **** Best Time to Buy and Sell Stock ****
* You are given an array prices where prices[i] is the price of a given stock on the ith day.
* Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
let prices = [7,1,5,3,6,4]; // 5

function maxProfit(prices) {
    // Edge case 
    if (prices == null) return null;

    // declare variable, assign 0 value
    let profit = 0;

    // for loop start at idx 0
    for (let i = 0; i <= prices.length; i++) {
        // declare variable with i+1
        let left = i + 1;

        // loop and compare if price[i] is less than next day(s), and assign the profit value 
        while (prices[i] < prices[left]) {
            profit = Math.max(profit, prices[left] - prices[i]);
            left++;
        }
    }
    return profit;
}

function maxStockProfit(prices) {
    // edge case
    if (prices == null) return null;

    // declare variable and assign 0 value
    let profit = 0;

    // declare variable to assign 0 idx
    let low = prices[0];

    // loop through array
    for (let i = 0; i < prices.length; i++) {
        // check if low is greater than current idx, if so, re-assign with new lower value
        if (low > prices[i]) {
            low = prices[i];
        }

        // check if profit is less then low minus prices[i], if so, re-assign
        if (profit < prices[i] - low) {
            profit = prices[i] - low;
        }
    }
    return profit;
}
// console.log(maxStockProfit(prices));


// **** Contains Duplicate ****
let numsArr1 = [2, 5, 7, 10, 3, 2]; // true
let numsArr2 = [2, 5, 7, 10, 3]; // false

function containsDup(nums) {
    // edge case
    if (nums == null) return null;

    // sort the nums array
    if (nums.length >= 0 && nums instanceof Array) {
        nums.sort((a, b) => a - b);
    }

    // loop through array
    for (let i = 0; i < nums.length; i++) {
        // check if i equals i + 1, return true
        if (nums[i] == nums[i + 1]) return true;
    }

    return false;
}

function containsDupRef(nums) {
    // edge case
    if (nums == null) return null;

    // declare variable and initialize map
    let result = new Map();

    // loop through array, check if nums[i] is in map
    for (let i = 0; i < nums.length; i++) {
        if (!result.has(nums[i])) {
            result.set(nums[i], i);
        } else {
            return true;
        }
    }
    return false;
}
// console.log(containsDupRef(numsArr1));


/* **** Valid Palindrome ****
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise. */

let s = "A man, a plan, a canal: Panama"; // Output: True

function isPalindrome(str) {
    // edge cases
    if (str == null || typeof str === "number") return false;

    let convertedStr = "";

    // reformat string to remove all non-alpha chars and convert letters to lowercase
    if (typeof str === "string") {
        convertedStr = str.replace(/\W/g, '').toLowerCase();
        // after removing whitespace, if length is still equal to 1, return false
        if (convertedStr.length <= 1) return false;
    }

    let firstIdx = 0;
    let lastIdx = convertedStr.length - 1;

    // loop through string and compare if both first and last idx are equal
    while (firstIdx < lastIdx) {
        if (convertedStr[firstIdx] != convertedStr[lastIdx]) {
            return false;
        }
        firstIdx++; lastIdx--;
    }
    return true;
}
// console.log(isPalindrome(s));
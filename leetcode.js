// ========== Two Sum ========================================================
// given an array of integers nums and an integer target, return indices of the
// two integers such that they add up to target.
var newArr = [4, 6, 9, 12];
var tar = 16;

function twoSum(nums, target){
    // Create a map to store key value pairs
    let sumMap = new Map();

    // iterate through nums list
    for(let i = 0; i < nums.length; i++) {
        // check if nums list is in map variable
        if(sumMap.has(nums[i])){
            // if nums variable is in map, return variable with .get
            return [sumMap.get(nums[i]), i];
        } else {
            // if nums is not in map, set key value pair to map
            sumMap.set(target - nums[i], i);
        }
    }
}
console.log(twoSum(newArr, tar));


// ======= Contains Duplicate =====================
// Given an integer array nums, return true if any value appears at least twice in
// the array, and return false if every element is distinct.

let test1 = [2, 5, 7, 10, 3, 2]
let test2 = [2, 5, 7, 10, 3]

var containsDuplicate = function(nums) {
    // sort nums
    nums.sort();

    // loop through nums
    for(let i=0; i < nums.length-1; i++){
        // return true if 2 consecutive numbers are the same
        if(nums[i] === nums[i + 1]) return true;
    }
    // if loop ends, return false
    return false;
};
console.log(containsDuplicate(test1));


// ======= Best Time to Buy and Sell Stock ======================
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

let prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    // initialize variables for bottom and profit
    let bottom = prices[0];
    let profit = 0;

    // loop though array
    for(let i=0; i < prices.length; i++){
        // if bottom is less than prices[i], set index to bottom variable
        if(bottom > prices[i]){
            bottom = prices[i];
        }
        // if prices[i] - bottom is greater than profit, set it to profit variable
        if(profit < prices[i] - bottom){
            profit = prices[i] - bottom;
        }
    }
    // return profit variable
    return profit;
};
console.log(maxProfit(prices));


// ======== Container With Most Water ===========
// Given n non-negative integers a1, a2, ..., an , where each represents a point at
// coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the
// line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a
// container, such that the container contains the most water.
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length -1;

    while(left < right){
        let min = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(min, maxArea);
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};
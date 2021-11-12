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

var waterLevel = [3, 5, 1, 10, 6]

// O(n)
function maxArea2(height) {
    // initialize 2 variables, left and right - O(1)
    let left = 0;
    let right = height.length - 1;

    // intialize variable to hold the maxArea - O(1)
    let maxArea = 0;

    // while left is less than right - O(n)
    while(left < right){
        // initialize variable with current area
        let min = (right - left) * Math.min(height[left], height[right]);
        // assign max area to maxArea variable
        maxArea = Math.max(min, maxArea);
        
        // if left value is less that right value, increment left, else decrement right
        height[left] < height[right] ? left++ : right--;
    }
    // return maxArea variable
    return maxArea;
}
console.log(maxArea2(waterLevel));


// ====== 3Sum ===================
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let num = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
    // edge case
    let res = [];
    if(nums === null || nums.length < 3) return res;

    // sort array
    nums.sort((a,b) => a-b);

    // initialize const variable with zero value
    const zero = 0;

    // loop through array
    for(let i=0; i < nums.length-2; i++){
        // check condition if nums[i] === nums[i-1] continue
        if(nums[i] === nums[i-1]) continue;
        const target = zero - nums[i];
        // initialize two pointers to start on both ends after i
        let left = i+1;
        let right = nums.length-1;

        // loop while left is less than right until they meet
        while(left < right){
            // initialize left plus right on const variable
            let sum = nums[left] + nums[right];
            // check condition if sum === target
            if(sum === target){
                // push left, right and nums index
                res.push([nums[i], nums[left], nums[right]]);
                // move left and right index if subsequent value is === to current
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right-1]) right++;
                // move left and right index 
                left++;
                right++;
            } else if(sum < target){
                left++;
            } else right--;
        }
    }
    return res;
};
console.log(threeSum(num));


// ===== Product of Array Except Self =================
// Given an integer array nums, return an array answer such that answer[i] is
// equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
/**
 * @param {number[]} nums
 * @return {number[]}
 */

let num = [1,2,3,4];

var productExceptSelf = function(nums) {
    // edge cases
    // if(nums == null || nums.length < 3) return null;

    // initialize empty array
    let res = [];

    // loop through nums array
    for(let i=0, left = 1; i < nums.length; i++){
        // push to res variable
        res.push(left);
        // left times current index
        left *= nums[i];
    }
    // loop from right to left
    for (let i = nums.length -1, right = 1; i >= 0; i--){
        // multiply values in res variable with right current index
        res[i] *= right;
        // multiply right with nums index
        right *= nums[i];
    }

    // return result
    return res;
};

console.log(productExceptSelf(num));
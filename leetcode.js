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

let num = [5, 6, 7, 8];

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


// ===== Maximum Subarray ==================
// Given an integer array nums, find the contiguous subarray (containing at least one number) which
// has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    // initialize two variables, one to hold max and one to hold current index
    let maxCount = nums[0];
    let curr = nums[0];

    // loop through array
    for(let i=1; i < nums.length; i++){
        // assign Math.max to max variable with max + nums[i], nums[i]
        maxCount = Math.max(maxCount + nums[i], nums[i])
        // assign Math.max to current var with max, current
        curr = Math.max(maxCount, curr);
    }
    // return max variable
    return curr;
};
console.log(maxSubArray(nums));


// ===== Find Minimum in Rotated Sorted Array ============
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.
/**
 * @param {number[]} nums
 * @return {number}
 */

let numArr = [4,5,6,7,0,1,2];

// O(log n) binary search
var findMin = function(nums) {
    // edge case if array equals 1 or null, return array
    if(nums.length === 1) return nums[0];

    // we need run a binary search to run algorithm in 0(log n)
    // initialize variable left at start of array and right var at end of the array
    let left = 0;
    let right = nums.length -1;
    
    // loop while left is less than right
    while(left < right) {
        // initialize mid variable
        let mid = left + Math.floor((right - left) / 2);

        // if nums[mid] value is greater than nums[right] value, assign left = mid+1, else assign right = mid
        nums[mid] > nums[right] ? left = mid + 1 : right = mid;
    }
    // return value of nums[left]
    return nums[left];
};
console.log(findMin(numArr));


// ======= Search in Rotated Sorted Array ==============
// There is an integer array nums sorted in ascending order (with distinct values).
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let numsArr = [4,5,6,7,0,1,2];

var search = function(nums, target) {
    // initialize two variables, left at start of array and right at end of the array
    let left = 0;
    let right = nums.length-1; // currently index 6

    // initialize two variables with the values of the left and right index
    let leftVal = nums[left]; // currently value 4
    let rightVal = nums[right]; // currently value 2

    // loop while left is less than right
    while (left <= right) {
        // initialize mid variable
        let mid = left + Math.floor((right - left) / 2); // index 3 (value 7)
        // if nums[mid] equals target, return mid
        if(nums[mid] === target) return mid; // mid holds the index, not the value

        // determine which side of the array is sorted by comparing mid value to left value
        if(nums[mid] >= leftVal) {
            // if target is less than mid and greater than left, move right one down from mid, else move left one up from mid
            target >= leftVal && target < nums[mid] ? right = mid - 1 : left = mid +1;
        } else {
            // else, if target is greater than mid and less than right, move left one up from mid, else move right one down from mid
            target <= rightVal && target > nums[mid] ? left = mid + 1 : right = mid - 1;
        }
    }
    // if loop ends, the target value did not equal nums[mid] value so return -1
    return -1;
};
console.log(search(numsArr, 0));


// ===== Sum of Two Integers ===========
// Given two integers a and b, return the sum of the two integers without using the operators + and -.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
let t = 1;
let e = 4;

var getSum = function(a, b) {
    return a - -b;
};

console.log(getSum(t, e));
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
};

console.log(containsDuplicate(test1));
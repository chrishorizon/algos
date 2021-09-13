// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/

function diagonalDifference(sqrMatrix) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < sqrMatrix.length; i++){
        sum1 += sqrMatrix[i][i]
        sum2 += sqrMatrix[i][sqrMatrix.length-1-i];
    }
    return Math.abs(sum1 - sum2)
}

console.log(diagonalDifference(squareMatrix2))

/* Union Sorted Arrays
Efficiently combine two already-sorted multiset arrays
into a new sorted array containing the multiset union.
Unions by default will take the set of dupes
that has the highest occurrences from one array.
Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const numsA2 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB2 = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
    Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
    because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(sortedA, sortedB) {
    let a = 0;
    let b = 0;
    let arr = [];

    // compare the arrays while both arrays are not at the end
    while (a < sortedA.length && b < sortedB.length) {
        // number in sortedA < sortedB
        if (sortedA[a] < sortedB[b]) {
            arr.push(sortedA[a]);
            a++;
            // number in both array is the same, copy either number, move both index
        } else if (sortedA[a] == sortedB[b]) {
            arr.push(sortedA[a]);
            a++;
            b++;
            // number in sortedB < number in sortedA
        } else {
            arr.push(sortedB[b]);
            b++;
        }
    }
    while (a < sortedA.length) {
        arr.push(sortedA[a]);
        a++;
    }
    while (b < sortedB.length) {
        arr.push(sortedB[b]);
        b++;
    }
    return arr;
}

/* ------------------------------------------------------------------------
* It ain't much, but it's honest work. A worker who measures water level
* fluctuations in a river is asked to find the largest fluctuation in water
* levels during a day, but only for rises in water levels.
    - @param {Array<number>} waterLevels Non-empty .
    - @returns {number} The max water-level rise amount or -1 if none.
*/

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

function measureWaterLevels(waterLevels) {
    var rise = -1;
    var level = waterLevels[0];
    for(var i=1; i < waterLevels.length; i++){
        if(waterLevels[i] - level > rise){
            rise = waterLevels[i] - level;
        }
        if(waterLevels[i] < level){
            level = waterLevels[i];
        }
    }
    return rise;
}
console.log(measureWaterLevels(riverLevels1))

/* Symmetric Differences --------------------------------------------------------------
Given two arrays of ints, return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
    think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg

* @param  {Array<number>} numsA
* @param  {Array<number>} numsB
* Both given sets are multisets in any order (contain dupes).
* @returns {Array<number>} The union of the given sets but excluding the shared
* values (union without intersection).
*/

const test1NumsA = [1, 2];
const test1NumsB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2NumsA = [1, 2, 3];
const test2NumsB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3NumsA = [4, 1, 2, 3, 4];
const test3NumsB = [1, 2, 3, 5, 5, 2];
const expected3 = [4, 5];

function symmetricDifferences(numsA, numsB) {
    let newarr = []
    for (let i = 0; i < numsA.length; i++) {
        if (!numsB.includes(numsA[i])) {
            newarr.push(numsA[i])
        }
    }
    for (let i = 0; i < numsB.length; i++) {
        if (!numsA.includes(numsB[i])) {
            newarr.push(numsB[i])
        }
    }
    return [...new Set(newarr)]
}

console.log(symmetricDifferences(test3NumsA, test3NumsB))

/* ----------------------------------------------------------------------
Given an array of ints, find all the non-consecutive integers
A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
The first element is never considered non-consecutive.
Return an array of objects where each object contains the number itself
and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

function allNonConsecutive(sortedNums) {
    let newArr = [];
    for(let i = 1; i < sortedNums.length; i++){
        if(sortedNums[i] - sortedNums[i-1] !== 1){
            newArr.push({
                "i": i,
                "n": sortedNums[i]
            })
        }
    }
    return newArr;
}

console.log(allNonConsecutive(nums1))


/* 
You are given a list of integers. Find all the consecutive sets of 
integers that adds up to the sum passed in as one of the inputs.
    * @param {Array<number>} nums Unordered nums.
    * @param {number} targetSum
    * @returns {Array<Array<number>>} 2d array where each nested array is a set of
    *    consecutive numbers that add up to the given targetSum. Consecutive in
    *    this context means the numbers whose indexes are one after the other
    *    only.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

function findConsqSums(nums, targetSum) {
    let results = []
    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        idx = i;
        while ((targetSum >= 0 && sum <= targetSum) || (targetSum < 0 && sum >= targetSum)) {
            sum += nums[idx];
            if (sum === targetSum) {
                results.push(nums.slice(i, idx + 1));
            }
            idx++;
        }
    }
    return results;
}

console.log(findConsqSums(nums2, 16))


/* ******************************************************************************************************
    Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    * @param {Array<number>} nums Unordered nums.
    * @param {number} targetSum
    * @returns {Array<number>} The two indexes of the numbers in the given nums that add up to the targetSum.
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

function twoSum(nums, targetSum) {
    let numsTotal = [];
    for(let i = 0; i <= nums.length -1; i++){
        for(let j = i + 1; j <= nums.length -1; j++){
            if(nums[i] + nums[j] == targetSum){
                numsTotal.push(i,j)
            }
        }
    }
    return numsTotal;
}

// Version 2
function twoSum2(nums, targetSum) {
    //create a map to store 1)key: the sum value we need, 2)value: the index of current element
    var sumMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        // if the current element is the sum value we need, we return it
        if (sumMap.has(nums[i])) {
            return [sumMap.get(nums[i]), i];
        }
        // if not, store the key-value pair in hashmap
        sumMap.set(targetSum - nums[i], i);
    }
}

console.log(twoSum2(nums1, 17))

// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    * Returns the k most frequently occurring numbers from the given unordered nums.
    * @param {Array<number>} nums Unordered.
    * @param {number} k Represents the amount of numbers that should be returned.
    * @returns {Array<number>} The k most frequently occurring numbers.
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];

function kMostFrequent(nums, k) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (!dict[nums[i]]) {
            dict[nums[i]] = 1;
        } else {
            dict[nums[i]] += 1;
        }
    }
    let sortable = [];
    for (entry in dict) {
        sortable.push([entry, dict[entry]]);
    }

    sortable.sort((a, b) => {
        return b[1] - a[1];
    });
    console.log(sortable);
    // sortable.slice(0,k)
    let arr = [];
    for (let j = 0; j < k; j++) {
        arr.push(parseInt(sortable[j][0]));
    }
    return arr;
}

console.log(kMostFrequent(nums1, 2))
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
];0.
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


/*****************************************************************************/

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    let newArr = [...arr];
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i])){
            newArr.shift()
        } else break
    }
    return newArr;
}

// Version 2
function dropIt2(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) break;
    }
    return arr.slice(i);
}

// Version 3
function dropIt3(arr, cb) {
    return arr.filter(elem => cb(elem))
}

console.log(dropIt2(nums1, callback2))

/* 
Given to Instructor Neil in an interview
Given a string
return whether or not it's possible to make a palindrome out of the string's characters
What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

function canStringBecomePalindrome(str) {
    let dict = {};
    let count = 0;
    if (str == "") return false;
    for (let i = 0; i < str.length; i++) {
        if (!dict[str[i]]) {
            dict[str[i]] = 1
        } else {
            dict[str[i]] += 1
        }
    }
    for (let entry in dict) {
        if (dict[entry] % 2 == 1) {
            count++
        }
        if (count >= 2) {
            return false
        }
    }
    return true

}
console.log(canStringBecomePalindrome(str4))

/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;


/*****************************************************************************/

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    //greedy algo - starting from the largest length
    // the starting two pointers
    var i = 0;
    var j = heights.length - 1;
    // the starting height index from both sides
    var leftIndex = 0;
    var rightIndex = heights.length - 1;
    var height = 0;
    var max = 0;
    while (i < j) {
        // try to update the height to a higher one
        if (heights[leftIndex] < heights[i]) {
            leftIndex = i;
        }
        if (heights[rightIndex] < heights[j]) {
            rightIndex = j;
        }
        // the height will be the lower one between the two
        height = Math.min(heights[leftIndex], heights[rightIndex]);
        // try to update the max area
        max = Math.max(max, height * (rightIndex - leftIndex));
        i++;
        j--;
    }
    return max;
}

/*****************************************************************************/
/* 
https://leetcode.com/problems/compare-version-numbers/
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 * - Time: O(?).
 * - Space: O(?).
 */

function compareVersionNumbers(v1, v2) {
    var version1 = v1.split(".");
    var version2 = v2.split(".");
    var length = version1.length;
    if (version2.length > length) {
        length = version2.length;
    }
    console.log(version1);
    console.log(version2);

    for (let i = 0; i < length; i++) {
        if (parseInt(version1[i]) > parseInt(version2[i])) {
            return 1;
        } else if (parseInt(version1[i]) < parseInt(version2[i])) {
            return -1;
        } else if (parseInt(version1[i]) == parseInt(version2[i])) {
            continue;
        } else if (version1.length == length) {
            return 1;
        } else if (version2.length == length) {
            return -1;
        }
    }

    return 0;
}

/*****************************************************************************/
/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function amazonMusicRuntime(busDuration, songDurations) {
    let sorted = [...songDurations]
    sorted.sort((a, b) => b - a)
    for (let i = 0; i < songDurations.length; i++) {
        for (let j = i + 1; j < songDurations.length; j++) {
            if (sorted[i] + sorted[j] === (busDuration - 30)) {
                return [songDurations.indexOf(sorted[i]), songDurations.indexOf(sorted[j])]
            }
        }
    }
    return [-1, -1]
}

/*****************************************************************************/

/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: not strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

function canBuildS1FromS2(s1, s2) {
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    let chars1 = s1.split("")
    let chars2 = s2.split("")
    for (let i = 0; i < chars1.length; i++) {
        if (chars2.includes(chars1[i])) {
            let idx = chars2.indexOf(chars1[i])
            chars2.splice(idx, 1)
        } else return false
    }
    return true
}

console.log(canBuildS1FromS2(strA4, strB4))
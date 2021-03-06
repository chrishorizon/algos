/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(nums) {
    for(var j = 0; j < nums.length; j++){
        for(var x = 0; x < (nums.length - j - 1); x++){
            if (nums[x] > nums[x+1]){
                
                // var firstNum = nums[x];
                // nums[x] = nums[x+ 1];
                // nums[x + 1] = firstNum;
                [nums[x+1], nums[x]] = [nums[x], nums[x+1]]
            }
        }
    }
    console.log(nums)
}
bubbleSort(numsRandomOrder)

/*****************************************************************************/

/* 
    https://visualgo.net/en/sorting
        
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums) {

}


/* 
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertionSort(nums) {
    // skip first index(assume it's already sorted)==> start var i with 1
    for (var i = 1; i < nums.length; i++) {
        var curr = i;
        // while the current index is not the first index and the element at the first index is less than the element at the previous index,
        while (curr !== 0 && nums[curr] < nums[curr - 1]) {
            // swap
            [nums[curr - 1], nums[curr]] = [nums[curr], nums[curr - 1]];
            curr--; // keep swapping while going back
        }
    }
    return nums;
}

// Sorting numbers in an array
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points)

/* 
  Merge / Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Efficiently merges two already sorted arrays into a new sorted array. */
function merge(left, right) {
    const arr = [];
    while(left.length && right.length){
        arr.push(left[0] > right[0] ? right.shift() : left.shift())
    }
    // while (left.length) {
    //     arr.push(left.shift())
    // }
    // while (right.length) {
    //     arr.push(right.shift())
    // }
    // return arr;
    return [...arr, ...left, ...right]
}
console.log(merge(sortedA3, sortedB3))

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mergeSort(nums) {
    //base case
    if (nums.length == 1) {
        return nums;
    }
    // slice left and right
    var left = mergeSort(nums.slice(0, nums.length / 2));
    var right = mergeSort(nums.slice(nums.length / 2));
    // forward engeering and recursion
    return merge(left, right);
}

console.log(mergeSort(numsRandomOrder))

/*  Partition Sort----------------
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx but can be any.
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: the index where the left section of smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n^2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums = [1, 17, 12, 3, 9, 13, 21, 4, 27];

// Partition Hoare's Algo
function partition(nums = [], left = 0, right = nums.length - 1) {
    const midIdx = Math.floor((left + right) / 2);
    const pivotVal = nums[midIdx];
    let leftIdx = left;
    let rightIdx = right;

    while (true) {
        while (nums[leftIdx] < pivotVal) {
            leftIdx += 1;
        }

        while (nums[rightIdx] > pivotVal) {
            rightIdx -= 1;
        }

        if (leftIdx >= rightIdx) {
            return rightIdx;
        }

        [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];
        leftIdx += 1;
        rightIdx -= 1;
    }
}

// Partition Version 1
const nums = [1, 17, 12, 3, 9, 13, 21, 4, 27];

const partition = (array, left=0, right = array.length-1) => {
    let pivot = array[Math.floor(left + right) / 2]; // random number between left & arr.length - 1
    while (left < right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        [array[left], array[right]] = [array[right], array[left]]
    }
    return right;
}
console.log(partition(nums));

// Partition Version 2
function partition(nums, left = 0, right = nums.length - 1) {
    var pivot = Math.floor(nums.length / 2); // leave as this for now since partition looks wild otherwise.
    var i = left - 1;
    var j = right + 1;
    while (true) {
        do {
            i++;
        } while (nums[i] < nums[pivot]);
        do {
            j--;
        } while (nums[j] > nums[pivot]);
        if (i >= j) {
            return j;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}
partition(nums)
console.log(nums)

// Quicksort ----------------------------------------
/* Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
    last idx.
    - later these params will be used to specify a sub section of the array to
    partition.
    Steps:
    - start by partitioning the full array
    (use the previously built partition algo).
    - then partition the left side of the array
    (left of the returned partition idx) and the right side
    (right of the returned partition idx), recursively. */

const nums = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected = [1, 3, 4, 9, 12, 13, 17, 21, 27];

function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left >= right) return nums;

    let pivotIdx = partition(nums, left, right);

    quickSort(nums, left, pivotIdx - 1);
    quickSort(nums, pivotIdx + 1, right);

    return nums;
}


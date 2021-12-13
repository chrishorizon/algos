// ====== Bubble Sort =====================

const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort(arr) {
    // loop through i
    for(let i = 0; i < arr.length; i++){
        // nested loop with j
        for(let j = 0; j < arr.length; j++){
            // if i is greater than j, return swap i with j
            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    // console log arr
    console.log(arr);
}
bubbleSort(numsRandomOrder);

// version 2
const numsRandomOrder = [9, 2, 8];

function bubbleSort2(arr){
    // declare i and j variable
    // let i, j;

    // declare len var
    // let len = arr.length;

    // initialize false bool variable
    // let isSwapped = false;

    // loop through arr i
    for(let i = 0; i < arr.length; i++){
        // assign false bool var
        let isSwapped = false;
        // loop through arr j
        for(let j = 0; j < arr.length; j++){
            // check if j is greater than j+1, if true, swap values and assign true to bool var
            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                isSwapped = true;
            }
        }
        // if bool var is true, break
        if(!isSwapped){
            break;
        }
    }
    console.log(arr);
}
bubbleSort2(numsRandomOrder);

// ====== Quick Sort ==============
const nums = [1, 17, 12, 3, 9, 13, 21, 4, 27];

function partition(arr, left = 0, right = arr.length-1){
    // initialize a pivot
    let pivot = arr[Math.floor(left + right) / 2];

    // loop while left is less than right
    while(left < right){
        // while left is less than pivot, increase left index
        while(arr[left] < pivot){
            left++;
        }
        // while right is greater than pivot, increase right index
        while(arr[right] > pivot){
            right--;
        }
        // swap left and right values
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    // return right index
    return right;
}
console.log(partition(nums));

const nums = [1, 17, 12, 3, 9, 13, 21, 4, 27];

function quickSort(arr){
    // edge case, if array contains 0 or 1 value
    if(arr.length <= 1) return arr;

    let pivot = arr[0];

    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort(nums));
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
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort2(arr){
    // declare i and j variable

    // declare len var

    // initialize false bool variable

    // loop through arr i
        
        // assign false bool var

        // loop through arr j

        // check if j is greater than j+1, if true, swap values and assign true to bool var

    // if bool var is true, break
}
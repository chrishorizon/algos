// Reverse an array
var arr = [1, 2, 3, 4, 5];

// built-in function for reverse
var newArr = arr.reverse();
console.log(newArr)

function reverseArr(array){
    // Create an empty variable to push each value iterating in the for loop
    var temp = [];
    // Iterate through the array starting from the end with the decrementor
    for(var i = array.length-1; i >= 0; i--){
        // Push each value per loop into the empty variable
        temp.push(array[i]);
    }
    // After the loop completes, return the variable 
    return temp;
}

console.log(reverseArr(arr))


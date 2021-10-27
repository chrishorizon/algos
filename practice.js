// Reverse an array ----------------
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

var newArr1 = arr1.reverse();

console.log(newArr1)

var arr2 = [1, 2, 3, 4, 5, 8, 10, 20, 50, 100];

function revArr1(arr){
    let chars = [];
    for(var i = arr.length -1; i >= 0; i--){
        chars.push(arr[i])
    }
    return chars;
}

console.log(revArr1(arr2))


for(var i=1; i <= 100; i++){
    if(i % 15 == 0){
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0){
        console.log('Fizz');
    }
    else if(i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i)
    }
}

for(var i = 1; i <= 100; i++){
    (i % 15 == 0 ? console.log("Fizzbuzz") : console.log(i));
}

var testOne = "abcdefg";

function revStr(str){
    // initialize an empty string variable
    let revStr = "";

    // loop through data from tail to head
    for(let i = str.length -1; i >= 0; i--) {
        // add each character to the variable
        revStr += str[i];
    }
    // return variable
    return revStr;
}

var revTestOne = revStr(testOne)
console.log(revTestOne)


for(var i = 1; i <= 100; i++){
    if(i % 15 == 0) console.log("Fizzbuzz")
    else if(i % 5 == 0) console.log("Buzz")
    else if(i % 3 == 0) console.log("Fizz")
    else console.log(i)
}

var sample = ["a", "b", 'c', 'd', 'e']

function revArr(arr){
    let newArray = [];
    for(let i = arr.length -1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    return newArray;
}

var newSample = revArr(sample)
console.log(newSample)
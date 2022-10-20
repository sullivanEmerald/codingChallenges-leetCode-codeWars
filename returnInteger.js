// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

let array = [4, 5, 7, 5, 4, 8]

function returnArray(arr){
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((a, b) => a + b)
}

console.log(returnArray(array))


// funtion -> array -> no integer -> no string element -> 
// exapmle -> [3, 5, 3, 4, 7, 8] => sum of 7 and 8 (once)

// example -> [3, 5, 3, 4, 7, 8] => 15 -> [9, 10, 19, 13, 19, 13] => 19
// example from bob -> [5, 17, 18, 11, 13, 18, 11, 13] => 22


function getProduct(arr){
    return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((a, b) => a + b)
}

const getProduct = arr => arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((a,b) => a + b)


console.log(getProduct([4,5,7,5,4,8]) , 15)
console.log(getProduct([9, 10, 19, 13, 19, 13]) , 19)
console.log(getProduct([5, 17, 18, 11, 13, 18, 11, 13]) , 22)





// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  // good luck
  return array.filter(item => item % 2 === 0 ).slice(-number)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))


// function evenNum(arr, n){
//     return arr.map(item => Number(item)).filter(n => n % 2 === 0).slice(-n)
// }

const  evenNum = (arr, n) => arr.map(item => +item).filter(n => n % 2 === 0).slice(-n)

console.log(evenNum([2 ,5,7, 8 , '12', '20', '10', 6, '27', '17'], 3))
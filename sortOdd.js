// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.



function sortOdd(arr){
    return arr.filter(item => item % 2 !== 0)
}


console.log(sortOdd([5, 8, 6, 3, 4]))
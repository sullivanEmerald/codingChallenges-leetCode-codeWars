// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

function findDeletedNumber(arr, mixArr){
    if(arr.length === mixArr.length) return 0;
    for(let i = 0; i < arr.length; i++){
        let num =  arr[i]
        if(mixArr.indexOf(num) === -1)  {
            return num
        }
        
    }
}

// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]) , "2")

function findDeletedNum(arr, mixArr){
    return arr.filter(item => mixArr.indexOf(item) === -1)
}

// console.log(findDeletedNum([1,2,3,4,5], [3,4,1,5]))


const findnum = (arr, mixArr) => arr.length === mixArr.length ? 0 : arr.filter(item => mixArr.indexOf(item) === -1)[0]

console.log(findnum( [1,2,3,4,5], [3,4,1,5]))


function numsDelection(arr, mixArr){
    let num1 =  arr.reduce((a,b) => a + b)
    let num2 = mixArr.reduce((a,b) => a + b)

    return num1 - num2
}

console.log(numsDelection([1,2,3,4,5], [3,4,1,5]))
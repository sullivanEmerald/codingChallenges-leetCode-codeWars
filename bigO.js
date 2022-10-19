// the big0 notatiion o(n) is a data structure methodology that specifies how many operations were performed an any input. it has three possilble situations 1) Constantine 2) linear 3) quadratic


// Costantine -> this is a kind of data structure that performs one operation on any input 
// example


let arrray = [2, 5, 7, 4, 10, 24, 79, 30, 79]

// console.log(arrray[0])


// *! Now, In constantine, no matter the amount of inputs or elements added, the operation is just one, getting the array in index 0


// LINEAR : This is the kind of structure where there is an operation for any operation. for any single input, there is an operation an operation.

// example -> 

function addNumber(num){
    let result = 0

    for(let integer of num){
        result += integer
    }

    return result
}


// console.log(addNumber([3,5,3,3,5,50,1]))



function numbersOne(arr){
    let newArray = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === arr[i - 1]){
                newArray.push(arr[i])
            }
        }

    return newArray
}

// console.log(numbersOne(array3))

let array4 = [2,2,3,3,4,4,5,5,6,6]

function numberTwo(arr){

    let newArray = []

    arr.forEach((element, index) => {
        if(element === element){
            newArray.push(element)
        }
    });

    return newArray
}


// console.log(numberTwo(array4))

function addNumber2(num){
    const lastitem = num [ num.length - 1]

    return lastitem * (lastitem + 1) / 2
 
 }
 
//  console.log(addNumber2([1, 2, 3, 4]))




//  TWITTER TUTORIAL

function findNumber(arr, number){
    for(let i = 0;  i < arr.length; i++){
        if(arr[i] === number){
            return arr[i]
        }
    }

    return false
}

// console.log(findNumber([2,4,6,6,9,7,10], 15))


function binarySearch(arr){

    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length - 1 - i; ++j){
            if(arr[j] > arr[j + 1]){
                const tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = arr[j]

            }
        }
    }
}

console.log(binarySearch([2,4,3,2,9,7,10], 15))


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

// function -> array -> fun business-> integers(string and numbers) -> sum of all the number in the array summed together

// [9 ,3, '7', 3] => 22
// ['5', '0', 9, 3, 2, 1, '9', 6, 7] => 42

function sunInterger(arr){
    return arr.reduce((acc, item) => Number(acc) + Number(item))
}


// console.log(sunInterger(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 'sum is 42')
// console.log(sunInterger([9 ,3, '7', 3]), 'sum is 22')


function sumInteger(arr){
    let product = 0

    for(let i = 0; i < arr.length; i++){
       product += Number(arr[i])
    }

    return product
}


// console.log(sumInteger([9 ,3, '7', 3]), 'sum is 22')

const sumInteger2 = arr => arr.reduce((acc,c) => acc + +c)
// console.log(sumInteger2([9 ,3, '7', 3]))


// using map and reduce to get the sum of an arrray of intgers including strings as the integer


function sumInteger3(arr){
     return arr.map(element => +element).reduce((acc,c) => acc + c)
}

console.log(sumInteger3([9 ,3, '7']))
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3


function strArr(arr){

    let result =  Math.round(arr.reduce((a,b) => a + b).length / arr.length)

    return arr.map(item => item.length === result ? item : item += item.split('')[0])
    
    // return arr.map(item => item.length  < result )
}
console.log(strArr(['aa', 'bbb', 'cccc']))
console.log(strArr(['aa', 'bb', 'ddd', 'eee']))

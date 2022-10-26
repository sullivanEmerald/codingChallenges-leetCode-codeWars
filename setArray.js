// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)


// function setArray(set){
//     return set.map(item => [...new Set(item)].length).reduce((acc, c) => acc * c)
// }


// function setArray(arr){
//     return arr.map(item => new Set(item).size).reduce((acc,c) => acc * c)
// }

const setArray2 = arr => arr.reduce((acc,c) => acc * new Set(c).size,1)

console.log(setArray2([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))
console.log(setArray2([[1,2],[3,4],[5,6]]))
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]


// function arrDiff(list1 , list2){
//     // return list1.filter(item => list2.indexOf(item) === -1) - list2.filter(item => list2.indexOf(item) === list2.lastIndexOf(item)).reduce((a,b) => a + b)
//     return list1.filter(item =>  list2.indexOf(item) === -1)
// }

// console.log(arrDiff([1,2,2], [2]))
// console.log(arrDiff([1,2,2], []))



// function arrDiff(list1 , list2){
    
//     return list1.filter(item => !list2.includes(item))
// }


// console.log(arrDiff([1,2,2], [2]))


// function arrDiff(list1 , list2){
    
//     for(let i =0; i < list1.length; i++){
//         if(list2.includes(list1[1])){
//             return list1[i]
//         }
//     }
// }

// console.log(arrDiff([1,2,2], [2]))

function arrDiff(a, b){
    let newSet =  new Set(b)

    return a.filter(n => !newSet.has(n))
}
console.log(arrDiff([1,2,2], [2]))
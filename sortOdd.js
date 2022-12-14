// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

    // linear complexity
    // function sortOdd(arr){
    //     let result = arr.filter(item => item % 2 !== 0).sort((a,b) => a - b)
    //     console.log(result)

    //     return arr.map(item => item % 2 == 0 ? item : result.shift())
    // }

    // constantaine
    // revised and modified
    function sortOdd(arr){
        let result = arr.filter(item => item % 2 !== 0).sort((a,b) => b - a)
        console.log(result)

        return arr.map(item => item % 2 == 0 ? item : result.pop())
    }




console.log(sortOdd([5, 8, 6, 3, 4, 17])) 
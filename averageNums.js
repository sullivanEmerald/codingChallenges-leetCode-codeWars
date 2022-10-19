// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)



// function -> array -> must not be empty -> return -> integer -> +string -> rounded figure -> 

// getaverage([2,2,2,2] , 2)
// getaverahe([1,2,3,4,5,], 3)



// function getAverage(arr){
// //     let average = 0;
// //     for(let i = 0; i < arr.length; i++){
// //         average += arr[i]
// //     }

// //     return average / arr.length
//     if(arr.length === 0){
//         return ''
//     }else{
//         return Math.floor(arr.reduce((acc, item) => acc + item, 0 ) / arr.length)
//     }

     
// }

const getAverage =  arr => arr.length === 0 ?  '' : Math.floor(arr.reduce((acc, c) => acc + +c, 0) / arr.length)
// console.log(getAverage([1,2,3,4,5,7]), 3)
// console.log(getAverage([ 2,2,2,2 ]), 2)


// TIME COMPLEXICITY

let array =  [1,2,3,4,5,5]



function maxNumber(arr){
    let maxNum = arr[0],
        minNum = arr[0]
        for(let i = 0; i <  arr.length; i++){
            if(arr[i] > maxNum){
                maxNum = arr[i]
            }
        }

        for(let i = 0; i <  arr.length; i++){
            if(arr[i] < minNum){
                minNum = arr[i]
            }
        }

    return [maxNum, minNum]
}


console.log(maxNumber([2,5,5,6, 15,8,10]))
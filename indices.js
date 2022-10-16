

function findIndices(arr, target){
    for(let i = 0 ; i < arr.length; i++){
        for(let k = 0;  k < arr.length; i++){
            if(arr[i] + arr[k] === target){
                return [ k , i ]
            }
        }
    }
}


// console.log(findIndices([2,5,7,3], 9))


let algorithm = 'sullivan'


function reverseLetter(word){
    return word.split('').reverse().join('')
}


console.log((reverseLetter(algorithm)))


function reverseLetter2(word){
    return [...word].reverse().join('')
}

console.log(reverseLetter2(algorithm))


function reverseLetter3(word){
    let result = ''
    for(let char of word){
        result =  result  + char
    }
    return result
}

console.log(reverseLetter3(algorithm))


function reverseLetter4(word){
    return word.split('').reduce((acc, char) => acc + char ,'')
}

console.log(reverseLetter4(algorithm))



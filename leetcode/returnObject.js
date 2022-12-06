// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function returnObj(str){

    let srtObjects  = {}

    for(let c of str){
        if(srtObjects[c]){
            srtObjects[c]++
        }else{
            srtObjects[c] = 1
        }
    }

    return srtObjects
}





function count(string){
    let count = {}

    for(let i = 0; i<string.length; i++){
        if(count[string[i]]){
            count[string[i]]++
        }else{
            count[string[i]] = 1
        }
    }

    return count
}

console.log(count('aba'))
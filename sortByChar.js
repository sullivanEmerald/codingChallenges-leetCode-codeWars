// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// example = 'man i need a taxi up to ubud' => ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']


function lastChar(last){
    return last.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length -1))
}


// console.log(lastChar("man i need a taxi up to ubud"))



function sortString(last){
    
    return last.split(' ').sort((a,b) => a.slice(-1)  > b.slice(-1))
}


console.log(sortString("man i need a taxi up to ubud"))

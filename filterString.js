// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


// function duplicateString(string){
//     return string.split(' ').filter((item, i , arr) => item !== arr[i + 1]).join('')
// }

function duplicateString(string){
    
    let array = []
    let word =  string.split(" ")

    for(let i = 0; i < word.length; i++){
        
        if(word[i] !== word[i - 1]){
            array.push(word[i])
        }
    }

    return array.join( ' ')
}

console.log(duplicateString( 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
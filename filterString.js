// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


function duplicateString(string){
    return string.split(' ').filter((item, i , arr) => item !== arr[i + 1]).join(' ')
}

console.log(duplicateString( 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
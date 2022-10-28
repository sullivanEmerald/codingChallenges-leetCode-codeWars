// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("


let string  = 'Supralapsarian'

function newString(str){
    let stringMap = str.toLowerCase().split('')

    for(let i = 0; i < stringMap.length; i++){
        if(str.indexOf(stringMap[i]) === str.lastIndexOf(stringMap[i])){
            stringMap[i] = '('
        }else{
            stringMap[i] = ')' 
        }
    }

    return stringMap.join('')
}

const duplicateEncode = word => word.toLowerCase()
                                    .split('')
                                    .map((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item) ? "(" : ")" )
                                    .join('')

console.log(duplicateEncode(string))
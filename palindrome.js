// this functions checks if a word is a palindrome.
// A palidrome a word that is spelled the same from backward eg mom, racecar, dad.

// prep

// function -> a word -> one word -> 
// examples -> mom, dad, danny
// result =  true / false


function isPalindrome(word){

    // reverse the word

    let reservedWord =  word.split('').reverse().join('')

    if(reservedWord === word){
        return true
    }else{
        return false
    }
}

// console.log(isPalindrome('danny'))

// Usinng arrow function to  get the answer
const isPalindrome2 = (word) => word  === word.split('').reverse().join('')

console.log(isPalindrome('danny'))
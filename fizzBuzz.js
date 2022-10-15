// Fizzbuzz is general a function that takes a number and print each number and if the number is divisible by 3, print fizz, by 5 print buzz and 3/5 print fizzBuzz else print number

// a number -> print the number -> whole number -> 

// result -> fizz, buzz, fizzbuzz else num

// 5 -> 1, 2, fizz, 4, buzz
//  10 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz
// 15 -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzBuzz


function fizzBuzz(num){

    for(let i = 1; i <= num; i++){

        if(i % 3 === 0 && i % 5 ===0){
            console.log('fizzBuzz')
        }else if(i % 3 === 0 ){
            console.log('fizz')
        }else if(i % 5 === 0 ){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }


}

console.log(fizzBuzz(15))
// console.log(fizzBuzz(10))
// console.log(fizzBuzz(15))


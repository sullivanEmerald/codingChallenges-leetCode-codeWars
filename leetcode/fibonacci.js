



function fib(n){
    let arr = [0, 1]

    for(let i = 2; i <= n.length; i++){
        arr[i] =  arr[i -1] + arr[i - 2]
    }

    return arr[n]
}


console.log(fib(2))
console.log(fib(4))
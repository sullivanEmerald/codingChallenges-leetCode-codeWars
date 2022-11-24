let array = [
    {name : "chigozie", passion : "football", price : 200, quantity : 2},
    {name : "sullvan", passion : "coding", price : 300, quantity : 1},
    {name : "chelsea", passion : "tiktoking", price : 100, quantity : 5},
    {name : "joshua", passion : "web", price : 400, quantity : 1},
    {name : "emerald", passion : "coding", price : 500, quantity : 3},
]



function tranformArr(array){
    return array.map(item => item.quantity > 1 ? item.price *= item.quantity : item.price).reduce((acc, c) => acc + c)
}

console.log(tranformArr(array))
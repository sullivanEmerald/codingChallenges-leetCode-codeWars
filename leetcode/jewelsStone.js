
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


function jewelStones(jewels, stones){
    let map = {}
    let count = 0;
    

    for(let jewel of jewels){
        map[jewel] = true
    }

    for(let stone of stones){
        if(map[stone]){
            count ++
        }
    }

    return count
}


console.log(jewelStones('aA', 'aAAbbbb'), 3)
console.log(jewelStones('z', 'ZZ'), 0)
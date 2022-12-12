// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


function highestChar(str){
    let Charmap = {}
    let count  = 0
    let max = null

    for( let char of str){
        Charmap[char] = Charmap[char] + 1 || 1
    }

    for(let char in Charmap){
        if(Charmap[char] > count){
            count = Charmap[char]
            max = char
        }
    }

    return max
}

console.log(highestChar( 'Hello World') , 'l')
console.log(highestChar( 'Amadike Chigozie') , 'l')
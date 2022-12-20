// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });


function magazineNotes( magazine, notes){
    const magazineWords = magazine.split(' ')
    const notesWords =  notes.split (' ')

    const magazineHash = {}
    let possible = true

    for(let word of magazineWords){
        magazineHash[word] = magazineHash[word] + 1 || 1 
    }

    for(let words of notesWords){
        if(magazineHash[words]){
            magazineHash[words]--
            if(magazineHash[words] < 0)return false
        }else{
            possible = false
        }
        
    }

    return possible
}


console.log(magazineNotes( magazine, "sit ad est sint"))
console.log(magazineNotes( magazine, "sit ad est sint in in"))
console.log(magazineNotes( magazine, "sit ad est sint in in in in"))
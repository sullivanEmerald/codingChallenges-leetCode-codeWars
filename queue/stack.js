// stack is a collection, A LINEAR Data structure  where the insection of element and removal of an element happens from the a single point. it follow the the LIFO(LAST IN AND FIRST OUT) like the stack of plates. it uses POP, PEEK AND PUSH array methods


let array = []


array.push('sullivan')
array.push('amadike')
array.push('joshua')
array.push('chigozie')




// console.log(array)
// console.log(array.pop())



// Implementing stack with Class and Object

class stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

    push(element){
        this.size++
        this.storage[this.size] = element 
    }

    pop(){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }

    peek(){
        return this.storage[this.size]
    }


}

let store =  new stack()

store.push('sullivan')
store.push('sullivan')
store.push('amadike')
store.push('joshua')
store.push('chigozie')

console.log(store.pop())
console.log(store.storage)
console.log(store.peek())
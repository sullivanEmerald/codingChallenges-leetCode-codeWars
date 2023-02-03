// Queue is a collection and a linear data structute that follow the queue process. it allow the insection from an element from the end or tail called enqueue and the removal of an element from the head called the dequeue. the  queue data structure follows the (FIFO) , The first element that enters the queue leaves first. queue can be implemented using PUSH, AND SHIFT

class queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    push(element){
        this.storage[this.tail] =  element
        this.tail++
    }

    shift(){
        let removed =  this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }


    
}



let store =  new queue()

store.push('sullivan')
store.push('sullivan')
store.push('amadike')
store.push('joshua')
store.push('chigozie')
store.push('eme4rald')

console.log(store.shift())
console.log(store.shift())
console.log(store.shift())
store.push('byran')
console.log(store.storage)



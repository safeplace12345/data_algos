class Queue {
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    isEmpty(){
        return this.rear - this.front === 0
    }
    size(){
        return this.rear - this.front
    }
    peek(){
        return Object.values(this.items)
    }
    enqueue (data) {
        if(!this.isEmpty()){
            this.rear += 1
            this.items[this.rear] = data
            
        } else {
            this.items[this.rear] = data
            this.rear += 1
        }
    }
    dequeue () {
        if(!this.isEmpty()){
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front += 1
            return item
        }
        return null
    }
}


const q = new Queue()
q.enqueue(100)
q.enqueue(200)
q.enqueue(300)
q.enqueue(400)
q.enqueue(500)
q.enqueue('invalid')
q.dequeue()
console.log(q.isEmpty())
console.log(q.peek())
console.log(q.size())
// q.dequeue()
// q.dequeue()
// q.dequeue()
// q.enqueue(100)
// q.enqueue(200)
// q.enqueue(300)
// q.enqueue(400)
// q.dequeue()
// console.log(q.isEmpty())
// console.log(q.peek())
// console.log(q.size())
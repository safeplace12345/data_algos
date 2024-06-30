class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty () {
        return this.currentLength === 0
    }

    isFull () {
        return this.currentLength === this.capacity
    }

    enqueue(data) {
        if(!this.isFull()){
            this.rear +=1
            if(this.rear === this.capacity) {
                this.rear = 0
            }
            
            this.items[this.rear] = data
            this.currentLength = this.currentLength + 1
            if(this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if(!this.isEmpty()) {
            const item = this.items[this.front]
            this.items[this.front] = null
            
            this.front += 1
            if(this.front === this.capacity) {
                this.front = 0
            }
            this.currentLength = this.currentLength - 1

            if(this.isEmpty()) {
                this.front = -1
                this.rear = -1
            }
            return item
        }
    }
    peek () {
        return console.log(this.items, this.front, this.rear)
    }
    size () {
        return this.currentLength
    }
}

const q = new CircularQueue(5)
q.enqueue(100)
q.enqueue(200)
q.enqueue(300)
q.enqueue(400)
q.enqueue(500)
q.enqueue('invalid')
console.log(q.isEmpty())
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(100)
q.enqueue(200)
q.enqueue(300)
q.enqueue(400)
q.dequeue()
q.peek()
q.size()
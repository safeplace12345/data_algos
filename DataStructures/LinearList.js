// The idea is every node should have a value and a next pointer to the next node in line. Kind a like a 1 step layered object. The last node shold have a null next value
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinearList {
    constructor(){
        this.head = null,
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            // Exits the loop once next is null
            prev.next = node
        }
        this.size += 1
    }
    remove(){
        if(!this.isEmpty()) {
            this.head = this.head.next
            this.size -= 1
        }
    }

    peek(){
        let str = ''
        let curr = this.head
        while(curr) {
            str += (curr.value + ",")
            curr = curr.next
        }
        return str
    }
    getSize(){
        return this.size
    }
}

const q = new LinearList()
console.log(q.isEmpty())
q.append(100)
q.append(200)
q.append(300)
console.log(q.peek())
console.log(q.isEmpty())
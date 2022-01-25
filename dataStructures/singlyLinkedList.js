class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null 
        this.length = 0
    }


    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            return this.length++
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this.length
    }


    pop(){

        if(!this.head){
            return undefined 
        }

        if(this.head.next == null){
            console.log(this.head)
            return this.head == null
        }

        let current = this.head
        let prev = current
        while(current.next){
            prev = current
            current = current.next 
        }
        this.tail = prev
        this.tail.next = null
        this.length--

        if(this.head.next == null){
            let temp = this.head 
            this.head = null
            return temp
        }

        return current
    }

}

let list = new SinglyLinkedList()








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

    shift(){
        if (!this.head){
            return console.log('boo') 
        }

        let temp = this.head
        this.head = temp.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp
        
    }

    unshift(val){

        let newHead = new Node(val)
        let temp = this.head
        if(!this.head){
            this.head = newHead
            this.tail = newHead
        }
        if(this.head.next == null){
            this.tail = temp
        }
        this.head = newHead
        newHead.next = temp
        this.length++
        return newHead
    }


    get(index){
        let counter = 0
        let current = this.head
        if(index >= this.length || index < 0){
            return null
        }
        while(counter <= index){
            if(counter == index ){
                return current
            }
            counter++
            current = current.next
        }
    }

    set(index, val){


        let node = this.get(index)
        if(node == null){
            return false
        }
        node.val = val 
        return true 

    }

    insert(index, val){
        
        if(index < 0 || index > this.length){
            return false
        }

        if(index == this.length){
            return this.push(val)
        }

        if( index == 0){
            return this.unshift(val)
        }

        let newNode = new Node(val)
        let newPosition = this.get(index)
        let prevPosition = this.get(index-1)
        prevPosition.next = newNode
        newNode.next = newPosition
        this.length++
        return true

    }


    remove(index){

        if(index < 0 || index > this.length){
            return false
        }

        if(index == 0){
            return this.shift()
        }

        if(index +1 == this.length){
            return this.pop()
        }

        let previousPosition = this.get(index-1)
        let forwardPosition = this.get(index+1)
        previousPosition.next = forwardPosition
        this.length--
        return true

    }

    reverse(){

        let node = this.head
        this.head = this.tail
        this.tail = node

        let next
        let prev = null

        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }   

    }
}

let list = new SinglyLinkedList()


list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log(list.head.next)

list.reverse()

console.log(list.head.next)



















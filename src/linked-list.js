const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if( this.length === 0){
            this._head = newNode;
            this._tail = newNode;
        }else{
            this._tail.next = newNode;
            newNode.prev = this._tail;

            this._tail = newNode;
        }

        this.length++;
        return this;
    }

    head() {
        if(this.length > 0){
            return this._head.data;
        }else{
            return null;
        }   
    }

    tail() {
        if(this.length > 0){
            return this._tail.data;
        }else{
            return null;
        }
    }

    at(index) {
        if(index < 0 || this.length <= index){
            return null;
        }else{
            let currentIndex = 0;
            let currentNode = this._head;

            while(currentIndex < index){
                currentNode = currentNode.next;
                currentIndex++;
            }
            return currentNode.data;
        }
    }

    insertAt(index, data) {
        if(index < 0 || this.length < index){
            return null;
        }else{
            let newNode = new Node(data);
            
            if(this.length === 0){
                this._head = newNode;
            }else if(index === 0){
                newNode.next = this._head;
                this._head.prev = newNode;
                this._head = newNode;
                
            }else{
                let currentIndex = 0;
                let currentNode = this._head;
                let prevNode = null;

                while(currentIndex < index){
                    prevNode = currentNode;
                    currentNode = currentNode.next;
                    currentIndex++;
                }

                prevNode.next = newNode;
                newNode.prev = prevNode;

                newNode.next = currentNode;
                currentNode.prev = newNode;
            }
            this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if(index < 0 || this.length <= index){
            return null;
        }

        let currentIndex = 0;
        let currentNode = this._head;
        let prevNode = null;
        
        if(this.length === 1){
            this._head = null;
            this._trail = null;
        }else if(index === 0){
            currentNode = this._head;
            this._head = this._head.next;
            this._head.prev = null;
        }else if(index === this.length - 1){
            currentNode = this._tail;
            this._tail = this._tail.prev;
            this._tail.next = null;
        }else{
            while(currentIndex < index){
                prevNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            prevNode.next = currentNode.next;
            currentNode.next.prev = prevNode;
        }

        this.length--;
        return this;
    }

    reverse() {
        if(this.length !== 0){
            let currentNode = this._head;
            let currentIndex = 0;
            let prevNode = null;
            this._head = this._tail;
            this._tail = currentNode;
           
            while(currentIndex < this.length){     
                prevNode = currentNode.prev;  
                currentNode.prev = currentNode.next;
                currentNode.next = prevNode;
                currentNode = currentNode.prev;
                currentIndex++;
            }
        }
       return this;
    }

    indexOf(data) {
        let currentNode = this._head;
        let currentIndex = 0;

        while(currentNode){
            if(currentNode.data === data){
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return -1;
    }
}
module.exports = LinkedList;

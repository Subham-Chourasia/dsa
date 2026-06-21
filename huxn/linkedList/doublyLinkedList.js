 class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
 }

 class DoublyLinkedList{
    constructor(value) {
        const newNode = new Node(value);
       this.head = newNode;
       this.tail =  newNode;
       this.tail.next = null;
       this.length =1;
    }

    push(val){
        let nodeNew = new Node(val);

        if(!this.head){
            this.head = nodeNew;
            this.tail = nodeNew;
            this.tail.next = null;
            this.tail.prev = null;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;   
            }
            current.next = nodeNew;
            nodeNew.prev = current;
            this.tail = nodeNew;
        }
        this.length++;
        return this;

    }
    betterPush(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            nodeNew.prev = this.tail;
            this.tail.next = nodeNew;
            this.tail = nodeNew;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        } 
        const removed = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }

    unshift(val){
        const newNode =  new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }  else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(){
        let removed;
        if(this.length === 0) {
            return undefined;
        } else {
            removed = this.head;
            let nextELem = this.head.next;
            this.head.next = null;
            this.head = nextELem;
            if(this.length > 1){
                this.head.prev = null;
            } else {
                this.tail = null;   // ← list is now empty, clear tail too
            }
        }
        this.length--;
        return removed;
    }
    betterShift() {
        if (this.length === 0) return undefined;

        const removed = this.head;

        if (this.length === 1) { 
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removed.next = null;
        }

        this.length--;
        return removed;
    }

 }

 const x = new DoublyLinkedList(8);
 x.push(98);
 x.push(7);
 x.push(33);
console.dir(x, { depth: null });
x.pop();
console.dir(x, { depth: null });

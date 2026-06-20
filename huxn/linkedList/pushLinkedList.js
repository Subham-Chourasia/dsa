class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.tail.next = null;
        this.length = 1;
    }

    
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        let prev = this.head;
        while(temp.next) {
            prev = temp;
            temp = prev.next;
        }
        //using for loop
        //for (let i = 0; i < this.length - 1; i++) {
        //     prev = temp;
        //     temp = temp.next;
        // }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    
    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) {             // CASE 1: empty list
            return undefined;
        }

        const removed = this.head;           // save reference to the old head BEFORE moving it

        if (this.length === 1) {             // CASE 2: only one node
            this.head = null;
            this.tail = null;
        } else {                             // CASE 3: many nodes
            this.head = this.head.next;      // move head forward
            removed.next = null;             // disconnect the old head
        }

        this.length--;
        return removed;
    }

    getFirst(){
        if(!this.head) {
            return undefined;
        }
        return this.head;
    }
    getLastElement() {
        if(!this.head) {
            return undefined;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    
    getElementByIndex(index) { //this return the node object at that index passed
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < index; i++) {   // 👈 loop UP TO index, not length
            current = current.next;
        }
        return current;
    }

    searchElementByValue(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    setValueBySearchingElement(val, newVal) {
        let temp =  this.head;
        while(temp) {
            if(temp.value === val) {
                temp.value = newVal
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

insertElementByIndex(index, value) {
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);

    // Insert at head (handles empty list too)
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) this.tail = newNode;   // was empty → newNode is also tail
        this.length++;
        return true;
    }

    // Walk to the node BEFORE the target position
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }

    newNode.next = prev.next;
    prev.next = newNode;

    if (newNode.next === null) this.tail = newNode;  // appended → update tail

    this.length++;
    return true;
}



}
const x = new LinkedList(18);
x.push(99);
x.push(34);
x.push(23);
// console.log(x, "befoee");
// console.dir(x, { depth: null });
// console.log(x.pop());
// console.log(x);
// x.unshift(67);
// console.dir(x, { depth: null });
// x.shift();
// console.dir(x, { depth: null });
console.log(x.setValueBySearchingElement(34,43));
console.dir(x, { depth: null });

console.log(x.setValueBySearchingElement(43,143));
console.dir(x, { depth: null });




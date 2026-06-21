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
    pushhh(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let curr =  this.head;
            while (curr.next) {        // walk until curr is on the last node
                curr = curr.next;
            }
            curr.next = newNode;       // attach
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

    size(){
            if(!this.head) return 0;
            let counter = 0;
            let temp = this.head;
            while(temp){
                counter++;
                temp = temp.next;
            }
            return counter;
        }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;

        // JavaScript's garbage collector keeps objects alive only if your running code can still reach them through some chain of references. 
        // Once you null head/tail, the chain becomes an unreachable island — and the whole island gets freed at once, even though the nodes still point to each other.
    }

    reverseSinglyLinkedList(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}

const x = new LinkedList(18);
x.push(99);
x.push(34);
x.push(23);
x.push(223);
x.push(123);
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
console.log(x.size(), "Size");



// Classic problems an SDE-3 should be able to write on demand

// Reverse a linked list (iterative + recursive)
// Detect cycle / find cycle start
// Find middle node in one pass
// Remove Nth from end in one pass
// Merge two sorted lists / merge K sorted lists (uses a heap)
// Check if list is a palindrome (reverse second half, compare)
// Add two numbers represented as linked lists
// Reverse in groups of k
// Intersection point of two linked lists
// Flatten a multilevel doubly linked list
// Sort a linked list (merge sort)
// Copy list with random pointer
// Reorder list (L0 → Ln → L1 → Ln-1 → ...)
// LRU Cache (next section)

// 10. Edge cases that bite, every time
// Every method should be tested against these:

// Empty list — does it return undefined / false cleanly, or crash?
// Single-node list — when you remove it, do both head and tail get nulled?
// Head removal — does the new head's prev get cleared?
// Tail removal — does the new tail's next get cleared?
// Length tracking — does length stay consistent across all paths? (Including the early-return paths.)
// Removed node cleanup — are the removed node's pointers nulled to break references back into the list?
// Index bounds — negative indices, indices equal to length, indices past length, non-integer indices.
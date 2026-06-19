class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    get(index) {
        return this.data[index];
    }
    pop() {
        delete this.data[this.length - 1]
        this.length--;
        return this.data;
    }
    shift() {
        for (let i = 0 ; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        return this.data;
        //the important part: the same expression this.data[i] behaves differently depending on which side of = it's on.
        //On the right side, this.data[i + 1] reads the value stored at slot i+1.
        // On the left side, this.data[i] is the target — it's not reading a value, it's pointing at the slot where the value should go. Assignment then puts the value into that slot (creating or overwriting it).
    }

    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }

    deleteByIndex(index) {
        for (let i = index; i<this.length; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
}

const myAr = new MyArray();;
console.log(myAr.push(2));
console.log(myAr.push(3));
console.log(myAr.push(4));
// console.log(myAr);
// console.log(myAr.get(10));
// console.log(myAr.pop());
// console.log(myAr.shift());
console.log(myAr.unshift(33));
console.log(myAr.deleteByIndex(2));
console.log(myAr);


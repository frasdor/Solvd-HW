class Stack {
    constructor(){
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}


class Queue {
    constructor(){
        this.items =[];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }
    peek() {
        if (this.isempty()) return null;
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
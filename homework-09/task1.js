class Stack {
    constructor(){
        this.item = [];
    }
    push(element) {
        this.item.push(element);
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

    }
}
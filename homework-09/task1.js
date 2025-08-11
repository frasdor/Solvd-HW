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


class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = { value: value, left: null, right: null };

        if (this.root === null) {
            this.root = newNode;
             return;
        }

        const insertNode =(node, newNode) => {
           if (!node.left) {
                node.left = newNode;
            } else if (!node.right) {
                node.right = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        };
        insertNode(this.root, newNode);
    }

    search(value) {
        const searchNode = (node) => {
            if (node === null) return null;
            if (node.value === value) return node;

            let found = searchNode(node.left);
            if (found) return found;

            return searchNode(node.right);
        };

        return searchNode(this.root);
    }


     traverseInOrder(callback) {
        const inOrder = (node) => {
            if (node !== null) {
                inOrder(node.left);
                callback(node.value);
                inOrder(node.right);
            }
        };
        inOrder(this.root);
    }

    traversePreOrder(callback) {
        const preOrder = (node) => {
            if (node !== null) {
                callback(node.value);
                preOrder(node.left);
                preOrder(node.right);
            }
        };
        preOrder(this.root);
    }

    traversePostOrder(callback) {
        const postOrder = (node) => {
            if (node !== null) {
                postOrder(node.left);
                postOrder(node.right);
                callback(node.value);
            }
        };
        postOrder(this.root);
    }
}


class Graph {
    constructor() {
        this.adjacencyList = {}; 
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    DFS(start) {
        const visited = {};
        const result = [];

        const dfsRecursive = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsRecursive(neighbor);
                }
            });
        };

        dfsRecursive(start);
        return result;
    }

    BFS(start) {
        const queue = [start];
        const visited = {};
        const result = [];

        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    createNode(value) {
        return { value: value, next: null }
    }


    insert(value) {
        const newNode = this.createNode(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

     delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null; 
    }
}
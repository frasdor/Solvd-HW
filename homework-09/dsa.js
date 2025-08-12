// ----------------------
// PART 1: Data Structure Implementations
// ----------------------

/**
 * Stack class implements LIFO (Last In First Out) stack.
 */
class Stack {
    constructor(){
        this.items = [];
    }
    /**
     * Adds element to the top of the stack.
     */
    push(element) {
        this.items.push(element);
    }
    /**
     * Removes and returns the top element from the stack.
     * Returns null if stack is empty.
     */
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    /**
     * Returns the top element without removing it.
     * Returns null if stack is empty.
     */
    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    /**
     * Returns true if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

/**
 * Queue class implements FIFO (First In First Out) queue.
 */
class Queue {
    constructor(){
        this.items =[];
    }
    /**
     * Adds element to the back of the queue.
     */
    enqueue(element) {
        this.items.push(element);
    }
    /**
     * Removes and returns the front element from the queue.
     * Returns null if queue is empty.
     */
    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }
    /**
     * Returns the front element without removing it.
     * Returns null if queue is empty.
     */
    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
    /**
     * Returns true if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.items.length === 0;
    }
}

/**
 * BinaryTree class with basic insert, search, and traversal methods.
 * Note: Insert does not maintain Binary Search Tree property.
 */
class BinaryTree {
    constructor() {
        this.root = null;
    }

     /**
     * Inserts a new value into the tree.
     * Does not maintain BST property, inserts left to right.
     */
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

    /**
     * Searches for a node with the given value.
     * Returns the node if found, null otherwise.
     */
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

    /**
     * In-order traversal: left -> root -> right.
     * Calls callback on each node’s value.
     */
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

     /**
     * Pre-order traversal: root -> left -> right.
     * Calls callback on each node’s value.
     */
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

    /**
     * Post-order traversal: left -> right -> root.
     * Calls callback on each node’s value.
     */
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

/**
 * Graph class implemented with adjacency list.
 * Supports adding vertices, edges, and traversals (DFS and BFS).
 */
class Graph {
    constructor() {
        this.adjacencyList = {}; 
    }

    /**
     * Adds a vertex to the graph.
     * If vertex already exists, does nothing.
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /**
     * Adds an undirected edge between vertex1 and vertex2.
     * Automatically adds vertices if they don't exist.
     */
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

     /**
     * Depth-First Search traversal from start vertex.
     * Returns an array of visited vertices in DFS order.
     */
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

    /**
     * Breadth-First Search traversal from start vertex.
     * Returns an array of visited vertices in BFS order.
     */
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

/**
 * LinkedList class with basic insert, delete, and search operations.
 */
class LinkedList {
    constructor() {
        this.head = null;
    }

      /**
     * Creates a new node object.
     */
    createNode(value) {
        return { value: value, next: null }
    }


    /**
     * Inserts a new value at the end of the linked list.
     */
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

    /**
     * Deletes the first node with the specified value.
     */
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

    /**
     * Searches for a node by value.
     * Returns the node if found, null otherwise.
     */
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


// ----------------------
// PART 2: Algorithmic Problems
// ----------------------

/**
 * MinMaxStack class extends stack functionality to get min and max in O(1).
 */
class MinMaxStack {
    constructor() {
        this.stack = [];     
        this.minStack = [];  
        this.maxStack = [];  
    }

    /**
     * Pushes a value onto the stack.
     * Updates minStack and maxStack accordingly.
     */
    push(value) {
        this.stack.push(value);

        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }

        if (this.maxStack.length === 0 || value >= this.getMax()) {
            this.maxStack.push(value);
        }
    }

    /**
     * Pops the top value off the stack.
     * Updates minStack and maxStack if needed.
     * Returns popped value or null if empty.
     */
    pop() {
        if (this.stack.length === 0) return null; 

        const removed = this.stack.pop();

        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        if (removed === this.getMax()) {
            this.maxStack.pop();
        }

        return removed; 
    }

      /**
     * Returns current minimum value in O(1).
     * Returns null if stack is empty.
     */
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * Returns current maximum value in O(1).
     * Returns null if stack is empty.
     */
    getMax() {
        if (this.maxStack.length === 0) return null;
        return this.maxStack[this.maxStack.length - 1];
    }
}

/**
 * Checks if a binary tree is a valid Binary Search Tree (BST).
 * Returns true if valid BST, false otherwise.
 */
function isBST(node, min = -Infinity, max = Infinity) {
    if (node === null) return true;

    if (node.value <= min || node.value >= max) {
        return false;
    }

    return (
        isBST(node.left, min, node.value) &&
        isBST(node.right, node.value, max)
    );
}

/**
 * Finds shortest path in an unweighted graph using BFS.
 * Returns array of vertices in path from start to target.
 * Returns null if no path exists.
 */
function bfsShortestPath(graph, start, target) {
    const queue = [[start, [start]]];
    const visited = new Set(); 

    while (queue.length > 0) {
        const [vertex, path] = queue.shift(); 
        if (vertex === target) {
            return path; 
        }

        visited.add(vertex);

        for (let neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }

    return null; // No path found
}

/**
 * Dijkstra's algorithm for shortest paths in weighted graphs.
 * Returns an object with distances and previous vertex info.
 */
function dijkstra(graph, start) {
    const distances = {}; 
    const previous = {};  
    const visited = new Set();

    for (let vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        let currentVertex = null;
        for (let vertex in distances) {
            if (!visited.has(vertex) && 
               (currentVertex === null || distances[vertex] < distances[currentVertex])) {
                currentVertex = vertex;
            }
        }

        if (distances[currentVertex] === Infinity) break; 

        visited.add(currentVertex);

        for (let neighbor in graph[currentVertex]) {
            let newDistance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = currentVertex;
            }
        }
    }

    return { distances, previous };
}

/**
 * Reconstructs shortest path from 'previous' info after Dijkstra.
 * Returns array of vertices from start to target or null if no path.
 */
function getShortestPath(previous, start, target) {
    const path = [];
    let current = target;
    while (current !== null) {
        path.unshift(current); 
        current = previous[current];
    }
    return path[0] === start ? path : null;
}


/**
 * Detects if a linked list contains a cycle.
 * Uses Floyd's Tortoise and Hare algorithm.
 * Returns true if cycle detected, false otherwise.
 */
function hasCycle(head) {
    if (!head || !head.next) return false;

    let slow = head;       
    let fast = head.next;  

    while (slow !== fast) {
        if (!fast || !fast.next) return false;

        slow = slow.next;         
        fast = fast.next.next;    
    }

    return true;
}


// ----------------------
// PART 3: DEMONSTRATION
// ----------------------

// Stack Demo
console.log("=== STACK DEMO ===");
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack top (peek):", stack.peek()); // 30
console.log("Stack pop:", stack.pop()); // 30
console.log("Stack pop:", stack.pop()); // 20
console.log("Stack is empty?", stack.isEmpty()); // false
console.log("Stack pop:", stack.pop()); // 10
console.log("Stack is empty?", stack.isEmpty()); // true

// Queue Demo
console.log("\n=== QUEUE DEMO ===");
const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
console.log("Queue front (peek):", queue.peek()); // "a"
console.log("Queue dequeue:", queue.dequeue()); // "a"
console.log("Queue dequeue:", queue.dequeue()); // "b"
console.log("Queue dequeue:", queue.dequeue()); // "c"
console.log("Queue is empty?", queue.isEmpty()); // true

// Binary Tree Demo
console.log("\n=== BINARY TREE DEMO ===");
const bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
console.log("Search for value 3:", bt.search(3)); // Node with value 3
console.log("In-order traversal:");
bt.traverseInOrder(value => console.log(value)); // 4,2,3,1 (structure depends on insertion order)
console.log("Pre-order traversal:");
bt.traversePreOrder(value => console.log(value)); // 1,2,4,3
console.log("Post-order traversal:");
bt.traversePostOrder(value => console.log(value)); // 4,3,2,1


// Binary Tree Demo
console.log("\n=== GRAPH DEMO ===");
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
console.log("DFS starting from A:", graph.DFS("A")); // e.g. [ 'A', 'B', 'D', 'C', 'E' ]
console.log("BFS starting from A:", graph.BFS("A")); // e.g. [ 'A', 'B', 'C', 'D', 'E' ]


// Linked List Demo
console.log("\n=== LINKED LIST DEMO ===");
const list = new LinkedList();
list.insert(100);
list.insert(200);
list.insert(300);
console.log("Search for 200:", list.search(200)); // Node with value 200
list.delete(200);
console.log("Search for 200 after delete:", list.search(200)); // null

// Min/Max Stack Demo
console.log("\n=== MIN MAX STACK DEMO ===");
const minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(3);
minMaxStack.push(7);
console.log("Current Min:", minMaxStack.getMin()); // 3
console.log("Current Max:", minMaxStack.getMax()); // 7
minMaxStack.pop();
console.log("Current Min after pop:", minMaxStack.getMin()); // 3
console.log("Current Max after pop:", minMaxStack.getMax()); // 5

console.log("\n=== IS BST DEMO ===");
const bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log("Is BST valid?", isBST(bst.root)); 

console.log("\n=== BFS SHORTEST PATH DEMO ===");
const simpleGraph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};
console.log("Shortest path from A to F:", bfsShortestPath(simpleGraph, "A", "F")); // e.g. [ 'A', 'C', 'F' ]

console.log("\n=== DIJKSTRA DEMO ===");
const weightedGraph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, E: 3 },
    D: { B: 10, F: 11 },
    E: { C: 3, F: 4 },
    F: { D: 11, E: 4 }
};
const dijkstraResult = dijkstra(weightedGraph, "A");
console.log("Distances from A:", dijkstraResult.distances);
console.log("Shortest path from A to F:", getShortestPath(dijkstraResult.previous, "A", "F"));


// Linked List Cycle Detection Demo
console.log("\n=== LINKED LIST CYCLE DETECTION DEMO ===");
// Create a cycle linked list manually
const cycleList = new LinkedList();
const node1 = cycleList.createNode(1);
const node2 = cycleList.createNode(2);
const node3 = cycleList.createNode(3);
cycleList.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1; // cycle here
console.log("Linked list has cycle?", hasCycle(cycleList.head)); // true

// Non-cyclic list check
const noCycleList = new LinkedList();
noCycleList.insert(1);
noCycleList.insert(2);
noCycleList.insert(3);
console.log("Linked list has cycle?", hasCycle(noCycleList.head)); // false
// Remove cycle
node3.next = null;
console.log("Has cycle after fix?", hasCycle(node1)); // false

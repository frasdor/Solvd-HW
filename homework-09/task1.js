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


class MinMaxStack {
    constructor() {
        this.stack = [];     // Main stack to store all values
        this.minStack = [];  // Auxiliary stack to keep track of current minimums
        this.maxStack = [];  // Auxiliary stack to keep track of current maximums
    }

    // Adds a value to the stack
    push(value) {
        this.stack.push(value);

        // If minStack is empty or new value is smaller/equal to current min → push to minStack
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }

        // If maxStack is empty or new value is larger/equal to current max → push to maxStack
        if (this.maxStack.length === 0 || value >= this.getMax()) {
            this.maxStack.push(value);
        }
    }

    // Removes the top value from the stack
    pop() {
        if (this.stack.length === 0) return null; // Return null if stack is empty

        const removed = this.stack.pop();

        // If the removed value is the current min → pop from minStack as well
        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        // If the removed value is the current max → pop from maxStack as well
        if (removed === this.getMax()) {
            this.maxStack.pop();
        }

        return removed; // Return the removed value
    }

    // Returns the current minimum value in O(1) time
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }

    // Returns the current maximum value in O(1) time
    getMax() {
        if (this.maxStack.length === 0) return null;
        return this.maxStack[this.maxStack.length - 1];
    }
}

// Function to check if a binary tree is a valid Binary Search Tree (BST)
function isBST(node, min = -Infinity, max = Infinity) {
    // An empty tree (null node) is a valid BST
    if (node === null) return true;

    // The current node's value must be within the allowed range (min, max)
    if (node.value <= min || node.value >= max) {
        return false;
    }

    // Recursively check:
    // 1. The left subtree → all values must be < current node's value
    // 2. The right subtree → all values must be > current node's value
    return (
        isBST(node.left, min, node.value) &&
        isBST(node.right, node.value, max)
    );
}

// BFS shortest path in an unweighted graph
function bfsShortestPath(graph, start, target) {
    // Queue for BFS: stores [vertex, pathTaken]
    const queue = [[start, [start]]];
    const visited = new Set(); // Track visited vertices

    while (queue.length > 0) {
        const [vertex, path] = queue.shift(); // Dequeue

        if (vertex === target) {
            return path; // Found the target → return path
        }

        visited.add(vertex);

        // Go through all neighbors
        for (let neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, [...path, neighbor]]);
            }
        }
    }

    return null; // No path found
}

// Dijkstra's algorithm for shortest path in a weighted graph
function dijkstra(graph, start) {
    const distances = {}; // Stores shortest known distance to each vertex
    const previous = {};  // Stores previous vertex in shortest path
    const visited = new Set();

    // Initialize all distances as Infinity, except start vertex
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        // Find the unvisited vertex with the smallest distance
        let currentVertex = null;
        for (let vertex in distances) {
            if (!visited.has(vertex) && 
               (currentVertex === null || distances[vertex] < distances[currentVertex])) {
                currentVertex = vertex;
            }
        }

        if (distances[currentVertex] === Infinity) break; // Unreachable vertices

        visited.add(currentVertex);

        // Update distances to neighbors
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

// Helper to reconstruct shortest path after running Dijkstra
function getShortestPath(previous, start, target) {
    const path = [];
    let current = target;
    while (current !== null) {
        path.unshift(current); // Add to front
        current = previous[current];
    }
    return path[0] === start ? path : null;
}


// Function to detect if a linked list contains a cycle
// Uses Floyd's Tortoise and Hare algorithm
function hasCycle(head) {
    // If the list is empty or has only one node → no cycle
    if (!head || !head.next) return false;

    let slow = head;       // Moves one step at a time (Tortoise)
    let fast = head.next;  // Moves two steps at a time (Hare)

    // Loop until the fast pointer reaches the end
    while (slow !== fast) {
        // If fast reaches null → no cycle
        if (!fast || !fast.next) return false;

        slow = slow.next;         // Move tortoise by 1 step
        fast = fast.next.next;    // Move hare by 2 steps
    }

    // If slow == fast → they met inside a cycle
    return true;
}

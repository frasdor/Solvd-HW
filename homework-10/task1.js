// ------------------------------
// Custom Hash Function
// ------------------------------
/**
 * Converts a string key into an array index
 * @param {string} key 
 * @param {number} tableSize 
 * @returns {number} index in hash table
 */

function customHash(key, tableSize) {
    let hash = 0; 
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % tableSize;
    }
    return hash;
}

// ------------------------------
// Hash Table Class
// ------------------------------
/**
 * Custom hash table implementation using separate chaining for collision handling.
 * Provides methods to insert, retrieve, and delete key-value pairs.
 */

class CustomHashTable {
    /**
     * Create a new hash table
     * @param {number} size - Number of buckets in the table
     */

    constructor(size = 10) {
        this.table = new Array(size);  // Array of buckets
        this.size = size; // Number of buckets
    }


    /**
     * Insert a key-value pair into the hash table.
     * If key already exists, updates the value.
     * Handles collisions using separate chaining (arrays of [key, value] pairs).
     * @param {string} key 
     * @param {*} value 
     */

    insert(key, value) {
        const index = customHash(key, this.size);

        if (!this.table[index]){
            this.table[index] = []; // Initialize bucket if empty
        }

        // Update value if key exists
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        // If key does not exist, add new key-value pair
        this.table[index].push([key, value]);
    }

    /**
     * Retrieve the value associated with a key.
     * Returns undefined if key is not found.
     * @param {string} key 
     * @returns {*} value associated with key
     */

    get(key) {
    const index = customHash(key, this.size);
    const bucket = this.table[index];

    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }


    /**
     * Delete a key-value pair from the hash table.
     * Returns true if deletion was successful, false if key not found.
     * @param {string} key 
     * @returns {boolean}
     */

  delete(key) {
    const index = customHash(key, this.size);
    const bucket = this.table[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }
}


// ------------------------------
// Test collision handling
// ------------------------------


const hashTable = new CustomHashTable(5);

// Insert some key-value pairs
hashTable.insert("cat", "animal");
hashTable.insert("tac", "reversed"); 
hashTable.insert("dog", "animal");
hashTable.insert("god", "reversed"); 
hashTable.insert("car", "vehicle");

// Retrieve values
console.log(hashTable.get("cat")); // "animal"
console.log(hashTable.get("tac")); // "reversed"
console.log(hashTable.get("dog")); // "animal"
console.log(hashTable.get("god")); // "reversed"

// Delete a key
hashTable.delete("tac");
console.log(hashTable.get("tac")); // undefined

// Display full table
console.log(hashTable.table)


// ------------------------------
// Analysis
// ------------------------------
/**
 * Performance Analysis:
 * 
 * Hash Function:
 * - Time complexity: O(n), where n = length of key
 * - Simple multiplication & addition algorithm, uniformly distributes small strings
 * 
 * Hash Table Operations (using separate chaining):
 * - insert: Average O(1), Worst O(k) if all elements collide in one bucket
 * - get: Average O(1), Worst O(k)
 * - delete: Average O(1), Worst O(k)
 * 
 * Trade-offs:
 * - Using separate chaining simplifies collision handling and allows multiple items per bucket
 * - Requires extra memory for arrays in each bucket
 * - Choosing a small table size increases chance of collisions, decreasing performance
 */
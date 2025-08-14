function customHash(key, tableSize) {
    let hash = 0; 
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % tableSize;
    }
    return hash;
}
const tableSize = 10;

console.log(customHash("cat", tableSize));   
console.log(customHash("dog", tableSize));   
console.log(customHash("car", tableSize));   
console.log(customHash("bike", tableSize));  

// Custom hash function
class CustomHashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    insert(key, value) {
        const index = customHash(key, this.size);

        if (!this.table[index]){
            this.table[index] = [];
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        // If it doesn't exist — add a new pair
        this.table[index].push([key, value]);
    }

    // Get value by key
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

  // Delete a key-value pair
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

hashTable.insert("cat", "animal");
hashTable.insert("tac", "reversed"); 
hashTable.insert("dog", "animal");
hashTable.insert("god", "reversed"); 
hashTable.insert("car", "vehicle");

console.log(hashTable.get("cat")); 
console.log(hashTable.get("tac")); 
console.log(hashTable.get("dog")); 
console.log(hashTable.get("god")); 

hashTable.delete("tac");
console.log(hashTable.get("tac")); 

console.log(hashTable.table)
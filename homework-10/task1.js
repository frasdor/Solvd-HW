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
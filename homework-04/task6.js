function deepCloneObject(obj, hash = new WeakMap()){
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if  (obj instanceof Date) {
        return new Date(obj);
    }
     if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    const copy = Array.isArray(obj) ? []: {};
    hash.set(obj, copy);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCloneObject(obj[key], hash);
            }
        }
    return copy;
    
}

const obj = { name: "Anna" };
obj.self = obj;

const cloned = deepCloneObject(obj);

console.log(cloned);      
console.log(cloned.self === cloned);  
console.log(cloned !== obj);

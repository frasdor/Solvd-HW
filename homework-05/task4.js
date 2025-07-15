function getArrayIntersection (arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

function getArrayUnion(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log(getArrayIntersection(array1, array2)); 
console.log(getArrayUnion(array1, array2)); 
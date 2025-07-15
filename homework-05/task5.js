function measureArrayPerformance (fn, arr) {
    const start = performance.now();
    fn(arr);
    const end = performance.now();
    return end - start;
}

function customMap(arr, callback) {
    const result = [];
    for(let i = 0; i< arr.lrngth; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

const myArray = Array.from({length: 100000}, (_, i) => i);
const timeBuiltInMap = measureArrayPerformance(arr => arr.map(x => x * 2), myArray);
const timeCustomMap = measureArrayPerformance(arr => customMap(arr, x => x * 2), myArray);

console.log("Built-in map time:", timeBuiltInMap, "ms");
console.log("Custom map time:", timeCustomMap, "ms");
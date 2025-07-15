class ArrayUtils {
    constructor(data =[]) {
        this.data = data;
    }

    customFilterUnique(callback){
        const seen = new Set();
        return this.data.filter(item => {
        const identifier = callback(item);
        if(seen.has(identifier)) {
            return false;
        }
        seen.add(identifier);
        return true;
        });
    }

    chunkArray(chunkSize) {
        const result = [];
        for(let i = 0; i < this.data.length; i += chunkSize) {
            const chunk = this.data.slice(i, i+ chunkSize);
            result.push(chunk);
        }
        return result;
    }

    customShuffle() {
        const array = [...this.data];
        let currentIndex = array.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    getArrayIntersection (arr) {
        return this.data.filter(element => arr.includes(element));
    }

    getArrayUnion(arr) {
        return [...new Set([...this.data, ...arr])]
    }

}

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Bartek" },
  { id: 1, name: "Anna" },
  { id: 3, name: "Celina" }
];
const utils = new ArrayUtils(users); 
const uniqueUsers = utils.customFilterUnique(user => user.id);
console.log('Unique users:', uniqueUsers);

const numbers = [1, 2, 3, 4, 5, 2, 3];

const numUtils = new ArrayUtils(numbers);

console.log("Chunk array:", numUtils.chunkArray(3));
console.log("Shuffle array:", numUtils.customShuffle());
console.log("Intersection:", numUtils.getArrayIntersection([2, 3, 10]));
console.log("Union:", numUtils.getArrayUnion([6, 7, 2, 3]));
const num = [1,2,3,4];
function sumAll(...args){
    return args.reduce((acc, numbers ) => acc + numbers, 0)  
}

console.log(sumAll(...num));
console.log(sumAll(1,3,5,76));
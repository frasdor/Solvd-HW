function curry(func, arity){
    return function curried(...args){
        if (args.length >= arity) {
            return func(...args);
        } else {
            return function (...nextArgs){
                return curried(...args, ...nextArgs);
            };
        }
    };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const result = curriedMultiply(2)(3)(4);
console.log("Result:", result);
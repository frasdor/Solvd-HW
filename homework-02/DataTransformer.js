class DataTransformer  {

     invertBoolean(value) { 
        if (typeof value  !== 'boolean') {
            throw new Error ('Argument must be a boolean.');
        }
        return !value;
    }
       
     addValues (a,b) {
        if (typeof a === 'number' && typeof b === 'number') {
            const sum = a + b;
            return sum;
        }
        if (typeof a === 'string' || typeof b ==='string') {
            const con = String(a) + String(b);
            return con;
        }
        if (Array.isArray(a) && Array.isArray(b)) {
            const concat = a.concat(b);
            return concat;
        }
        if (typeof a === 'object' && typeof b === 'object' && a && b) {
            const combined = { ...a, ...b };
            return combined;
        }
        throw new Error ('Addition is not possible');   
    }
    
     convertToNumber (value) {
        if (typeof value === 'string'){
            const num = value.includes('.') ? parseFloat(value) : parseInt(value);
            if (isNaN(num)) {
                throw new Error ('Conversion from string is not possible');
            }
            return num;
        }

        if (typeof value === 'number'){
            return value;
        }

        const num = Number(value);
        if (isNaN(num)) {
            throw new Error('Conversion is not possible');
        } 
        return num;
    }
    

     coerceToType ( value, type) {
        switch (type) {
            case 'number':
                return this.convertToNumber(value);

            case 'string':
                return String(value);
            case 'boolean':
                return Boolean(value);
            default:
                throw new Error('Unsupported type');
        }
    }

    stringifyValue(value) {
        if (typeof value === 'object' && value !== null ) {
            const myJSON = JSON.stringify(value);
            return myJSON;
        } else {
            return String(value);
        }
    }
}
const dt = new DataTransformer();
    
console.log(dt.invertBoolean(true));            
console.log(dt.addValues(10, 5));               
console.log(dt.addValues("Hello, ", "world!")); 
console.log(dt.addValues([1, 2], [3, 4]));      
console.log(dt.addValues({a:1}, {b:2}));        

console.log(dt.convertToNumber("123.45"));      
console.log(dt.convertToNumber(true));          

console.log(dt.coerceToType("100", "number"));  
console.log(dt.coerceToType(0, "boolean"));     
console.log(dt.coerceToType(123, "string"));    

console.log(dt.stringifyValue({x: 1, y: 2}));   
console.log(dt.stringifyValue(42));             

           
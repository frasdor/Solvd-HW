function validateObject(obj,schema) {
    for (let key in schema) {
        const rules = schema[key];

        if (rules.required && !(key in obj)) {
            return false;
        }
        if (key in obj) {
            const expectedType = rules.type;
            if (typeof obj[key] !== expectedType) {
                return false;
            } 
        }
    }
    return true;
}

const schema = {
    name: { type: "string", required: true },
    age: { type: "number", required: true },
    email: { type: "string", required: false }
};

const validObj = { name: "Anna", age: 28, email: "anna82@test.com" };
const invalidObj = { name: "Anna", age: "28" };

console.log(validateObject(validObj, schema));   
console.log(validateObject(invalidObj, schema));
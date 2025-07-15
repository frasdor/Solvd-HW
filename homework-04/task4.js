function createImmutableObject(obj){
    if (typeof obj === 'object' && obj !== null){

        for ( let key of Object.keys(obj)) {

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                obj[key] = createImmutableObject(obj[key]);
            }
            Object.defineProperty(obj, key, {
                value: obj[key],
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return obj;
}
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    }

 const immutablePerson = createImmutableObject(person);
 immutablePerson.firstName = "Mike";
 console.log(immutablePerson);

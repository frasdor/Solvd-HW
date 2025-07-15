class Person {
    constructor(firstName, lastName, age, email){
        Object.defineProperty(this, 'firstName',{
            value: firstName,
            writable: false,
            configurable: false,
            enumerable: true
        });
         Object.defineProperty(this, 'lastName',{
            value: lastName,
            writable: false,
            configurable: false,
            enumerable: true
        });
         Object.defineProperty(this, 'age',{
            value: age,
            writable: false,
            configurable: false,
            enumerable: true
        });
         Object.defineProperty(this, 'email',{
            value: email,
            writable: false,
            configurable: false,
            enumerable: true
        });

        Object.defineProperty(this, 'address',{
            value: address,
            writable: true,
            configurable: false,
            enumerable: false
        });
    }

        updateInfo(newInfo) {
                if (typeof newInfo !== "object" || newInfo === null) {
                    throw new Error("Argument must be an object");
                }
                
                const updatedData = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    age: this.age,
                    email: this.email,
                    address: this.address
                };

                for(let key in newInfo) {
                    if(["firstName", "lastName", "age", "email"].includes(key)) {
                        updatedData[key] = newInfo[key];
                    }

        }
    }
}
const newInfo = { firstName: "Jane", age: 32, random: "test" };
const updatedData = { firstName: "John", lastName: "Doe", age: 30, email: "john@example.com" };

for (let key in newInfo) {
    if (["firstName", "lastName", "age", "email"].includes(key)) {
        updatedData[key] = newInfo[key];
    }
}

console.log(updatedData);
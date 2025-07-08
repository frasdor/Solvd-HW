class Product {
    constructor(name, price, quantity){
        if (typeof price !== 'number' || price <=0){
            throw new Error ('Price must be a positive number.');
        }
        if (typeof quantity !== 'number' || quantity < 0){
            throw new Error ('Quantity must be a non-negative number.')
        }

        this.name = name;

        Object.defineProperty( this, 'price', {
            value: price,
            writable: false,
            enumerable: false,
            configurable: false
        });
        Object.defineProperty( this, 'quantity', {
                value: quantity,
                writable: false,
                enumerable: false,
                configurable: false
        });
    } 
    getTotalPrice(){
        const priceDescriptor = Object.getOwnPropertyDescriptor(this, 'price');
        const quantityDescriptor = Object.getOwnPropertyDescriptor(this, 'quantity');

        if (priceDescriptor && quantityDescriptor) {
            const price = priceDescriptor.value;
            const quantity = quantityDescriptor.value;
            return price * quantity;
        } else {
            throw new Error('Cannot read properties "price" or "quantity"'); 
        }
    }

    deleteNonConfigurable(prop) {
        const descriptor = Object.getOwnPropertyDescriptor(this, prop);

        if(!descriptor) {
            console.log(`The property '${prop}' does not exist.`);
            return;
        }
        if(!descriptor.configurable) {
            throw new Error (`Cannot delete the property '${prop}' because it is non_configurable.`);
        }

        delete this[prop];
        console.log(`The property "${prop}" has been deleted.`);
    }
}

const product = new Product("Laptop", 1000, 5);

console.log(product.getTotalPrice());  

product.deleteNonConfigurable('quantity');   
console.log(product);               

try {
    console.log(product.getTotalPrice());  
} catch (e) {
    console.log(e.message);              
}

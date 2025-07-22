// The Book class represents a book in the online bookstore.
// It stores key details like title, author, ISBN, price, and availability.

class Book {
    constructor(title, author, ISBN, price, availability) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        this.availability = availability;
    }

    // This method returns the type of the book.
  // Can be overridden in subclasses like FictionBook or NonFictionBook.
    getType() {
        return "Generic Book";
    }
}

// FictionBook extends Book and overrides getType()
class FictionBook extends Book {
    getType() {
        return "Fiction"; // Identifies the book as fiction
    }
}

// NonFictionBook extends Book and overrides getType()
class NonFictionBook extends Book {
    getType() {
        return "Non-Fiction"; // Identifies the book as non-fiction
    }
}



// The User class represents a customer of the bookstore.
class User {
    constructor(name, email, userID){
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
}

// The Cart class stores the user's selected books before placing an order.
class Cart {
    constructor(user){
        this.user = user;  // The user who owns the cart
        this.books = [];   // Array to hold selected books
     
    }

    // Adds a book to the cart
    addBook(book){
        this.books.push(book);
    }

     // Removes a book from the cart based on its ISBN
    removeBook(ISBN) {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
    }

    // Calculates the total price of all books in the cart
    totalPrice() {
        return this.books.reduce((total,book) => total + book.price, 0);
    }
}


// The Order class represents a finalized purchase made by the user.
class Order {
    constructor(user, books){
        this.user =user;       // The user who placed the order
        this.books = books;    // The list of books in the order
        this.total = books.reduce((sum, book) => sum + book.price, 0);  // Total cost
    }
}


// === Book objects using subclasses for polymorphism ===
const book1 = new FictionBook("The Hobbit", "J.R.R. Tolkien", "12345", 39.99, true);
const book2 = new FictionBook("1984", "George Orwell", "23456", 29.99, true);
const book3 = new NonFictionBook("Clean Code", "Robert C. Martin", "34567", 49.99, true);
const book4 = new NonFictionBook("The Pragmatic Programmer", "Andrew Hunt", "45678", 44.99, true);


// === User objects ===
const user1 = new User("Dorota", "dorota@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);


// === Cart objects for each user ===
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);


// === Simulating scenario where users browse and add books to their carts ===
console.log(`${user1.name} is browsing books...`);
console.log(`Adding "${book1.title}" and "${book2.title}" to ${user1.name}'s cart.`);
cart1.addBook(book1);
console.log(`Added a book of type: ${book1.getType()}`); // Polymorphism example
cart1.addBook(book2);
console.log(`Added a book of type: ${book2.getType()}`);



console.log(`${user2.name} is browsing books...`);
console.log(`Adding "${book3.title}" and "${book4.title}" to ${user2.name}'s cart.`);
cart2.addBook(book3);
cart2.addBook(book4);


// === Users place orders based on their carts ===
const order1 = new Order(cart1.user, cart1.books);
const order2 = new Order(cart2.user, cart2.books);

// === Output order details for each user ===
console.log(`Order by ${order1.user.name}: ${order1.books.map(b => b.title).join(", ")}`);
console.log(`Total: $${order1.total.toFixed(2)}`);

console.log(`Order by ${order2.user.name}: ${order2.books.map(b => b.title).join(", ")}`);
console.log(`Total: $${order2.total.toFixed(2)}`);

// === Display full order objects for debugging or review ===
console.log(order1);
console.log(order2);
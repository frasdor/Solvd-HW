class Book {
    constructor(title, author, ISBN, price, availability) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
        this.availability = availability;
    }
}

class User {
    constructor(name, email, userID){
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
}

class Cart {
    constructor(user){
        this.user = user;
        this.books = [];
     
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(ISBN) {
        this.books = this.books.filter(book => book.ISBN !== ISBN);
    }
    totalPrice() {
        return this.books.reduce((total,book) => total + book.price, 0);
    }
}

class Order {
    constructor(user, books){
        this.user =user;
        this.books = books;
        this.total = books.reduce((sum, book) => sum + book.price, 0);
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "12345", 39.99, true);
const book2 = new Book("1984", "George Orwell", "23456", 29.99, true);
const book3 = new Book("Clean Code", "Robert C. Martin", "34567", 49.99, true);
const book4 = new Book("The Pragmatic Programmer", "Andrew Hunt", "45678", 44.99, true);

const user1 = new User("Dorota", "dorota@example.com", 1);
const user2 = new User("Bob", "bob@example.com", 2);

const cart1 = new Cart(user1);
cart1.addBook(book1);
cart1.addBook(book2);

const cart2 = new Cart(user2);
cart2.addBook(book3);
cart2.addBook(book4);

const order1 = new Order(cart1.user, cart1.books);
const order2 = new Order(cart2.user, cart2.books);

console.log(order1);
console.log(order2);
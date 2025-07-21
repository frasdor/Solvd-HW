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
    addBooks(book){
        this.books.push(book);
    }
    removeBooks(ISBN) {
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
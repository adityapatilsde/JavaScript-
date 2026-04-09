/* CONSTRUCTOR = special method for defining the properties
and methods of objects */

function Car(make , model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}

}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();

//====================================================================

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Aditya", 18);
let s2 = new Student("Rahul", 19);

console.log(s1.name);
console.log(s2.age);

//===============================================================================

function BankAccount(name, balance){
    this.name = name;
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }
}

let acc1 = new BankAccount("Aditya", 1000);

acc1.deposit(500);

console.log("Balance:", acc1.balance);

//========================================================================

function Library(name, books){
    this.name = name;
    this.books = books;

    this.addBook = function(book){
        this.books.push(book);
    }

    this.removeBook = function(book){
        let index = this.books.indexOf(book);
        if(index !== -1){
            this.books.splice(index,1);
        }
    }

    this.displayBooks = function(){
        console.log("Library:", this.name);
        console.log("Books:");
        for(let i = 0; i < this.books.length; i++){
            console.log(this.books[i]);
        }
    }
}

let lib = new Library("City Library", ["C++", "JavaScript", "Python"]);

lib.addBook("Java");
lib.removeBook("C++");

lib.displayBooks();

//===========================================================================

// 1. Constructor for Item
function Item(name, price) {
  this.name = name;
  this.price = price;
}

// 2. Constructor for CartItem
function CartItem(item, quantity) {
  this.item = item;
  this.quantity = quantity;

  this.getTotal = function() {
    return this.item.price * this.quantity;
  };
}

// 3. Constructor for Cart
function Cart() {
  this.items = [];

  // Add item
  this.addItem = function(item, quantity) {
    let cartItem = new CartItem(item, quantity);
    this.items.push(cartItem);
    console.log(item.name + " added x" + quantity);
  };

  // Calculate total
  this.calculateTotal = function() {
    let total = 0;

    this.items.forEach(function(ci) {
      total += ci.getTotal();
    });

    return total;
  };

  // Apply discount
  this.applyDiscount = function(total) {
    if (total > 300) {
      return total * 0.9;
    }
    return total;
  };

  // Print bill
  this.printBill = function() {
    console.log("\n--- BILL ---");

    this.items.forEach(function(ci) {
      console.log(ci.item.name + " x" + ci.quantity);
    });

    let total = this.calculateTotal();
    let finalAmount = this.applyDiscount(total);

    console.log("Total:", total);
    console.log("Final Amount:", finalAmount);
  };
}
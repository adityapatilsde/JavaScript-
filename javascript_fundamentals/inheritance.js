/*inheritance = allows a new class to inherit properties and
 methods from an existing class (parent -> child)
 helps with code reusability */

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleeo(){
        console.log(`Thia ${this.name} is sleeping`)
    }
    
}

class Rabit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`Thia ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleeo();
rabbit.run();

fish.eat();
fish.sleeo();
fish.swim();

hawk.eat();
hawk.sleeo();
hawk.fly();

//CODE 2.


// Parent class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

// Child class
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);     // calling parent constructor
        this.department = department;
    }

    showManager() {
        console.log(`${this.name} manages ${this.department} department.`);
    }
}

// Object of child class
let m1 = new Manager("Amit", 50000, "IT");

m1.showDetails();   // inherited method
m1.showManager();  

//CODE 3 

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class
class Dog extends Animal {

    // overriding parent method
    speak() {
        console.log(`${this.name} barks 🐶`);
    }

    run() {
        console.log(`${this.name} is running fast!`);
    }
}

let d1 = new Dog("Tommy");

d1.speak();   // overridden method
d1.run();     // own method

//CODE 4

// Parent class
class Shape {
    constructor(color) {
        this.color = color;
    }

    showColor() {
        console.log("Color is: " + this.color);
    }
}

// Child class
class Rectangle extends Shape {
    constructor(color, length, breadth) {
        super(color);          // call parent constructor
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        return this.length * this.breadth;
    }
}

// Creating object of child class
let r1 = new Rectangle("Blue", 10, 5);

r1.showColor();           // inherited method
console.log(r1.area());   // own method

// CODE 6

// Grandparent class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log("Brand: " + this.brand);
    }
}

// Parent class
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    showModel() {
        console.log("Model: " + this.model);
    }
}

// Child class
class ElectricCar extends Car {
    constructor(brand, model, battery) {
        super(brand, model);
        this.battery = battery;
    }

    showBattery() {
        console.log("Battery: " +
        }


        //code 7

        // Parent class
class User {
    constructor(username) {
        this.username = username;
    }

    login() {
        console.log(this.username + " has logged in.");
    }
}

// Child class
class Teacher extends User {
    constructor(username, subject) {
        super(username);     // call parent constructor
        this.subject = subject;
    }

    teach() {
        console.log(this.username + " is teaching " + this.subject);
    }
}

// Object creation
let t1 = new Teacher("Aditya", "JavaScript");

t1.login();   // inherited method
t1.teach();   // child’s own method

//CODE 8

// Parent class
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: " + amount);
    }

    showBalance() {
        console.log("Balance: " + this.balance);
    }
}

// Child class
class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance, interestRate) {
        super(accountHolder, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        let interest = this.balance * this.interestRate / 100;
        this.balance += interest;
        console.log("Interest added: " + interest);
    }
}

// Create object
let acc1 = new SavingsAccount("Aditya", 10000, 5);

acc1.deposit(2000);     // inherited method
acc1.addInterest();     // own method
acc1.showBalance();     // inherited method

//CODE 9
// Parent class
class GameCharacter {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        console.log(this.name + " attacks!");
    }
}

// Child class
class Warrior extends GameCharacter {
    constructor(name, health, weapon) {
        super(name, health);   // call parent constructor
        this.weapon = weapon;
    }

    showWeapon() {
        console.log(this.name + " uses " + this.weapon);
    }
}

// Create object
let w1 = new Warri



















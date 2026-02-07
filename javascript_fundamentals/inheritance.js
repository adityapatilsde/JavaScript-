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


















// Parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
}

// Child class inheriting from Person
class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);   // calls parent constructor
        this.rollNo = rollNo;
    }

    study() {
        console.log(`${this.name} is studying. Roll No: ${this.rollNo}`);
    }
}

// Creating object of child class
let s1 = new Student("Rahul", 18, 23);

s1.introduce();   // inherited from Person
s1.study();       // own method

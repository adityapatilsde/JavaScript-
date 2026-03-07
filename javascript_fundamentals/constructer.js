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

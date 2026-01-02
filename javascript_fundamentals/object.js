/* object = A collection of related properties and/or
methods Can represent real world objects (people, products,
places )
        object = {key:value,
                  function()}*/

const person1 =  {
    firstname: "spongBob",
    lastname: "squareBob",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi I AM Spongbob")},
}          

const person2 = {
    firstname: "patrick",
    lastname: "william",
    age: 42 ,
    isEmployed: false,
    sayHello: function(){console.log("Hey I AM Patrick")},
}

person1.sayHello();
person2.sayHello();

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);
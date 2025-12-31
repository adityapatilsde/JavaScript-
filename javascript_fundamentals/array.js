/*array = a variable like structure that can hold more
than one value */
//arrays always begin with zero

let fruits = ["apple", "orange" , "banana"];

fruits[0] = "coconut"
fruits.unshift("mango");

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);

let numofFruits = fruits.length;
let index = fruits.indexOf("orange");
console.log(numofFruits);
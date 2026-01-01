/* spread operator = ...allows an iterable suach as 
an array or string to be explained into seperate 
elements (unpacks the element) */
//CODE 1.

let username = "Bro code";
let letters = [...username].join("-");
console.log(letters);

//================================================================
//CODE 2. 

let fruits = ["apple" , "orange" , "banana"];
let vegetables = ["carrots" , "tomatoes" , "ladyfinger"];
let food = [...fruits, ...vegetables, "eggs" , "milk"];

console.log(food);

//=================================================================

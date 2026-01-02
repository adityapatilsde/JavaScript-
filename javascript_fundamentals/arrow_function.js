/*ARROW function =  a concise way to write function expressions
good for simple function that you can use only once
(parameters) => some code */
//CODE 1.

/*function Hello(){
    console.log("Hello")
}
Hello();*/

//normally we do like this but 
//CODE 2 (arrow function)

const hello = (name , age) => {console.log(`Hello ${name}`)
console.log("")}

//======================================================================
//CODE 2. 

const numbers = [1, 2, 3, 4, 5, 6]; 

const squares = numbers.map((element) => Math.pow(element, 2));
//.map Creates a new array by changing every element.

const cubes = numbers.map((element) => Math.pow(element, 3));

const evemNums = numbers.filter((element) => element %2 === 0);
// filter Creates a new array with only elements that pass a condition.

const oddNums = numbers.filter((element) => element %2 !== 0);

const total = numbers.reduce((accumulator, element) => accumulator + element);
//.reduce Reduces the array to a single value (number, string, object, array).

 
console.log(squares);
console.log(cubes);
console.log(evemNums);
console.log(oddNums);
console.log(total);

//=======================================================================
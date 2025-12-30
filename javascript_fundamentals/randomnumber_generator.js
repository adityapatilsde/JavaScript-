/* basic structure for random number generator
const min = 50;
const max = 100;
let randomnum = Math.floor (Math.random() * (max - min)) + min;
console.log(randomnum);*/

//Random number generator

const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");

let min = 1;
let max = 6;
let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor (Math.random() * max) *min;
    mylabel.textContent = randomnum;
}

/* .reduce() = reduce the elements of an array to a
single value  */

//=====================================================================
//CODE 1. 

const prices = [5, 30 ,10 ,25 , 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator , element){
    return accumulator + element;
}

//======================================================================
// CODE 2. 

const gardes = [75, 50, 90, 80 , 65 , 95];

const maximum = gardes.reduce(getMax);
const minimum = gardes.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator , element){
    return Math.max(accumulator , element);
}
function getMin(accumulator , element){
    return Math.min(accumulator , element);
}

//======================================================================
/* filter() = creates a new array by filtering out
              elements in simple words --------------
----Returns the elements of an array that meet the
 condition specified in a callback function */

//===================================================================
// CODE 1.


let numbers = [1, 2, 3, 4, 5, 6, 7];
let evemNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd)

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//====================================================================
//CODE 2.


const ages = [16, 17 ,18 , 19 , 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(children);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

//====================================================================


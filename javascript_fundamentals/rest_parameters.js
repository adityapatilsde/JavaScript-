/* REST PARAMETERS =  (...rest) allow a function work
with  a variable number of arguments by holding them
into an array

spread =  expands an array into seperate elements 
rest = bundles seperate elements into an array*/


function openfridge(...foods){
    console.log(...foods);
}
function getfood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "donuts";
const food4 = "salad";

//openfridge(food1 , food2 , food3 ,food4);

const foods = getfood(food1 , food2 ,food3, food4);

console.log(foods);

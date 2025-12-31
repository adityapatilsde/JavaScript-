/* LOGICAL OPERATORS = used to combine or manipulate 
boolean values (true / false)

AND = &&
OR = ||
NOT = !

*/
//===========================================================================
//CODE 1.
const temp = 24;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

//AND OPERATOR && = all the statemnets must be true

//============================================================================
//CODE 2.

const temperature = 100;

if(temperature <= 0 || temperature > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

/*OR OPERATOR || = any one statement must be true*/
//============================================================================
//CODE 3.

const issunny = true;

if(!issunny){
    console.log("It is cloudy");
}
else{
    console.log("It is sunny");
}

/* NOT OPERATOR changes boolean value from true to false 
and false to true.

===============================================================================*/





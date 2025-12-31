// 1. ASSIGNMENNT OPERATOR =
//   2. COMPARISON OPERATOR == (  compare if values are equal)
//   3. STRICT EQUALITY OPERATOR === (compare if values and datatypes are equal)
//   4. INEQUALITY OPERATOR !=
//   5. STRICT INEQUALITY OPERATOR !==

const PI = 3.14; // assignment opeartor used for assigning value
if(PI == "3.14"){//comaprsion opeartor used for comparing givem PI value
      console.log("This is a PI");
}
else{
    console.log("This is not a PI");
}

/* NOW THE OUTPUT SHOWS THIS IS A PIE beacuse comaprision operator 
only comapres values not data types lets see strict equality 
operator */

const pi = 3.14;
if (pi === "3.14"){
    console.log("This is a pi");
}
else{
   console.log("This is not a pi");
}

/* NOW THW OUTPUT SHOWS This is not a pi as the strict
equality operator compares values and datatype both in const 
statement the datatype is NUMBER in if statement the values
data type is string */

/* INEQUALITY OPERATOR 
-----------------------------------------------------------*/
const pie = 3.14;
if(pie != "3.14"){
    console.log("This is NOT A PI");
}
else{
    console.log("This is  a PI");
}

// SAME CASE AS BEFORE DEFINATIONS--------------------
/* STRICT INEQUALITY OPERATOR
------------------------------------------------------------*/

const piee = 3.14;
if(piee !== "3.14"){
    console.log("This is NOT A PI");
}
else{
    console.log("This is  a PI");
}

//============================================================




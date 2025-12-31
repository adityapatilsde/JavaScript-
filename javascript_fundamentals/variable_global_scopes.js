// Variable scope = where a variable is recognized and 
// accesible (local vs global)}
let x = 3; // global variable decalred outside the function

function1();

function function1(){
    let x = 1; // local variable is always considered first before moving on to global 
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
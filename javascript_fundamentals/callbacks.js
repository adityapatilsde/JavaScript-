/*CALLBACK = A function that is passed as an argument to
             to another function

             used to handle asynchronus operations:
             1. Reading a file
             2. Network requests
             3. Interacting with databases

             "Hey when you are done call this next"*/

//==========================================================================
//CODE 1.             

hello(wait);

function hello(callback){
    console.log("Hello");
    callback();
}
function wait(){
    console.log("Wait");
}
function leave(){
    console.log("move on");
}
function goodbye(){
    console.log("Goodbye");
}

//==========================================================================
//CODE 2.

sum(displayConsole, 1, 2);

function sum(callback, x , y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(results);
}


//==========================================================================














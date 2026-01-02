/*Function declaration = define a reusable block of code
that performs a specific task */

function Hello(){
    console.log("hello");
}

/*Function expressions = a way to define function as values
or variables */

const hello = function(){
    console.log("Hello");
}
hello();

/*Function expressions = a way to define function as values
or variables */ 

setTimeout(hello ,6000);

/* that is 6000 is the milisecond timer after 6000 miliseconds
the output will be shown in the console*/
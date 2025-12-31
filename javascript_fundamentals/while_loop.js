/* WHILE LOOP = repeating same code while some comdition
is true */
//CODE 1.

let username = "";
while(username === ""){
    username = window.prompt("Enter your name");
}
console.log(`Hello ${username}`);
//first the condition is checked and then executed

//==================================================================
//CODE 2.
let usernamee;

do{
   usernamee = window.prompt("Enter your name");

}while(usernamee = "" || usernamee === null)
    console.log(`Hello ${usernamee}`);

// in DO WHILE The code executes first, then 
// the condition is checked   

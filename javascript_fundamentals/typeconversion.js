// type conversion = change the datatype of a value to another
//       (strings,numbers,boolean)


let age = window.prompt("How old are you");
//window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
age+=1;
console.log(age);
console.log(typeof age);
/* the above code output will just print the input and beside it prints 1 in it
for ex = input =50 output= 501 
not 51 because string concatination */

//===================================================================
//now diff code starts  but now we wil do type conversion

let age2 = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age, typeof age);

// here we converted string into numbers data type in the above code
//====================================================================

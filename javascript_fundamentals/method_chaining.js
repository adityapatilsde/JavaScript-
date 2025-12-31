/*Method chaining = calling one method after another in one
continuos line of code.*/

//----EX CODE withput method chaining code ---------------------*/
//CODE 1


let usernameE = window.prompt("Enter Your Username");

usernameE = usernameE.trim();
let letter =  usernameE.charAt(0);
letter = letter.toUpperCase();

let extrachars = usernameE.slice(1);
extrachars = extrachars.toLowerCase();
usernameE = letter + extrachars;

console.log(usernameE);

/*THIS program without method chaining converts the
first letter into upppercase after slicing and rest of
the letters in lower space and [has many steps]

Now we will see method chaining methode in next code*/

//=====================================================================================
//CODE 2

/*----------now we will see the method chaining ---------------*/

let user = window.prompt("Enter your idname");
user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();
console.log(user);
 
/* IN METHOD CHAINING at the endings of your code line instead
of typing semicolon and continuing on next line we can type 
a dot . and write the next method these makes readability 
easy and cuts of many long steps */

//====================================================================================



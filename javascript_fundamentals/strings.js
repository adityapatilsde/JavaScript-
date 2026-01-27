/*string methods = allow you to calculate and work
 with text (strings)*/
//CODE 1 

 let username = "Brocode";
 console.log(username.indexOf("o"));

 /*OUTPUT shows = 2 because string index starts from 0
so BROCODE   ==
   0123456   == SEE  i have matched them according
                      to the index..*/

//====================================================================
//CODE 2

let user = "Broisis";
console.log(user.length);
 
/* in code 2 our output is 6 because .length property 
counts the total number of letters present in the
string word and gives the exact number of letters as
output*/

//====================================================================
//CODE 3 

let namee = "aditya  "// given 3 whitespace after aditya
console.log(namee.trim()); 

/* from using this trim statement i have removed(trimmed)
all the 3 whitespaces after aditya as u can see in output*/

//====================================================================
//CODE 4

let id = "aditi";
console.log(id.toUpperCase());

let ids = "ADITIIII";
console.log(ids.toLowerCase());

/* toUpperCase converts all the letters in capital
toLowerCase converts all the letters to small */

//====================================================================
//CODE 5 

let yo = "boiiii";
yo = yo.repeat(3);
console.log(yo);

/* .repeat = repeats the strings attached to each other like 
output = boiiiiboiiiiboiiii*/

//=======================================================================
//CODE 6 

let rojo = "bojo";
let hojo = rojo.startsWith(""); // here we check if the string starts with space
console.log(hojo);

/* with the property .startsWith() we checked that if 
our string with any space or not we can check with 
any other thing also
CODE 6 output = False */

/* one similar property we have
.endWith 
it checsk the ends of strings*/
//=========================================================================
//CODE 7 

let phonenumber = "123-456-7890";
phonenumber = phonenumber.replaceAll("-","");
console.log(phonenumber);

/*replaces all the - dashes with nothing the first charecter in
bracket you type will be replaced from the next one */
//=========================================================================
//CODE 8

/* string slicing =  creating a substring from a 
portion of amother string 
string.slice(start, end)*/

const fullnamee = "Bois Code";
let firstname = fullnamee.slice(0,4);
let lastname = fullnamee.slice(5,9);
console.log(firstname);
console.log(lastname);

let first = "Broseph Code";
let last = first.slice(0,first.indexOf(" "));
console.log(last);


/*DOM = dOCUMENT OBJECT MODEL
OBJECT that represents the page you see in the web browser and 
provides you with an API to interact with it
Web browser constructs the DOM when it loads in HTML documemnt
Javascript can acess the DOM to dynamically
change the contact,  structure and style of a web page. */


const username = "Aditya";
const Welcomemsg = document.getElementById("Welcome-msg");

Welcomemsg.textContent += username === "" ? `Guest` : username;

console.dir(document);
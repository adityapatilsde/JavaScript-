/*element selectors = Methods used to target and manupilate HTml elements
Theu allow you to select one or more multiple HTML elements from the
DOM (Document object Model) 

1. document.getelementById()  Element OR Null
2. document.getelementByClassName()  HTMLCollection
3. document .getelementByTagName()  HTMLCollection
4.   document.querySelector()  Element OR Null
5. document.querySelectorAll()  NodeList */

//==========================================================================================
//CODE 1

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//==========================================================================================
//CODE 2 

const fruits = document.getElementsByClassName("fruits");
fruits[0].style.backgroundColor = "yellow";
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}



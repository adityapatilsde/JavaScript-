/* JSON = {Javscript object notation } data-interchange format
used for exchanging data between a server abd a web application 
Json files (key:vlaue) OR [value1 , Value2, Value3]

JSON.stringify() = converts a JS object to a JSON string.
JSON.parse() = converts a JSON string to a JS object*/
const names = ["Spongbob" , "Patrick" , "Squidward" , "Sandy"]
const person = {
    "name" : "Spongebob" ,
    "age" : 39 ,
    "isEmployed" : true , 
    "hobbbies" : ["jellyfishing" , "karate" , "Cooking"] 
};
const people = [{
    "name" : "Spongbob", 
    "age" : 30,
    "isEmployed" : true
},
{
   
    "name" : "Patrick" ,
    "age" : 34 ,
    "isEmployed" : false  
},
{
    
    "name" : "Squidward" ,
    "age" : 50 ,
    "isEmployed" : true  
}, 
{
    
    "name" : "Sandy" ,
    "age" : 27 ,
    "isEmployed" : false  
}]
const jsonstring = JSON.stringify(people);

console.log(jsonstring);

//===============================================================================================      
//CODE 2`

fetch("person.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.isEmployed)))
     .catch(error => console.error(error));
     

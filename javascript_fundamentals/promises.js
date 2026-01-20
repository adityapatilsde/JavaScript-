/* Promises = An object that manages asynchronous operations wrap a 
              a promise object around (asynchronous code) 
              "i promise to rturn a value
              PENDING -> RESOLVED OR REJECTED 
              new Promise ((resolve , reject ) => {asynchronous code})
              
              Do these chores in order 
              1. WALK THE DOG
              2. CLEAN THE KITCHEN 
              3. TAKE OUT THE TRASH */



function walkDog(callback){

    return new Promise((resolve , reject ) => {
         setTimeout (() => {
        console.log("You walk the dog 🐕");
      } , 1500); 

    });
}    


function cleanKitchen(callback){

    return new Promise((resolve, reject) => {
         setTimeout (() => {
        resolves("You clean the Kitechen 🍽️");
    } , 2500);

    });
} 


function takeOutTrash(callback){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("You take out the trash 🚮");
            callback();
        } , 500);
    });
} 

walkDog().then(value => {console.log(value); return cleanKitchen()})
       .then(value => {console.log(value); return takeOutTrash()});
/* Promises = An object that manages asynchronous operations wrap a 
              a promise object around (asynchronous code) 
              "i promise to rturn a value
              PENDING -> RESOLVED OR REJECTED 
              new Promise ((resolve , reject ) => {asynchronous code})
              
              Do these chores in order 
              1. WALK THE DOG
              2. CLEAN THE KITCHEN 
              3. TAKE OUT THE TRASH */
function walkDog(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog 🐕");
            }
            else{
                reject("You didnt walk the dog");
            }
        } , 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve("You clean the kitchen 🍽️")
            }
            else{
                reject("You didnt clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise(( resolve , reject) => {
        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You take out the trash ♻️");
            }
            else{
                reject("You didnt take out the trash");''
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));
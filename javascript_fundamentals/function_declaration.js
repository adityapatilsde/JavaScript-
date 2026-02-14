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
//CODE 10 

// Parent class
class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    processPayment() {
        console.log("Processing payment of ₹" + this.amount);
    }
}

// Child class
class CreditCardPayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount);   // call parent constructor
        this.cardNumber = cardNumber;
    }

    showCard() {
        console.log("Paid using card ending with " + this.cardNumber.slice(-4));
    }
}

// Create object
let p1 = new CreditC

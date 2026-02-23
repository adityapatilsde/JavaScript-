/* object = A collection of related properties and/or
methods Can represent real world objects (people, products,
places )
        object = {key:value,
                  function()}*/

const person1 =  {
    firstname: "spongBob",
    lastname: "squareBob",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi I AM Spongbob")},
}          

const person2 = {
    firstname: "patrick",
    lastname: "william",
    age: 42 ,
    isEmployed: false,
    sayHello: function(){console.log("Hey I AM Patrick")},
}

person1.sayHello();
person2.sayHello();

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);

//code 2 =========================================================================

const bankAccount = {
  accountHolder: "Aditya Patil",
  accountNumber: "1234567890",
  balance: 5000,

  // Deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`₹${amount} deposited successfully.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  },

  // Withdraw money
  withdraw(amount) {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn successfully.`);
    } else {
      console.log("Insufficient balance or invalid amount.");
    }
  },

  // Check balance
  checkBalance() {
    console.log(`Current Balance: ₹${this.balance}`);
  }
};

// Using the object
bankAccount.checkBalance();
bankAccount.deposit(2000);
bankAccount.withdraw(3000);
bankAccount.checkBalance();
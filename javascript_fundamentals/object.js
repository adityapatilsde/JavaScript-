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

//code3 =====================================================================================

const student = {
  name: "Aditya Patil",
  rollNo: 101,
  marks: 75,

  // Add marks
  addMarks(score) {
    if (score > 0) {
      this.marks += score;
      console.log(`${score} marks added successfully.`);
    } else {
      console.log("Marks should be positive.");
    }
  },

  // Reduce marks
  deductMarks(score) {
    if (score > 0 && score <= this.marks) {
      this.marks -= score;
      console.log(`${score} marks deducted successfully.`);
    } else {
      console.log("Invalid marks deduction.");
    }
  },

  // Check result
  checkResult() {
    console.log(`Total Marks: ${this.marks}`);
    if (this.marks >= 40) {
      console.log("Status: Pass ✅");
    } else {
      console.log("Status: Fail ❌");
    }
  }
};

// Using the object
student.checkResult();
student.addMarks(10);
student.deductMarks(20);
student.checkResult();


//===============================================================================

const studentManager = {
  students: [],

  // Add new student
  addStudent(name, marks) {
    const student = {
      id: this.students.length + 1,
      name: name,
      marks: marks,
      passed: marks >= 40
    };

    this.students.push(student);
    console.log(`${name} added successfully.`);
  },

  // Get all students
  getAllStudents() {
    console.log("Student List:");
    this.students.forEach(student => {
      console.log(
        `ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}, Passed: ${student.passed}`
      );
    });
  },

  // Get topper
  getTopper() {
    let topper = this.students[0];

    for (let i = 1; i < this.students.length; i++) {
      if (this.students[i].marks > topper.marks) {
        topper = this.students[i];
      }
    }

    console.log(`Topper is ${topper.name} with ${topper.marks} marks.`);
  }
};


// Using the object
studentManager.addStudent("Aditya", 85);
studentManager.addStudent("Rahul", 67);
studentManager.addStudent("Sneha", 92);

studentManager.getAllStudents();
studentManager.getTopper();
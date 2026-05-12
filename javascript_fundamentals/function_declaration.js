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
//====================================================================================================

// Create object
let p1 = new CreditC
let marks = [78, 85, 92, 67, 88];

// function to calculate total
function getTotal(arr) {
    return arr.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);
}

// function to calculate average
function getAverage(arr) {
    return getTotal(arr) / arr.length;
}

// function to find highest
function getHighest(arr) {
    return Math.max(...arr);
}

// function to find lowest
function getLowest(arr) {
    return Math.min(...arr);
}

console.log("Total Marks:", getTotal(marks));
console.log("Average Marks:", getAverage(marks));
console.log("Highest Marks:", getHighest(marks));
console.log("Lowest Marks:", getLowest(marks));




//==============================================================================

// Function to create employee
function createEmployee(name, salary, experience) {
    return {
        name: name,
        salary: salary,
        experience: experience
    };
}

// Function to calculate bonus
function calculateBonus(employee) {
    let bonus = 0;

    if (employee.experience >= 10) {
        bonus = employee.salary * 0.20; // 20% bonus
    } 
    else if (employee.experience >= 5) {
        bonus = employee.salary * 0.10; // 10% bonus
    } 
    else {
        bonus = employee.salary * 0.05; // 5% bonus
    }

    return bonus;
}

// Function to display employee details
function displayEmployee(employee) {
    let bonus = calculateBonus(employee);

    console.log("Employee Name:", employee.name);
    console.log("Salary:", employee.salary);
    console.log("Experience:", employee.experience, "years");
    console.log("Bonus:", bonus);
    console.log("Total Salary:", employee.salary + bonus);
}

// Creating employees
let emp1 = createEmployee("Rahul", 50000, 6);
let emp2 = createEmployee("Anita", 70000, 12);

// Display details
displayEmployee(emp1);
console.log("-------------------");
displayEmployee(emp2);

//=========================================================

// Student Management System

let students = []

// add student
function addStudent(id,name,marks)
{
    let student = {
        id:id,
        name:name,
        marks:marks
    }

    students.push(student)

    console.log(name + " added")
}

// show students
function showStudents()
{
    console.log("Student List")

    for(let i=0;i<students.length;i++)
    {
        console.log(
            students[i].id + " " +
            students[i].name + " " +
            students[i].marks
        )
    }
}

// average marks
function averageMarks()
{
    let total = 0

    for(let i=0;i<students.length;i++)
    {
        total = total + students[i].marks
    }

    let avg = total / students.length

    console.log("Average Marks = " + avg)
}

// topper
function topper()
{
    let top = students[0]

    for(let i=0;i<students.length;i++)
    {
        if(students[i].marks > top.marks)
        {
            top = students[i]
        }
    }

    console.log("Topper is " + top.name)
}

// search student
function searchStudent(id)
{
    for(let i=0;i<students.length;i++)
    {
        if(students[i].id == id)
        {
            console.log("Student Found")
            console.log(students[i])
        }
    }
}

// update marks
function updateMarks(id,newMarks)
{
    for(let i=0;i<students.length;i++)
    {
        if(students[i].id == id)
        {
            students[i].marks = newMarks
            console.log("Marks Updated")
        }
    }
}

// delete student
function deleteStudent(id)
{
    students = students.filter(function(student){
        return student.id != id
    })

    console.log("Student Deleted")
}


// main program

addStudent(1,"Aditya",80)
addStudent(2,"Rahul",75)
addStudent(3,"Priya",95)

showStudents()

averageMarks()

topper()

searchStudent(2)

updateMarks(1,90)

showStudents()

deleteStudent(3)

showStudents()
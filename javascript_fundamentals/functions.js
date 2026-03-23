/*FUNCTION = A section of reusable code.
             Declare code once, use it whenever you want.
             call the function to execute that code */

function happybirthday(username,age){ //parameters
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

happybirthday("digvijay" , 25);//arguments

//=======================================================================

function birthdayboy(username,age){ 
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

birthdayboy("digvijay" , 25);
//===============================================================

function calculateTotal(m1, m2, m3) {
    return m1 + m2 + m3;
}

function calculateAverage(total) {
    return total / 3;
}

function displayResult(name, avg) {
    console.log("Student Name: " + name);
    console.log("Average Marks: " + avg);

    if (avg >= 50) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }
}

// main program
let studentName = "Aditya";
let mark1 = 85;
let mark2 = 75;
let mark3 = 90;

let total = calculateTotal(mark1, mark2, mark3);
let average = calculateAverage(total);

displayResult(studentName, average);

//================================================

function calculator(a, b) {
    let sum = a + b;
    let difference = a - b;
    let product = a * b;
    let division = a / b;

    console.log("First Number:", a);
    console.log("Second Number:", b);
    console.log("Addition:", sum);
    console.log("Subtraction:", difference);
    console.log("Multiplication:", product);
    console.log("Division:", division);
}

calculator(20, 5);

//======================================================================

function calculateScore(kills, assists, deaths) {
    let score = (kills * 10) + (assists * 5) - (deaths * 2);
    return score;
}

function getRank(score) {
    if (score >= 100) {
        return "S Rank";
    } else if (score >= 70) {
        return "A Rank";
    } else if (score >= 40) {
        return "B Rank";
    } else {
        return "C Rank";
    }
}

function playerReport(name, kills, assists, deaths) {
    let score = calculateScore(kills, assists, deaths);
    let rank = getRank(score);

    console.log("Player: " + name);
    console.log("Score: " + score);
    console.log("Rank: " + rank);
    console.log("-------------------");
}

// Function calls
playerReport("Aditya", 8, 5, 2);
playerReport("Rahul", 3, 2, 5);

//===========================================================

// Function to create an employee
function createEmployee(name, id, salary) {
    return {
        name: name,
        id: id,
        salary: salary
    };
}

// Function to calculate bonus
function calculateBonus(employee) {
    return employee.salary * 0.10; // 10% bonus
}

// Function to calculate tax
function calculateTax(employee) {
    if (employee.salary > 50000) {
        return employee.salary * 0.20; // 20% tax
    } else {
        return employee.salary * 0.10; // 10% tax
    }
}

// Function to calculate net salary
function calculateNetSalary(employee) {
    let bonus = calculateBonus(employee);
    let tax = calculateTax(employee);
    return employee.salary + bonus - tax;
}

// Function to display employee details
function displayEmployee(employee) {
    console.log("----- Employee Details -----");
    console.log("Name: " + employee.name);
    console.log("ID: " + employee.id);
    console.log("Salary: " + employee.salary);
    console.log("Bonus: " + calculateBonus(employee));
    console.log("Tax: " + calculateTax(employee));
    console.log("Net Salary: " + calculateNetSalary(employee));
}

// Main Program
let emp1 = createEmployee("Aditya", 101, 60000);
let emp2 = createEmployee("Rahul", 102, 40000);

displayEmployee(emp1);
displayEmployee(emp2);

//======================================================================================================

// Function to create employee
function createEmployee(name, salary) {
    return {
        name: name,
        salary: salary
    };
}

// Function to calculate bonus
function calculateBonus(salary) {
    if (salary > 50000) {
        return salary * 0.20;
    } else {
        return salary * 0.10;
    }
}

// Function to calculate total salary
function calculateTotalSalary(salary, bonus) {
    return salary + bonus;
}

// Function to display employee details
function displayEmployee(emp, bonus, totalSalary) {
    console.log("Employee Name:", emp.name);
    console.log("Base Salary:", emp.salary);
    console.log("Bonus:", bonus);
    console.log("Total Salary:", totalSalary);
}

// MAIN PROGRAM
let emp1 = createEmployee("Aditya", 60000);

let bonus = calculateBonus(emp1.salary);
let totalSalary = calculateTotalSalary(emp1.salary, bonus);

displayEmployee(emp1, bonus, totalSalary);

//============================================================================================================

function assignMission(soldierName, rank) {
    if (rank === "Captain") {
        return soldierName + " will lead the mission.";
    } 
    else if (rank === "Lieutenant") {
        return soldierName + " will assist in planning.";
    } 
    else {
        return soldierName + " will execute ground operations.";
    }
}

// calling the function
let s1 = assignMission("Arjun", "Captain");
let s2 = assignMission("Vikram", "Lieutenant");
let s3 = assignMission("Ravi", "Soldier");

console.log(s1);
console.log(s2);
console.log(s3);

//===========================================================================================

function attackEnemy(soldierName, weapon, enemyHealth) {
    let damage;

    if (weapon === "Gun") {
        damage = 30;
    } else if (weapon === "Sniper") {
        damage = 70;
    } else {
        damage = 15; // knife or basic attack
    }

    let remainingHealth = enemyHealth - damage;

    return soldierName + " attacked with " + weapon + 
           ". Enemy health left: " + remainingHealth;
}

// calling the function
let attack1 = attackEnemy("Arjun", "Gun", 100);
let attack2 = attackEnemy("Kabir", "Sniper", 100);
let attack3 = attackEnemy("Ravi", "Knife", 100);

console.log(attack1);
console.log(attack2);
console.log(attack3);
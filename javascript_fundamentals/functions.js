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

//=============================================================================================================

function supplyResources(unitName, soldiers, foodPerSoldier) {
    let totalFood = soldiers * foodPerSoldier;

    return "Unit " + unitName + " needs " + totalFood + " food packets.";
}

// calling the function
let unit1 = supplyResources("Alpha", 10, 3);
let unit2 = supplyResources("Bravo", 20, 2);

console.log(unit1);
console.log(unit2);

//=====================================================================================================

// Function to create a bank account
function createAccount(name, accountNumber, balance) {
    return {
        name: name,
        accountNumber: accountNumber,
        balance: balance
    };
}

// Function to deposit money
function deposit(account, amount) {
    account.balance += amount;
    console.log(amount + " deposited successfully.");
}

// Function to withdraw money
function withdraw(account, amount) {
    if (amount > account.balance) {
        console.log("Insufficient balance!");
    } else {
        account.balance -= amount;
        console.log(amount + " withdrawn successfully.");
    }
}

// Function to check balance
function checkBalance(account) {
    console.log("Current Balance: " + account.balance);
}

// Function to display account details
function displayAccount(account) {
    console.log("----- Account Details -----");
    console.log("Name: " + account.name);
    console.log("Account No: " + account.accountNumber);
    console.log("Balance: " + account.balance);
}

// Main Program
let acc1 = createAccount("Aditya", 12345, 10000);

// Operations
displayAccount(acc1);

deposit(acc1, 5000);
checkBalance(acc1);

withdraw(acc1, 3000);
checkBalance(acc1);

withdraw(acc1, 15000); // test insufficient balance

displayAccount(acc1);
//========================================================================================

function placeOrder(customerName, item, quantity) {
    let price;

    // menu pricing
    if (item === "Burger") {
        price = 50;
    } else if (item === "Pizza") {
        price = 100;
    } else if (item === "Juice") {
        price = 30;
    } else {
        price = 20; // default item
    }

    let total = price * quantity;

    return generateBill(customerName, item, quantity, total);
}

function generateBill(name, item, qty, totalAmount) {
    return "Customer: " + name +
           "\nItem: " + item +
           "\nQuantity: " + qty +
           "\nTotal Bill: Rs." + totalAmount;
}

// calling functions
let order1 = placeOrder("Aditya", "Pizza", 2);
let order2 = placeOrder("Rahul", "Burger", 3);

console.log(order1);
console.log("------------");
console.log(order2);
//==========================================================================

function calculateTotal(item1, qty1, item2, qty2) {
    let price1, price2;

    // menu prices
    if (item1 === "Burger") price1 = 50;
    else if (item1 === "Pizza") price1 = 100;
    else price1 = 30;

    if (item2 === "Burger") price2 = 50;
    else if (item2 === "Pizza") price2 = 100;
    else price2 = 30;

    let total = (price1 * qty1) + (price2 * qty2);

    return applyDiscount(total);
}

function applyDiscount(total) {
    let discount = 0;

    if (total > 200) {
        discount = total * 0.1; // 10% discount
    }

    let afterDiscount = total - discount;

    return addGST(afterDiscount);
}

function addGST(amount) {
    let gst = amount * 0.05; // 5% GST
    let finalAmount = amount + gst;

    return finalAmount;
}

function generateBill(name, finalAmount) {
    return "Customer: " + name + 
           "\nFinal Bill (with GST): Rs." + finalAmount;
}

// calling functions
let total1 = calculateTotal("Pizza", 2, "Burger", 1);
let bill1 = generateBill("Aditya", total1);

console.log(bill1);
//================================================================
// =

function takeOrder(customerName, item, qty) {
    console.log("Order received from " + customerName);
    let total = calculatePrice(item, qty);
    return processPayment(customerName, total);
}

function calculatePrice(item, qty) {
    let price;

    if (item === "Sandwich") price = 40;
    else if (item === "Coffee") price = 20;
    else if (item === "Meal") price = 80;
    else price = 30;

    return price * qty;
}

function processPayment(name, amount) {
    console.log("Processing payment of Rs." + amount);
    
    let paymentStatus = "Success"; // assume payment success

    return generateReceipt(name, amount, paymentStatus);
}

function generateReceipt(name, amount, status) {
    return "Customer: " + name +
           "\nAmount Paid: Rs." + amount +
           "\nPayment Status: " + status +
           "\nOrder Status: Confirmed";
}

// calling functions
let receipt1 = takeOrder("Aditya", "Meal", 2);

console.log(receipt1);
//======================================================================

let chickens = ["hen1", "hen2", "hen3"];

// Function to add chicken
function addChicken(name) {
    chickens.push(name);
    console.log(name + " added to farm");
}

// Function to sell chicken
function sellChicken() {
    let sold = chickens.pop();
    console.log(sold + " sold from farm");
}

// Function to show all chickens
function showChickens() {
    console.log("Chickens in farm: " + chickens);
}

// Function to count chickens
function countChickens() {
    console.log("Total chickens: " + chickens.length);
}


// Operations
showChickens();

addChicken("hen4");
addChicken("hen5");

showChickens();

sellChicken();

countChickens();
//================================================================================================


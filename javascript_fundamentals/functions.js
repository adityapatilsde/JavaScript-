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
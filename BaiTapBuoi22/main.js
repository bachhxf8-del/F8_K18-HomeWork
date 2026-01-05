// Lesson 1
function getStudentLevel(score) {
    if (score > 10 || score < 0) {
        return "Error! Please re-enter within the range of 0-10.";
    }
    else if (score >= 9){
        return "Excellent";
    }
    else if (score >= 8){
        return "Very Good";
    }
    else if (score >= 6.5){
        return "Good";
    }
    else if (score >= 5){
        return "Average";
    }
    else {
        return "Weak";
    }
}
let score = 11;
console.log(getStudentLevel(score));

// Lesson 2
let month = 2;
switch (month) {
    case 2:
        console.log("28 or 29 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 days");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 days");
        break;
    default:
        console.log("Error! Please re-enter within the range of 1-12");
}

// Lesson 3
let n = 5;
let result = n % 2 === 0 ? "Even" : "Odd";
console.log(result);

// Lesson 4
let age = 10;
let ticketPrice = age < 13 ? 50000 : 100000;
console.log(ticketPrice);

// Lesson 5
function toFahrenheit(n){
    return (n*1.8 + 32)
}
let celsiu = 5
console.log(toFahrenheit(celsiu));

// Lesson 6
function getElectricityBill(n){
    if (n < 0){
        return "Error! Please re-enter within the range of 1-12";
    }
    else if (n <= 50){
        return 1678 * n;
    }
    else if (n <= 100){
        return 1678 * 50 + 1734 * (n - 50);
    }
    else if (n <= 200){
        return 1678 * 50 + 1734 * 50 + 2014 * (n - 100);
    }
    else{
        return 1678 * 50 + 1734 * 50 + 2014 * 100 + 2536 * (n - 200);
    }
}
let electricity = 78;
console.log(getElectricityBill(electricity));
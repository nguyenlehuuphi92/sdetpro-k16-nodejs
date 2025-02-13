const readline = require('readline-sync');

// DRY: Don't Repeat Yourself
// Single Responsibility: Tính đơn nhiệm
// Clean Code

// function name:
// calmelCase
// Declaration a function

// Method 01: [ Function Declaration ] method | hoisting
let userInputNum = getUserInputNum();
let inputNumber = convertToNumber(userInputNum);
evaluateEvenOrOddNyumber(inputNumber);

function getUserInputNum() {
    let inputNum = readline.question('Your Number: ');
    return inputNum;
}
 
function convertToNumber(str) {
    return Number(str);
}

function evaluateEvenOrOddNyumber(isNumber) {
    if (isNumber%2 === 0){
        console.log(`${isNumber}: là số chẳn`);
    } else {
        console.log(`${isNumber}: là số lẻ`);
    }
}

let returnedValue = functionName();

function functionName() {
    return 1;
}


// Method 02: [ Function Expression ] method  | NO hoisting
const addNumber = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

let sum = addNumber(1, 2);

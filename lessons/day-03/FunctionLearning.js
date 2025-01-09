// DRY: Don't Repeat Yourself
// Single Responsibility: Tính đơn nhiệm
// Clean Code


// function name:
// calmelCase
// Declaration a function

// Method 01: [ Function Declaration ] method | hoisting
let returnedValue = functionName();
function functionName() {
    return 1;
}


// Method 02: [ Function Expression ] method  | NO hoisting
let sum = addNumber(1, 2);
const addNumber = function (firstNum, secondNum) {
    return firstNum + secondNum;
}

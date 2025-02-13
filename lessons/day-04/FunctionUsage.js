// const NumberSupportFunctions = require('./UtilMethods.js');
// . dot notation
// let isEvenNumber_ = NumberSupportFunctions.isEvenNumber(5);
// console.log(`Is 5 even number: ${isEvenNumber_}`);

// Destructure
const { 
    isEvenNumber,
    isOddNumber
} = require('./UtilMethods.js');

let isEvenNumber_ = isEvenNumber(3);
console.log(`Is even number: ${isEvenNumber_}`); 

// Get an user input then check if it's even or odd number
let userInput = getUserInput();
let isOddNumber_ = isOddNumber(userInput);

if (isOddNumber_) {
    console.log(`The number ${userInput} is an odd number`);
    
} else {
    console.log(`The number ${userInput} is an even number`);
}

function getUserInput() {
    return 3;
}
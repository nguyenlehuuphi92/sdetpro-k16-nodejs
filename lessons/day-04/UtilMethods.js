// Support function
// Service function -  Utility functions

// // 5: argument
// let isEvenNumber_ = isEvenNumber(5, 2);
// console.log(`Is 5 even number: ${isEvenNumber_}`);

// number: parameter
function isEvenNumber(number) {
    // Detail implementation | implementation
    // console.log(number);
    // return number % 2 === 0;
    return number + 2;
}

// number: parameter
const isOddNumber = function (number) {
    return number % 2 !== 0;
}

// Common JS Module
module.exports = { isEvenNumber, isOddNumber }

/**
    module.exports = { 
        teo: isEvenNumber, 
        ti: isOddNumber 
    }
 */
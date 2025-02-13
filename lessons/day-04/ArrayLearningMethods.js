const { isEvenNumber } = require('./UtilMethods');
let myArray = [1, 2, 3, 4, 5];

// Filter to get even number from array
// Higher Order Function: HOF
// == Case 1 ==
// let evenNumbers = myArray.filter(function (value, index, originArray) {
//     return value % 2 === 0;
// });
// console.log(evenNumbers);

// == Case 2 ==
// let evenNumbers = myArray.filter(isevenNumber);
// console.log(evenNumbers);
// console.log(myArray);

// function isEvenNumber(value, index, originArray){
//     return value % 2 === 0;
// };

// == Case 3 ==
let evenNumbers = myArray.filter(isEvenNumber);
console.log(evenNumbers);
console.log(myArray);
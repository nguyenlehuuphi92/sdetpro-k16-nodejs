// Naming convention
// Reserved keywords
// camelCase, snake_case, PascalScase

// let myVar = 3; 
// const PI_NUMBER = 2;
 
// ================================
let myNum1 = 3;
let myNum2 = 6;

// 1. Right operand and left operand
let result = myNum1 + myNum2;
// console.log('Total result: ' + result);
// console.log('Total result:', result);


// String template/literal (`: )
// [`]: backtick
console.log(`Total resul: ${result + 1}`);

// Forward slash
result = 5 / 2;
console.log(`5/2: ${result}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

// Rouding
let roundingNearest = Math.round(9/2);
console.log(`roundingNearest: ${roundingNearest}`) ;

let roundingFloor = Math.floor(9/2);
console.log(`roundingFloor: ${roundingFloor}`) ;

let roundingCeil = Math.ceil(9/2);
console.log(`roundingCeil: ${roundingCeil}`) ;

result = 10/3;
let toFixedNumber = result.toFixed(3);
console.log(`toFixedNumber: ${toFixedNumber}`);

let multi_1 = 3 * 2;
console.log(`multi*: ${multi_1}`);

let multi_2 = 3 ** 2;
console.log(`multi**: ${multi_2}`);






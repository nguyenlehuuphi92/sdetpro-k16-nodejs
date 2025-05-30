// Allow user to input a number, print out it’s an odd or even number

/** Note by Mentor
     * 2.2 - Using === instead of == is a best practice in JavaScript 
     * because === checks for both value and type equality. 
     * using === ensures that the comparison is strictly between numbers, 
     * avoiding potential issues with type coercion.
 */

const readline = require('readline-sync');
let isNumber = Number(readline.question('Enter Number: '));

if(isNaN(isNumber)){
    console.log('không phải con số!!, Vui lòng nhập lại đúng số');
}else if (!Number.isInteger(isNumber)) {
    console.log('Đây là số thập phân!, Vui lòng nhập số nguyên');
} else if (isNumber%2 === 0){
    console.log(`${isNumber} là số chẳn`);
} else {
    console.log(`${isNumber} là số lẻ`);
}



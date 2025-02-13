/**
 * Count how many odd, even number(s) in an integer array
 * let intArr = [1, 2, 3, 4, 5];

    Even numders: 2
    Odd numbers: 3
 */

let intArr = [1, 2, 3, 4, 5];

let sumEven = 0;
let sumOdd = 0;

for (let index = 0; index < intArr.length; index++) {
    let elm = intArr[index];
    if (elm % 2 === 0) {
        sumEven ++;
    } else {
        sumOdd ++;
    } 
}

console.log(`Even numders: ${sumEven}`);
console.log(`Odd numbers: ${sumOdd}`);



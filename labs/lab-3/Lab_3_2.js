/**
 * Finding maximum value/minimum value from an integer array
 * let intArr = [1, 2, 3, 4, 5];

    Minimum: 1
    Maximum: 5
 */

let intArr = [10, 22, 3, 6, 50];
let max = intArr[0];
let min = intArr[0];

for (let index = 0; index < intArr.length; index++) {
   max = Math.max(max, intArr[index])
}

for (let index = 0; index < intArr.length; index++) {
   min = Math.min(min, intArr[index])
}

console.log(`Maximum: ${max}`);
console.log(`Minimum: ${min}`);


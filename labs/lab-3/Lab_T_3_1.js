/**
 * Count how many odd, even number(s) in an integer array
 * let intArr = [1, 2, 3, 4, 5];

    Even numders: 2
    Odd numbers: 3
 */


/**
pseudo code
    loop over the array
        if element is odd number
            oddNumCount++
        else
            evenNumCount++
    print out the results
 */

let array = [1, 2, 3, 4, 5, 42, 17, 93, 58, 12, 66, 74, 91, 24];
let oddNumCount = 0;
let evenNumCount = 0;
let oddArray = [];
let evenArray = [];

for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (isOddNumber(value)) {
        oddNumCount++;
        oddArray.push(value);
    }else {
        evenNumCount++;
        evenArray.push(value);
    }
}

console.log(`Odd numbers: ${oddNumCount} number(s) ${printArray(oddArray)}`);
console.log(`Even numbers: ${evenNumCount} number(s) ${printArray(evenArray)}`);

function isOddNumber(value) {
    return value % 2 !== 0;
}

function printArray(array) {
    if (array.length === 0) {
        return '';
    } else {
        return `--> ${array}`
    }
}


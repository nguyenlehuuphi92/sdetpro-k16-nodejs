// CRUD
// CREATE
let myArray = [1, 2, 3, 4, 5];
// First element's index: 0
// Last element's index: array's length - 1

// Get the array's length
console.log(`Array's length: ${myArray.length}`);

// READ
// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
// }

for (let index = myArray.length - 1; index >= 0; index--) {
    myArray[index] = myArray[index] * 2;
}

// Undefined holes
// myArray.push([10, 30]);
// myArray[10] = 1000;
// console.log(myArray[9]);
let removeValue =  myArray.pop();
console.log(`removeValue: ${removeValue}`);
console.log(`After array: ${myArray}`);

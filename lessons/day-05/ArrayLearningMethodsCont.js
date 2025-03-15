let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myArray = [1, 7, 3, 4];

// DELETE | splice
// let startIndex = 2;
// let deleteCount = 1;
// let insertValue = 10;
// let returnValue  = myArray.splice(startIndex, deleteCount, insertValue);
// console.log(returnValue);

// Which statement is true  (only one)
// A. 9 is insert value
// B. 9 is delete count value
// C. 9 & 10 are insert values

for (let index = 0; index < myArray.length; index++) {
        if(isOddNumber(myArray[index])) {
            removeElementFromArray(myArray, index);
            index--;
        }
    
    }

    console.log(myArray);

    function isOddNumber(number) {
        return number % 2 !== 0;
    }

    function removeElementFromArray(array, startIndex) {
        const defautDeleteCount = 1;
        array.splice(startIndex, defautDeleteCount);
        return array;
    }
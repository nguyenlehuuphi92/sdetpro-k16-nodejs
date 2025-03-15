/**
 * Merge 2 SORTED integer array into one SORTED array
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]

    Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */


let myArray_01 = [1, 12, 16, 28, 34];
let myArray_02 = [1, 13, 16, 27, 99];

let mergedArray = myArray_01.concat(myArray_02);

console.log("Array after merged:", `[${mergedArray},]`);
console.log(`------------------------`);

for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
        if (mergedArray[j] < mergedArray[i]) {
            let temp  = mergedArray[i];
            mergedArray[i] = mergedArray[j];
            mergedArray[j] = temp;
        }
    }
}

console.log(`Array after sorted: [${mergedArray}]`);
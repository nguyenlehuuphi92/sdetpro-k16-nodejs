/**
 * Sort an integer array from min to max
 *  Input: [12, 34, 1, 16, 28]
    Expected output: [1, 12, 16, 28, 34]
 */

/**
pseudo code 
unsortedPosition = array[arrLenght - 1]
while unsortedPosition > 0
    loop index = 0 -> unsortedPosition - 1
            leftValue = array[index]
            rightValue = array[index + 1]
            if leftValue > rightValue
                swap

time and space complexity
time Complexity: Big O notation: On^2 > OfLogn

 */


let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length - 1;

while (unsortedPosition > 0) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        const isWrongPlace = leftValue > rightValue;
        if (isWrongPlace) {
            swap(array, index);
        }
    }
    unsortedPosition--;
}

// for (; unsortedPosition > 0; unsortedPosition--) {
//     for (let index = 0; index < array.length; index++) {
//         const leftValue = array[index];
//         const rightValue = array[index + 1];
//         if (leftValue > rightValue) {
//             swap(array, index);
//         }
//     }
// }

console.log(array);

function swap(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}


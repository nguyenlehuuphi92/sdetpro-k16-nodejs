/**
 * Finding maximum value/minimum value from an integer array
 * let intArr = [1, 2, 3, 4, 5];

    Minimum: 1
    Maximum: 5
 */

/**
pseudo code
minValue = first element
maxValue = first element
    loop over the array
        if element is less than the min value
            re-assign min value
        else iff element is bigger than the max value
            re-assign max value

if(minValue === maxValue)
   all elements in the array has same value
print out the results
 */

let array = [10, 22, 3, 6, 50];
// let array = [2, 2, 2, 2, 2];

let maxValue = array[0];
let minValue = array[0];


for (let index = 0; index < array.length; index++) {
   const value = array[index];
   if (value < minValue) {
         minValue = value;
   } else if (value > maxValue) {
         maxValue = value;
   }
}
 if (minValue === maxValue) {
   console.log(`There is no min/max value, all values are same: ${minValue}`);
 }else{
   console.log(`maxValue: ${maxValue} and minValue: ${minValue}`);
 }



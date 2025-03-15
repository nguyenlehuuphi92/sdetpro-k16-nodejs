/**
 * Merge 2 SORTED integer array into one SORTED array
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]

    Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
 */

/**
 let mergedArray = []
 method 01:
    loop over first array -> push all elements into mergedArray
    loop over 2nd array then so the same as above
    Use the bubblesort in the prev solution

method 02:
while 2 array still has values: fooIndex < fooLength && barIndex < barLength

    if fooValue <= barValue
        Push fooValue into mergedArray
        fooIndex++
    Else
        Push barValue into mergedArray
        barIndex++

loop 1st array from fooIndex < foolLenth -> push all value into merged array
loop 2ad array from barIndex < barLenth -> push all value into mergea 

 */


let foo = [1, 12, 16, 28, 34];
let bar = [1, 13, 16, 27, 99];
let merged = [];

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;

while (fooStillHaveElement() && barStillHaveElement()) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
        merged.push(fooValue);
        fooPosition++
    } else {
        merged.push(barValue);
        barPosition++
    }
}

while (fooStillHaveElement()) {
    merged.push(foo[fooPosition]);
    fooPosition++;
}

while (barStillHaveElement()) {
    merged.push(bar[barPosition]);
    barPosition++;
}

function fooStillHaveElement() {
    return fooPosition < fooLength;
}

function barStillHaveElement() {
    return barPosition < barLength;
}


console.log(`Array after sorted: [${merged}]`);
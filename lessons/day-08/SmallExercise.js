// function logMapElements(value, key, map) {
//     console.log(`m[${key}] = ${value}`);
// }

// new Map([
//     ['foo', 3],
//     ['bar', {}],
//     ['baz', undefined],
// ]).forEach(logMapElements);

// Give a value, please find the key
const targerValue = 3;
let foundKey = undefined;

new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
]).forEach(function(value, key, map) {
    if(value === targerValue){
        foundKey = key;
        return;
    }
});

if (!foundKey) {
    console.log(`Key not found for value: ${targerValue}`);
}else {
    console.log(`${targerValue}: ${foundKey}`);
}
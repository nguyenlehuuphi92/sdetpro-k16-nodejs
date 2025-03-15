let array = [1, 2, 3, 4, 5];

// Map
// let returnValues = array.map(myRule);
// console.log(returnValues);
// console.log(array);

// function myRule(value, index, array) {
//     return value * 2;
// }

// forEach
let userList = [];
array.forEach(addAutomationUsername);

function addAutomationUsername(value, index, array) {
    // return `AutomationUser_${value}`
    userList.push(`AutomationUser_${value}`);
}

console.log(userList);

// Sort - String
let strings = ['B',  'C', 'A'];
strings.sort();
// strings.reverse();
console.log("Sort - String:", strings);


// Sort - Number | Not Approriate
let anotherArray = [100, 29, 33];
anotherArray.sort(sortNumberASC);
anotherArray.sort(sortNumberDESC);
console.log("Sort - Number ASC:", anotherArray);

function sortNumberASC(num1, num2) {
    return num1 - num2;
}

function sortNumberDESC(num1, num2) {
    return num2 - num1;
}

//
let mixedContent = ['a', 'A', '1'];
mixedContent.sort();
console.log(mixedContent);

// A. a, A, 1
// B. A, a, 1
// C. 1, A. a
const readline = require('readline-sync');

let arrivalTime = readline.question('Arrival Time: ');
let isHeOntime = (Number(arrivalTime) === 7);

// >, <, >=, <=, ==< ===, !=, !==
// !: to revert aboolean value

if (isHeOntime) {
    console.log("Let's talk!");
} else {
    console.log("Write a latter......");
} 

if (!isHeOntime) {
    console.log("Write a latter......");
} else {
    console.log("Let's talk!");
} 
    
// Ternary Operator: Toán tử 3 ngôi
let msg = isHeOntime ? "Let's talk!" : "Write a latter......";
console.log(msg);


/**
 * 1. In the root dir: npm init -y
 * 2. npm i readline-sync
 */
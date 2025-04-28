const readline = require('readline-sync');

let userNum = getUserNumber();

switch (userNum) {
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;    
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    case 8:
        console.log('Sunday');
        break;
    default:
        console.log('Nhap lai roi teo oi');
}

function getUserNumber() {
    return Number(readline.question('Please enter your number: '));
}
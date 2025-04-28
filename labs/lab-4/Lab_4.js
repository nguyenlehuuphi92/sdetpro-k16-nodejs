const readline = require('readline-sync');

/**
 . Write a consolse interface app to:

allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
allow user to withdraw the money and avoid user to take more than current balance
Note: Strongly recommend to create functions to process each tasks
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
 */

// in-memory DB
const account1 = {
    accountName: 'Teo',
    accountNumber: '1111199999',
    routingNumber: '123',
    balance: 20000
}

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Ty',
account2.accountNumber = '2222266666',
account2.routingNumber = '789',
account2.balance = 50000

const accounts = [account1, account2];

// Program interface
bankApp();

// Main App
function bankApp(){
    let isInteracting = true;
    while(isInteracting){
        printTheAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber){
                    const { accountName, balance } = foundAccount;
                    console.log(`AccountName: ${accountName}, balance: ${balance}`);
                } else {
                    console.log(`Account not found!`);
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log('Wrong option!! \n');   
        }
    }

    console.log(`See you next time`);
    
}

// Support functions
function printTheAppMenu() {
    console.log(`
=== Banking application===
1. Find an account
2. Update balance
0. Exit the program
`);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findAccount() {
    let foundAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber){
            foundAccount = account;
            break;
        }
    }
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attemp = 0;
    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber === undefined;
        if(isNotFound){
            console.log(`Attemp time: ${attemp + 1}`);
            attemp++;
        }else {
            // Logic to update balance and exit the function
            const { balance } = foundAccount;
            console.log(`You balance is: ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance');
                
            } else {
                // ... loggin about succeed withdraw | update user's balance
                console.log('Succeed!');
                foundAccount.balance = balance - expectedWithdrawMoney;
                attemp = MAX_ALLOWED_ATTEMP;
            }
            
        }
    }while(attemp <  MAX_ALLOWED_ATTEMP)
    
}

// Readability, extendable, maintainable --> reliable
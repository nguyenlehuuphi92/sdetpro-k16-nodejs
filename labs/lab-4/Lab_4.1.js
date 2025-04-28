const { json } = require("stream/consumers");

// Define the 1 bank account object
const bankAccount = {
    accountNumber: "68687979",
    nameAccount: "Nguyen Van A",
    routingNumber: "66669999",
    balance: 1000,
  };

// Clone the initial bank account and update the accountNumber
// const clonedBankAccount = { ...bankAccount, accountNumber: "987654321" };

const otherBankAccountB = JSON.parse(JSON.stringify(bankAccount));
otherBankAccountB.accountNumber = "123456789";
otherBankAccountB.nameAccount = "Nguyen Van B";
otherBankAccountB.routingNumber = "88889999";
otherBankAccountB.balance = "1300";


// Add both accounts into an array
const bankAccounts = [bankAccount, otherBankAccountB];

// Start the banking application
// bankingApp();

// // Function to find an account by accountNumber
// function findAccount(accountNumber) {
//   return bankAccounts.find(account => account.accountNumber === accountNumber);
// }

// // Function to withdraw money from an account
// function withdraw(account, amount) {
//   if (amount > account.balance) {
//     console.log("Insufficient balance. Withdrawal failed.");
//   } else {
//     account.balance -= amount;
//     console.log(`Withdrawal successful. New balance: ${account.balance}`);
//   }
// }

// Function to handle the console interface
function bankingApp() {
  console.log("=== Banking Application ===");
  console.log("1. Find an account");
  console.log("2. Update balance");
  console.log("0. Exit the program");

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

}


//   function promptUser() {
//     readline.question("Select an option: ", option => {
//       switch (option) {
//         case "1":
//           readline.question("Enter account number: ", accountNumber => {
//             const account = findAccount(accountNumber);
//             if (account) {
//               console.log(`Account found: Account Number: ${account.accountNumber}, Balance: ${account.balance}`);
//             } else {
//               console.log("Account not found.");
//             }
//             promptUser();
//           });
//           break;

//         case "2":
//           readline.question("Enter account number: ", accountNumber => {
//             const account = findAccount(accountNumber);
//             if (account) {
//               readline.question("Enter amount to withdraw: ", amount => {
//                 withdraw(account, parseFloat(amount));
//                 promptUser();
//               });
//             } else {
//               console.log("Account not found.");
//               promptUser();
//             }
//           });
//           break;

//         case "0":
//           console.log("Exiting program. Goodbye!");
//           readline.close();
//           break;

//         default:
//           console.log("Invalid option. Please try again.");
//           promptUser();
//           break;
//       }
//     });
//   }

//   promptUser();
//  }



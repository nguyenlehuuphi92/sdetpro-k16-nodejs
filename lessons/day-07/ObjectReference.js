let teo = {
    name:  "Teo",
    age: 18,
    // Nested object
    bankAccounts: {
        checking:{
            accountNumber: '123'
        },
        saving: {
             accountNumber: '222'
        }
    }
}


// Shalloww copy
// let tun = {...teo};
// tun.name = "Tun";
// tun.bankAccount.accountNumber = "666";


// Shallow copy - handle for nested obj as well
let tun = JSON.parse(JSON.stringify(teo));
tun.bankAccounts.checking.accountNumber = '9999';

// console.log(teo);
// console.log(tun);


console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));


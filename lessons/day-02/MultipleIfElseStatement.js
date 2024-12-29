/**
 * <18: khong ban!
 * 18 -> 55: Unlimited!
 * 56 ->: 2 chai.
 */

const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

/**
 * redundant logic: clientAge >= 18 && clientAge <= 55
 * isAgeInRange = clientAge >= 18 && clientAge <= 55;
 * isStateEligible = true;
 * isAgeInRange = isStateEligible
 * 
 */

if(clientAge < 18){
    console.log('Không Bán!');
}else if(clientAge <= 55){
    console.log('Unlimited!');
}else{
    console.log('2 Chai');
}

/**
 * &&;
 * ||;
 */
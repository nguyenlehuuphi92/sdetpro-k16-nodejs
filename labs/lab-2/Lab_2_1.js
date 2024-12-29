/**
 * Get input from user about height(m) and weight(kg) then calculate BMI
    Underweight: < 18.5
    Normal weight: 18.5 – 24.9
    Overweight: 25–29.9
    Obesity: BMI of 30 or greater

    BMI = weight / (height x height)
 */

    const readline = require('readline-sync');
    let height = Number(readline.question('Your height (Ex: 1.68 m): '));
    let weight = Number(readline.question('Your weight (Ex: 52 Kg): '));


    if(isNaN(height) || isNaN(weight) || height<= 0 || weight <=0){
        console.log('Please enter valid your height & your weight');
    }else {
        let bmi = weight / (height * height);
        
        if (bmi < 18.5) {
            console.log(`Your BMI is: ${bmi.toFixed(1)} - Underweight`);
        } else if (bmi <= 24.9) {
            console.log(`Your BMI is: ${bmi.toFixed(1)} - Normal weight`);
        } else if (bmi <= 29.9) {
            console.log(`Your BMI is: ${bmi.toFixed(1)} - Overweight`);
        } else {
            console.log(`Your BMI is: ${bmi.toFixed(1)} - Obesity`);
        }
    }

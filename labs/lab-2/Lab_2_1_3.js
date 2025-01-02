
/**
 * Get input from user about height(m) and weight(kg) then calculate BMI
    Underweight: < 18.5
    Normal weight: 18.5 – 24.9
    Overweight: 25–29.9
    Obesity: BMI of 30 or greater

    BMI = weight / (height x height)

    x   = a/b => a = b * x

    // Solved by Mr Tu
 */
    const readline = require('readline-sync');

    // Assume user input correct numbers - will handle in try... catch later
    let height = Number(readline.question('Your height (Ex: 1.68 m): '));
    let weight = Number(readline.question('Your weight (Ex: 52 Kg): '));

    // BMI = weight / (height X height)
    const BMI = weight / (height * height);
    console.log(`Your BMI: ${BMI}`);
    let isUnderW = false;
    let isOverW = false;

    if (BMI < 18.5) {
        console.log('\t => Underweight');
         isUnderW = true;
    } else if (BMI <= 24.9) {
        console.log('\t => Normal weight');
    } else if (BMI <= 29.9) {
        console.log('\t => Overweight');
         isOverW = true;
    } else {
        console.log('\t => Obesity');
         isOverW = true;
    }

    // Handle for weight suggestion if any
    if (isUnderW) {
        let ideaW = 18.5 * (height * height);
        let increaseW = ideaW - weight;
        console.log(`\t ==> You should increasew: ${increaseW.toFixed(1)}kg`);
    }

    if (isOverW) {
        let ideaW = 24.9 * (height * height);
        let decreaseW = weight - ideaW;
        console.log(`\t ==> You should decreaseW: ${decreaseW.toFixed(1)}kg`);
    }

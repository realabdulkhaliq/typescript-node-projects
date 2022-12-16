#! /usr/bin/env node
/*
This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number
generated by the computer. There are also several ways to alter the game, like adding more rounds or
displaying the score. It’s quite simple and uses the random function to generate a number.
*/
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let score = 0;
let running = true;
(async () => {
    await showBanner('Guessing Game', 'Lets Start the Game', 'green');
})();
async function guessingNumber() {
    while (running) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        let answer = await inquirer.prompt([{
                name: "userNumber",
                type: "number",
                message: "Enter a number from 1 to 3"
            }]);
        if (answer.userNumber === randomNumber) {
            console.log(`System Generated Number is ${randomNumber}`);
            console.log(`Your Entered Number is ${answer.userNumber}`);
            console.log(chalk.green("You Guessed a correct number"));
            score += 10;
            console.log(chalk.yellow(`Your Score is ${score}`));
        }
        else {
            console.log(`System Generated Number is ${randomNumber}`);
            console.log(`Your Entered Number is ${answer.userNumber}`);
            console.log(chalk.red("You Guessed a Wrong Number"));
            console.log(chalk.red("Try Again Next Time"));
            running = false;
            console.log(chalk.yellow(`Your Score is ${score}`));
        }
    }
}
setTimeout(() => {
    guessingNumber();
}, 1000);

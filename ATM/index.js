#! /usr/bin/env node
/*
This somewhat complex TypeScript/Node.js project is a console-based application.
When the system starts the user is prompted with a user id and user pin.
After entering the details successfully, the ATM functionalities are unlocked.
All the user data is generated randomly.
*/
import inquirer from "inquirer";
import chalk from "chalk";
// (async () => {
//     await showBanner('ATM', 'Welcome to Pakistan Banking', 'green');
// })();
(async function atm() {
    const userInput = await inquirer.prompt([
        {
            name: "userId",
            type: "input",
            message: "Enter User Id"
        }, {
            name: "userPin",
            type: "password",
            message: "Enter Pin Number",
        }
    ]);
    const userData = {
        userId: userInput.userId,
        userPin: userInput.userPin,
        amount: Math.floor(Math.random() * 100000 + 1)
    };
    const selectedOptions = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Select any option to continue",
            choices: ["Balance Inquiry", "Cash Withdrawal", "Fast Cash", "Funds Transfer", "Exit"]
        }
    ]);
    if (selectedOptions.options === "Balance Inquiry") {
        console.log(`Your Current Amount ${userData.amount}`);
    }
    else if (selectedOptions.options === "Cash Withdrawal") {
        console.log(`Your Current Amount ${userData.amount}`);
        const enteredAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please Enter Amount",
                validate: (input) => {
                    if (input > userData.amount) {
                        return "Insufficient Balance \n To enter amount again press Up key";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        userData.amount -= enteredAmount.amount;
        console.log(chalk.yellow(`Balance Amount is ${userData.amount}`));
        console.log(chalk.green("Thank You for Using Pakistan Banking"));
    }
    else if (selectedOptions.options === "Fast Cash") {
        console.log(`Your Current Amount ${userData.amount}`);
        const fastCash = await inquirer.prompt([{
                name: "fast",
                type: "list",
                message: "Select Amount",
                choices: ["1000", "2000", "3000", "5000"]
            }]);
        if (fastCash.fast === "1000") {
            userData.amount -= 1000;
        }
        else if (fastCash.fast === "2000") {
            userData.amount -= 2000;
        }
        else if (fastCash.fast === "3000") {
            userData.amount -= 3000;
        }
        else if (fastCash.fast === "5000") {
            userData.amount -= 5000;
        }
        console.log(chalk.yellow(`Balance Amount is ${userData.amount}`));
        console.log(chalk.green("Thank You for Using Pakistan Banking"));
    }
    else if (selectedOptions.options === "Funds Transfer") {
        console.log(`Your Current Amount ${userData.amount}`);
        const enteredFund = await inquirer.prompt([
            {
                name: "reciptId",
                type: "input",
                message: "Enter Beneficiary Account"
            }, {
                name: "fund",
                type: "number",
                message: "Please Enter Amount",
                validate: (input) => {
                    if (input > userData.amount) {
                        return "Insufficient Balance \n To enter amount again press Up key";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        userData.amount -= enteredFund.fund;
        console.log(chalk.yellow(`Balance Amount is ${userData.amount}`));
        console.log(chalk.green("Thank You for Using Pakistan Banking"));
    }
    else if (selectedOptions.options === "Exit") {
        console.log(chalk.green("Thank You for Using Pakistan Banking"));
        process.exit(0);
    }
})();

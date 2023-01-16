#! /usr/bin/env node
/*
Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.
*/
import inquirer from "inquirer";
(async function calculation() {
    let input = await inquirer.prompt([{
            "name": "operation",
            "type": "list",
            "message": "What You Want to Do",
            choices: () => {
                return ["Add", "Subtract", "Multiply", "Divide"];
            }
        }, {
            "name": "firstNumber",
            "type": "input",
            "message": "Please Enter First Number"
        }, {
            "name": "secondNumber",
            "type": "input",
            "message": "Please Enter Second Number"
        }
    ]);
    if (input.operation === "Add") {
        console.log(Number(input.firstNumber) + Number(input.secondNumber));
    }
    if (input.operation === "Subtract") {
        console.log(input.firstNumber - input.secondNumber);
    }
    if (input.operation === "Multiply") {
        console.log(input.firstNumber * input.secondNumber);
    }
    if (input.operation === "Divide") {
        console.log(input.firstNumber / input.secondNumber);
    }
})();

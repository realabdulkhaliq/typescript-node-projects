#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";

figlet('TODO LIST!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

let todoList: string[] = []; 

async function RepeateFlow(){
    const answer =await inquirer.prompt([{
        name: "repeat",
        type: "list",
        choices: ["Yes", "No"],
        message: "Do you want another operation?"
    }])
    return (answer.repeat === "Yes") ? true : false;
}

async function TodoList(){
    let startAgain = true;
    do{
    const answer:{option:string} = await inquirer.prompt([{
        name: "option",
        type: "list",
        choices: ["Add Item", "Remove Item", "Display"],
        message: "What you want to do?"
    }]);
    if(answer.option === "Add Item"){
        const item = await inquirer.prompt([{
            name: "newItem",
            type: "input",
            message: "Enter New Item"
        }]);
        todoList.push(item.newItem);
        startAgain = await RepeateFlow();
    }else if(answer.option === "Display"){
        if(todoList.length == 0){
            console.log("Your List is Empty");}
        todoList.forEach(element => console.log(element));
        startAgain = await RepeateFlow();
    }else if(answer.option === "Remove Item"){
        if(todoList.length == 0){
            console.log("Your List is Already Empty"); }
        const removeItem:{remove:string} = await inquirer.prompt([{
            name: "remove",
            type: "input",
            message: "Which Item you want to Remove"
        }]);
        let index = todoList.indexOf(removeItem.remove); 
        console.log(index);
        if(index !== -1){
            todoList.splice(index,1)
        }
        startAgain = await RepeateFlow();
        
    }
    }while(startAgain !== false)
}

setTimeout(()=>{
    TodoList();
},1000)
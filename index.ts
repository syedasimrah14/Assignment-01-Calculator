#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "firstNumber",
    message: "enter your first number",
    type: "number",
  },
  {
    name: "secondNumber",
    message: " enter your second number",
    type: "number",
  },
  {
    name: "operator",
    message: "Select one of the operators to perform the operation",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
console.log(answer);

//conditional Statement//

if(answer.operator === "Addition")
{console.log(answer.firstNumber + answer.secondNumber);}

else if(answer.operator === "Subtraction")
{console.log(answer.firstNumber - answer.secondNumber);}  

else if(answer.operator === "Multiplication")
{console.log(answer.firstNumber * answer.secondNumber);}    

else if(answer.operator === "Division")
{console.log(answer.firstNumber / answer.secondNumber);}   

else{
    console.log("Select a valid operator!!!")
}
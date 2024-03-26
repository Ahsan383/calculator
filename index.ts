#!/usr/bin/env node
import inquirer from "inquirer";

const answer= await inquirer.prompt([
    {message:"enter your first number",type:"number",name:"first_number"},
    {message:"enter your second number",type:"number",name:"second_number"},
    {
        message:"select one operator to operate",
        type:"list",
        name:"operator",
        choices:["Addition","Substraction","Multiplication","Division"]
    },
]);

if (answer.operator === "Addition"){
       console.log(answer.first_number +answer.second_number);

} else if(answer.operator === "Substraction"){
    console.log(answer.first_number - answer.second_number) ;
    
} else if(answer.operator === "Multiplication"){
    console.log(answer.first_number * answer.second_number) ;
    
} else if(answer.operator === "Division"){
    console.log(answer.first_number / answer.second_number) ;
    
}  else{
    console.log("please enter valid operators");
}


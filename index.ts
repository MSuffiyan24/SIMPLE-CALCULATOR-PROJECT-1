import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {massage: "Enter First Number", type: "number", name: 'Firstnumber'},
    {massage: 'Enter Second Number', type: "number", name: "SecondNumber"},
    {massage: "Choose any one Operator",
     type: "list",
     name: "Operator",
     choices:["Addition","Substraction","Division","Multiplication"],
    },
]);

if (answer.Operator === "Addition"){
    console.log(answer.Firstnumber + answer.SecondNumber);
} else if (answer.Operator === "Substraction"){
    console.log(answer.Firstnumber - answer.SecondNumber);
} else if (answer.Operator === "Multiplication"){
    console.log(answer.Firstnumber * answer.SecondNumber);
} else if (answer.Operator === "Division"){
    console.log(answer.Firstnumber / answer.SecondNumber);
} else {
    console.log("please select valid operator")
}


  

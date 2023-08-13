// A simple calculator in TypeScript
// To run this code, you need to install TypeScript and Node.js
// Compile the code with: tsc calculator.ts
// Run the code with: node calculator.js

// Import the readline module to get user input
import readline = require("readline");

// Create an interface for the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define a function to get user input and return a promise
function getInput(question: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Define a function to perform arithmetic operations on two numbers
function calculate(num1: number, num2: number, op: string): number {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN;
  }
}

// Define an async function to run the calculator
async function runCalculator() {
  // Get the first number from user input
  let num1 = Number(await getInput("Enter the first number: "));
  // Get the second number from user input
  let num2 = Number(await getInput("Enter the second number: "));
  // Get the operator from user input
  let op = await getInput("Enter the operator (+, -, *, /): ");
  // Calculate the result using the function
  let result = calculate(num1, num2, op);
  // Check if the result is valid
  if (isNaN(result)) {
    console.log("Invalid input");
  } else {
    // Display the result
    console.log(`${num1} ${op} ${num2} = ${result}`);
  }
  // Close the readline interface
  rl.close();
}

// Call the runCalculator function
runCalculator();

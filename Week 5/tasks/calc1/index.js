// Calculator
// Sum, Div, Sub, Mul using ES modules
import chalk from "chalk";
import inquirer from "inquirer";
let log = console.log;
// this for options to select what arithmetic operation want to perform
/**
 *
 * DEMO
 * -------------
 * Select option
 * 1: Sum
 * 2: Sub
 * 3: Div
 * 4: Mul
 */
log("Select From The Options: ");
log("1: Sum\n2: Sub\n3: Div\n4: Mul");
const userOpt = await inquirer.prompt([
    {
        name: "opt",
        type: "number",
        message: "Ener your Option",
    },
]);
if (userOpt.opt == 1) {
    const takeNum = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Num 1: ",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Num 2: ",
        },
    ]);
    let sum = takeNum.num1 + takeNum.num2;
    let sumShow = console.log(chalk.bgYellow(`| Sum of ${takeNum.num1} and ${takeNum.num2} is: ${sum} |`));
    log(sumShow);
}
else if (userOpt.opt == 2) {
    console.log("Minus number 2 from number 1");
    const takeNum = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Num 1: ",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Num 2: ",
        },
    ]);
    let sub = takeNum.num2 - takeNum.num1;
    let subShow = console.log(chalk.bgMagenta(`| Sub of ${takeNum.num2} from ${takeNum.num1} is: ${sub} |`));
    log(subShow);
}
else if (userOpt.opt == 3) {
    const takeNum = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Num 1: ",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Num 2: ",
        },
    ]);
    let div = takeNum.num1 / takeNum.num2;
    let divShow = console.log(chalk.bgBlue(`| Div of ${takeNum.num1} and ${takeNum.num2} is: ${div} |`));
    log(divShow);
}
else if (userOpt.opt == 4) {
    const takeNum = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter Num 1: ",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter Num 2: ",
        },
    ]);
    let mul = takeNum.num1 * takeNum.num2;
    let mulShow = console.log(chalk.bgGreen(`| Mul of ${takeNum.num1} and ${takeNum.num2} is: ${mul} |`));
    log(mulShow);
}
else {
    log("Sorry wrong input! ");
}

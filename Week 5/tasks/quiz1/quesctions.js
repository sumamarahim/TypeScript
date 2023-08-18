import inquirer from "inquirer";
export async function q1() {
    const ans1 = await inquirer.prompt([
        {
            name: "ques1",
            type: "list",
            message: "\nQ1: When AI is originated?\n",
            choices: ["1940s", "1950s", "1980s", "2000s"]
        }
    ]);
    return (ans1.ques1 == "1940s");
    // let answer1 = (ans1.ques1);
    // console.log(chalk.green.bold(answer1))
}
export async function q2() {
    const ans2 = await inquirer.prompt([
        {
            name: "ques2",
            type: "list",
            message: "\nQ1: When ML is originated?\n",
            choices: ["1940s", "1960s", "1980s", "2000s"]
        }
    ]);
    return (ans2.ques2 == "1960s");
    // let answer1 = (ans1.ques1);
    // console.log(chalk.green.bold(answer1))
}
export async function q3() {
    const ans3 = await inquirer.prompt([
        {
            name: "ques3",
            type: "list",
            message: "\nQ1: When DL is originated?\n",
            choices: ["1930s", "1950s", "1970s", "1990s"]
        }
    ]);
    return (ans3.ques3 == "1970s");
    // let answer1 = (ans1.ques1);
    // console.log(chalk.green.bold(answer1))
}

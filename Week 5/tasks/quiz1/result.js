import chalk from "chalk";
let score = 0;
async function result(a) {
    if (a == true) {
        console.log(chalk.bold.green.italic("Ans is correct"));
        score = score + 5;
    }
    else {
        console.log(chalk.bold.red.italic("Ans is wrong"));
    }
    return score;
}
export default result;

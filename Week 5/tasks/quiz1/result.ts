import chalk from "chalk";

let score: number = 0;

async function result(a: boolean) {
    if (a==true){
        console.log(chalk.bold.green.italic("Ans is correct"));
        score = score + 5;
    }
    else{
        console.log(chalk.bold.red.italic("Ans is wrong"));
    }
    return score;
    
}

export default result;
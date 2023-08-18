import chalk from "chalk";
import inquirer from "inquirer";
import showBanner from "node-banner";
// const showBanner = require('node-banner'); // commonJS module



// modules importing
import { q1, q2, q3 } from "./quesctions.js";
import result from "./result.js";



/*async function banner () {
    await new Promise ((res) => {
        showBanner ('\n QUIZ')
        setTimeout(res,1000);
    });
}

await banner();
*/




// (async () => {
//     await showBanner('Quiz');
// })(); // () means immediatly invoked function expression IIFE



let ans1 = await q1();
// console.log(ans1);
let score = await result(ans1);
//console.log(score); // score show




 let ans2 = await q2();
// console.log(ans2);
score = await result(ans2);

let ans3 = await q3();
score = await result(ans3);

console.log("Your Total Score out of",chalk.bgGreen.bold(15), "is: ",score);


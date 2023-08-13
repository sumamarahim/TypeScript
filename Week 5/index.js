// Tpics in this file
// 1: Modules -> import / Export  -> DONE
// 2: Native ECMA Script modules -> DONE
// 3: import inquirer ECMA Script modules -> DONE
// 4: Chalk -> DONE
// 5: node banner
// common js to ECMA
// 1: add "type": "module" in package.json file
// 2: change Target es2020 or onward, in tsconfig file
// 3: change Module and moduleResolution to NodeNext, in tsconfig file
// Installing inquirer
// 1: npm i inquirer
// 2: npm install --save inquirer
// 3: npm install @types/inquirer -D
// Installing Chalk
// 1: npm i chalk
// 2: use import chalk from 'chalk';
// node-banner
// 1: npm i node-banner
const log = console.log;
// Chalk
import chalk from 'chalk';
log(chalk.bgGreen("Wao it's working!"));
// Chalk BG Colors
// bgGreen, bgBlue, bgYellow, bgRed, bgMagentra, bgCyan, bgWhite, bgBlack
// Chalk Text color
// green, blue, yello, red, magenta, cyan, white, gray
// Chalk font style
// bold, dim, italic, underline, inverse, strikethrough,
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// Compose multiple styles using the chainable API
log(chalk.yellow.bgCyan.underline.italic('Hello world!'));
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// Nest styles of the same type even (color, underline, background)
log(chalk.green('I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'));
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(13, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
// we can use also rbg or hex colors 
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color
console.log(error('Error!'));
console.log(warning('Warning!'));
const name = 'Sumama';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'
// DETAILS of EACH
// inquirer
import inquirer from 'inquirer';
const person = await inquirer.prompt([
    {
        name: 'userName',
        type: 'string',
        message: 'Enter your name: '
    },
    {
        name: 'email',
        type: 'string',
        message: 'Enter your email: '
    },
    {
        name: 'phoneNum',
        type: 'number',
        message: 'Enter your Phone#: '
    },
    {
        name: 'address',
        type: 'string',
        message: 'Enter your Address',
    }
]);
log("Hi! ", chalk.bgGreen.bold.white(person.userName));
log("We have data about you:\n" + chalk.bold.green("Phone Num: ", person.phoneNum, warning("\nEmail: ", person.email), error("\nAddress: ", person.address), "Age: ", person.userAge));
// modules import
// Calculator using modules
import sum from './sum.js';
import sub from './sub.js';
import div from './div.js';
import mul from './mul.js';
log("Sum is: ", sum);
log("Sub is: ", sub);
log("Mul is: ", mul);
log("Div is: ", div);

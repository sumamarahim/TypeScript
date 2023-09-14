
console.log("Class: 9\n*******");
/**
 * Topics
 * 1: enum
 * 2: Functions
 * 3: Arrays and methods
 * 4: const enum
 * 5: optional, defualt, rest functions
 * 6: async
 * 
 */

// enum:
// type of special data type which represent group of unchangeable vars.
// used when we know all possibilities like NORTH, WEST, EAST and SOUTH


enum colors { red, green, blue };

var c1: colors = colors.red;

console.log(`Color is: ${c1}`); // shows 0 as red's array index

console.log(`Color 2 is: ${colors.green}`); // SHows 1 as green's array index

console.log(`Color 3 is: ${colors.blue}`);// shows 2 as blues's array index

console.log(`All colors are: ${colors}`); // returs object not vlues



// Assigning name/values to enum

enum colors2 { orange = "OrangeVal", yellow = "YellowVal", cyan = "CyanVal", magenta = "MagentaVal" };

var c2: colors2 = colors2.cyan;

console.log("Colors2 cyan indexed value is: ", colors2.cyan);
console.log("Colors2 magenta index value is: ", colors2.magenta);
console.log("Colors2 orange index is: ", colors2.orange);
console.log("Colors2 yellow is indexed with val: ", colors2.yellow);
console.log("accessing using assigned name: ", colors2["orange"]);

console.log("\n*******Okey*****************\nAccessing from value: ", colors2);

enum colors3 { white = 2, skyBlue, purple }; // skyBlue and purple's index adds with white's index 2

console.log("******** Enum using Assigned index numbers ***************\n");
console.log("white index is: ", colors3.white);
console.log("SkyBlue index is: ", colors3.skyBlue);
console.log("Purple index is: ", colors3.purple);
console.log("with indexed numbers: ", colors3[2]); // index 2 is white color




// Repo code

enum Color { Red, Green, Blue };//starts with 0
var c: Color = Color.Green;

enum Color1 { Red = 1, Green, Blue };
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 { Red = 1, Green = 2, Blue = 4 };//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);






// ***************************************************************************
// const enum

const enum Color0 { Red, Green, Blue };//starts with 0
var c0: Color0 = Color0.Green;

const enum Color01 { Red = 1, Green, Blue };
// var colorName: string = Color0[2]; //Not allowed with const enums
console.log(colorName);

const enum Color02 { Red = 1, Green = 2, Blue = 4 };//can assign values to all
var colorIndex1 = Color02["Blue"];
console.log(colorIndex);



// *****************************************************
// arrays

let array1: number[] = [5, 6, 7,];//correct syntax
console.log(array1[1]);//correct syntax   shows 6 on index 1
let array2: Array<number> = [1, 2, 3];//alternative correct syntax
let array3: number[] = [];//correct syntax to define an empty array

let myArray: Array<number> = [0, 1, 2, 3, 4, 5];

// let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding
array5.push(423);

console.log("array 1: ", array1);
console.log("array 2: ", array2);
console.log("array 3: ", array3);
console.log("array 5: ", array5);

array5.push(937);
console.log("Array 5 after adding 937", array5);


// ************************************************
// Functions


// must have return if type is not undefined, void or any
// must have parameters

// named functions
function addingFunc(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("AddingFunc 1 and 9 is: ", addingFunc(1, 9));


function addFun1(a = 6, b = 3) {
    return a + b;
}
console.log("add of 6 and 3 is: ", addFun1());


function add22() {
    let a = 2;
    let b = 3;
    let sum = a + b;
    console.log("add22 is: ", sum);
}
console.log("add22", typeof add22());




// lambda function 
let addLambda = (num1: number, num2: number) => num1 + num2;
console.log("addLambda is; ", addLambda(3, 8));

// the above is same as
function addLambdaAlter(num1: number, num2: number) {
    return num1 + num2;
}
console.log("addLambdaAlter is: ", addLambdaAlter(1, 9));



// anonymous functions
let addAnony = function (a: number, b: number): number {
    return a + b;
}
console.log("anonymous function's value is: ", addAnony(2, 3));

// anonymous function with explicit type
let anonFuncExplicit: (x: number, y: number) => number = function (x: number, y: number) {
    return x + y;
}
console.log("anonymous explicit type function: ", anonFuncExplicit(7, 9));


// named function 
function anonFuncExplicitNamed(x: number, y: number) {
    return x + y;
}
console.log("anonymous explicit type function: ", anonFuncExplicitNamed(7, 6));



// ****************************************************************
// default, optional, rest functions
// ****************************************************************

//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Sumama");  //ok
// let result2 = buildName("Sumama", "Rahim", "Sr.");  //error, too many parameters
var result3 = buildName("Sumama", "Rahim");  //also ok

console.log("BuildName 1: ", result1);
// console.log("BuildName 2: ", result2);
console.log("BuildName 3: ", result3);



//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
	
    
let result4 = buildName1("Sumama");  //ok
console.log("BuildName1 result 4: ", result4);


// Async



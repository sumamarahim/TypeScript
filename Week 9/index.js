"use strict";
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
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["green"] = 1] = "green";
    colors[colors["blue"] = 2] = "blue";
})(colors || (colors = {}));
;
var c1 = colors.red;
console.log(`Color is: ${c1}`); // shows 0 as red's array index
console.log(`Color 2 is: ${colors.green}`); // SHows 1 as green's array index
console.log(`Color 3 is: ${colors.blue}`); // shows 2 as blues's array index
console.log(`All colors are: ${colors}`); // returs object not vlues
// Assigning name/values to enum
var colors2;
(function (colors2) {
    colors2["orange"] = "OrangeVal";
    colors2["yellow"] = "YellowVal";
    colors2["cyan"] = "CyanVal";
    colors2["magenta"] = "MagentaVal";
})(colors2 || (colors2 = {}));
;
var c2 = colors2.cyan;
console.log("Colors2 cyan indexed value is: ", colors2.cyan);
console.log("Colors2 magenta index value is: ", colors2.magenta);
console.log("Colors2 orange index is: ", colors2.orange);
console.log("Colors2 yellow is indexed with val: ", colors2.yellow);
console.log("accessing using assigned name: ", colors2["orange"]);
console.log("\n*******Okey*****************\nAccessing from value: ", colors2);
var colors3;
(function (colors3) {
    colors3[colors3["white"] = 2] = "white";
    colors3[colors3["skyBlue"] = 3] = "skyBlue";
    colors3[colors3["purple"] = 4] = "purple";
})(colors3 || (colors3 = {}));
; // skyBlue and purple's index adds with white's index 2
console.log("******** Enum using Assigned index numbers ***************\n");
console.log("white index is: ", colors3.white);
console.log("SkyBlue index is: ", colors3.skyBlue);
console.log("Purple index is: ", colors3.purple);
console.log("with indexed numbers: ", colors3[2]); // index 2 is white color
// Repo code
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
; //starts with 0
var c0 = 1 /* Color0.Green */;
;
// var colorName: string = Color0[2]; //Not allowed with const enums
console.log(colorName);
; //can assign values to all
var colorIndex1 = 4 /* Color02["Blue"] */;
console.log(colorIndex);
// *****************************************************
// arrays
let array1 = [5, 6, 7,]; //correct syntax
console.log(array1[1]); //correct syntax   shows 6 on index 1
let array2 = [1, 2, 3]; //alternative correct syntax
let array3 = []; //correct syntax to define an empty array
let myArray = [0, 1, 2, 3, 4, 5];
// let array4: number[] = new number[2];//error
let array5 = [];
array5.push(1234); //dynamically adding
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
function addingFunc(num1, num2) {
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
let addLambda = (num1, num2) => num1 + num2;
console.log("addLambda is; ", addLambda(3, 8));
// the above is same as
function addLambdaAlter(num1, num2) {
    return num1 + num2;
}
console.log("addLambdaAlter is: ", addLambdaAlter(1, 9));
// anonymous functions
let addAnony = function (a, b) {
    return a + b;
};
console.log("anonymous function's value is: ", addAnony(2, 3));
// anonymous function with explicit type
let anonFuncExplicit = function (x, y) {
    return x + y;
};
console.log("anonymous explicit type function: ", anonFuncExplicit(7, 9));
// named function 
function anonFuncExplicitNamed(x, y) {
    return x + y;
}
console.log("anonymous explicit type function: ", anonFuncExplicitNamed(7, 6));
// ****************************************************************
// default, optional, rest functions
// ****************************************************************
//Named function with optional parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Sumama"); //ok
// let result2 = buildName("Sumama", "Rahim", "Sr.");  //error, too many parameters
var result3 = buildName("Sumama", "Rahim"); //also ok
console.log("BuildName 1: ", result1);
// console.log("BuildName 2: ", result2);
console.log("BuildName 3: ", result3);
//anonymous function type with optional parameters
var buildName1 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
let result4 = buildName1("Sumama"); //ok
console.log("BuildName1 result 4: ", result4);
// Asyn 

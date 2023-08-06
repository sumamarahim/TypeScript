"use strict";
/**
 * FUNCTION:
 * Functions is to use modularised or make in segments the entire program or code
 *  use to reuse the code without writing multiple times
 * 1: Code reuseability
 * 2: Code modification with ease
 * 3: Code ease of access
 * SYNTEX
 * -----
 * function functionName(Parameters){
 *      function body
 *      write your code here
 * }
 *
 * How to call function
 *
 * just use the function name like functionName();
 *
 * FUNCTION TYPES
 * ---------------
 * 1: input but no return
 * 2: no input but returns
 * 3: input and returns as well
 *
 */
// Parameter type annotation
function greeting(name) {
    console.log(`Hello! ` + name.toUpperCase() + "!");
}
let name = "Sumama"; // method 1
greeting(name);
// method 2
greeting("Sofian");
// Return Type Annotations
function myFavNum() {
    return 19;
}
console.log(`My Favourite Number is: `, myFavNum());
// FUNCTION TYPES DETAIL
// 1: Input but No Returns
// MY templete literals are not working, Why?
function welcome(useName) {
    console.log(`Welcome, ${useName} This is Welcome Function -> input, No Return`);
}
// function calling
welcome("Sumama");
// 2: No Input but returns value
console.log(`Function -> no input but returns`);
function addNums(num1, num2) {
    let a = 7;
    let b = 6;
    return a + b;
}
let result = addNums(12, 23);
console.log(`Your add is, `, result);
function addNums1(num1, num2) {
    let a = 1;
    let b = 3;
    console.log(`Your return value is: `, a + b);
}
addNums1();
// 3: input and return value as well
console.log('Function -> Input but returns val as well');
function addWithIandO(nums1, nums2) {
    let value = `Here is add with i and O values ${nums1 + nums2}`;
    return value;
}
let returnVal = addWithIandO(30, 50);
console.log(returnVal);
// Q1: Why the above function returns string?
function multiply() {
    let a = 3;
    let b = 9;
    return a * b;
}
let results = multiply();
console.log(`Return value of addss func`, results);
// let me check the type of results var
console.log("The type of results var is: ", typeof results);
// Example
// function which converts 98 deg Fahrenheit to Celsius
function toCelsius(fahrenheite) {
    return (5 / 9) * (fahrenheite - 32);
}
console.log("98 Deg Fahrenheit in Celsius is: ", toCelsius(98), "\nType of: ", typeof toCelsius());
// function as variable
let tempCel = toCelsius(77);
let msg = "Cool body temp is not less than " + tempCel + " Deg Celsius";
console.log(msg);
// inline variable for the above
let inLineTempCel = toCelsius(77);
console.log((`Inline variable for the above prints same ${inLineTempCel} Deg Celsius`));
// another inline variable for the above 2 variables and functins
console.log((`Inline variable for the above prints same ${toCelsius(77)} Deg Celsius`));
// no xy can be used as function
let xy = function (a, b) {
    return a * b;
};
// variable xy can be used as function, NOW!
let xyz = xy(3, 3);
console.log(xyz);
console.log(xy(3, 3)); // both are same
// toString() method returns function as string
console.log(xy.toString());
console.log(typeof xy());
console.log("\n================\n\tArrow Functions\n================\n");
/**
 * Arrow Functions
 * arrow functions allows a short syntax for writing function expressions
 * we don't need keywords like function, return, and curly brackets
 *
 */
// example
let example = (x, y) => x * y;
console.log(example(3, 5));
let sumNum = (x, y) => {
    return x + y;
};
console.log(sumNum(1, 3));
let sumNum01 = (x, y) => console.log(x + y);
sumNum01(2, 3);
// THe above and this both are same
// sumNum01 and sumNum02 are same 
function sumNum02(x, y) {
    return console.log(x + y);
}
sumNum02(2, 3);
let sumNum1 = (x, y) => x + y;
console.log(sumNum1(1, 2));
// single > no input and no return
let sumOfNum = () => console.log("Sum of 3 and 4 is: ", 3 + 4);
sumOfNum(); // prints 7
let addOfNum = () => 6 + 3;
console.log("Sum of 3 and 6 is: ", addOfNum());
// Arrow functions with Parameters
let addition = (num1, num2) => num1 + num2;
addition(12, 19);
console.log(addition);
function addition1(num1, num2) {
    return num1 + num2;
}
console.log(addition1(12, 19));
let addition2 = (num1, num2) => num1 + num2;
addition2(12, 19);
console.log(addition2());

"use strict";
// Arrays
let studentsName = ["Ali", "Ahmed", "Kashif", "Zeeshan"];
// how to remove values in array
/**
 * pop() method removes last element from an array
 * pop() method returns the value that was "popped out"
 * shift() method same as pop() but it removes first element and shifts all indexes to lower index
 * shift() method returnsthe val that was "shifted out"
 *
 *
 */
// it returns all the name of the above arrays
console.log(`initial array ${studentsName}`);
let popReturns = studentsName.pop(); // returns last index which is going to be removed
console.log(`Pop is returning: ${popReturns}`);
console.log(`After: ${studentsName}`); // returns all first indexes but not last one
let popReturns1 = studentsName.pop();
console.log(`New pop is returning: ${popReturns1}`); // returns last index kashif as to be removed
console.log(`After removing ${popReturns1} we have ${studentsName}`);
let pets = [];
pets[0] = "cat";
pets[1] = "dog";
pets[3] = "perrot";
console.log(`We have pets: ${pets}`); // please note index 2 is empty
//Shift
studentsName.shift();
console.log(`After Shift: ${studentsName}`);
// how to add values in array
/**
 * push() method adds new element at the end of array
 * push() method returns new array length
 * unshift() method adds new element at the beggining of array and "unshifts" older element
 * unshift() methods returns new array length also
 */
// push()
let returnVal = studentsName.push("Sumama");
console.log(`Pushing returning: ${returnVal}`);
console.log(`After pushing new value: ${studentsName}`);
console.log(`Push new Khan ${studentsName.push("Khan")} and we have new: ${studentsName}`);
// unshift()
console.log(studentsName); // we have ahmad, sumama, khan
let unshift1 = studentsName.unshift("New Adam", "Old Adam");
console.log("After unshift", unshift1);
console.log("After unshift all: ", studentsName);
//====================================
// Splicing and Slicing arrays
// Splice() method adds new items to an array
// example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// it adds elements to an array at 2nd index
// deleted 0 elements
//fruits.splice(2,0, "Lemon", "kiwi");
console.log(fruits);
// it delete 2 elements after kiwi
fruits.splice(2, 2, "Peach", "kiwi");
console.log(fruits);
// Slicing arrays
// slice() method slicing out a piece  of an array
// NOTE: slice() will create new array
const cars = ["MG", "Honda", "Toyota", "Jaguar", "Rolls Royce", "Tesla", "BMW", "Audi"];
const citrus = cars.slice(1);
console.log(`My cars collections: ${cars}`);
console.log(`My cars sliced with 1st element: ${citrus}`);
console.log(`I don't need some cars for now: ${cars.slice(2, 5)}`);

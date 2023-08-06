/**
 * to install promtSync use the following command
 * 1: npm i prompt-sync => this will install prompt sync
 * 2: npm i @types/node -D => this will import node package for promptSync
 * NOW USE
 * 3: const promptSync = require("prompt-sync")();
 * 4: let userName = promptSync("Enter your name.. ");
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// THIS FOR, TO GET INPUT FROM USER WITH KEYBOARD
var promptSync = require("prompt-sync")(); // import prompt sync 
var userName = promptSync("Enter your name.. ");
// use any of these from following
//console.log(`your name is: ${userName}`); // template literals
console.log('Your name is: ', userName);
//console.log('YOur name is: '+userName);
// START OF ASSIGNMENT NO 2: 
// Assignement No 2: Grading System with user input
console.log("**************Start of Assignment  No 2******************");
var prompt1 = require("prompt-sync")()("Enter Name again: ");
console.log("Output is: ".concat(prompt1));
// Marks input from user 
console.log("Please enter your each sub marks out of 100");
var sub1 = require("prompt-sync")()("Enter your Sub 1 marks: ");
var sub2 = require("prompt-sync")()("Enter your Sub 2 marks: ");
var sub3 = require("prompt-sync")()("Enter your Sub 3 marks: ");
var sub4 = require("prompt-sync")()("Enter your Sub 4 marks: ");
console.log(typeof sub1); // let me check type of data: it's string
console.log(typeof Number(sub1)); // let me convert now string to num
var totalMarks = 400;
var sum = Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4);
var percent = Number((sum / totalMarks) * 100);
//console.log(`the sum of all is: ${Number(sum)}`);
console.log("Total Marks is: ", sum, " Out of ", totalMarks);
console.log("Percentage is: ", percent, "%");
console.log(gradeFunc());
function gradeFunc() {
    var gradeVar = percent;
    if (gradeVar <= 100 && gradeVar >= 90) {
        console.log("Brilliant Student you've A+ grade");
    }
    else if (gradeVar < 90 && gradeVar >= 80) {
        console.log("Greate Student you have: A grade");
    }
    else if (gradeVar < 80 && gradeVar >= 70) {
        console.log("B+ Grade");
    }
    else if (gradeVar < 70 && gradeVar >= 60) {
        console.log("B Grade");
    }
    else if (gradeVar < 60 && gradeVar >= 50) {
        console.log("C Grade");
    }
    else
        console.log("SOrry! you are below the Grade C and your %age is: ", percent);
}
console.log("**************End of Assignment  No 2******************");
/**
 




// By Default promptSync use always strings
let marks1 = promptSync("Enter marks 1.. ");
let marks2 = promptSync("Enter marks 2.. ");
let marks3 = promptSync("Enter marks 3.. ");
let marks4 = promptSync("Enter marks 4.. ");

let totalMarks = marks1 + marks2 + marks3 + marks4;
console.log("Total Marks: ", totalMarks);

// To convert strings into number
const num = promptSync('Enter Number: ');
console.log('Your number + 4 = ');
console.log(Number(num)+4);









newFunction();

function newFunction() {
    const promptNum = promptSync();
    const num1Str = promptNum("Enter 1st num : ");
    const num2Str = promptNum("Enter 2nd num : ");

    const sum = num1Str + num2Str;
    console.log('Sum of ${sum} = ', sum);
}






 */
// COPIED FROM NOUMAN FROM GITHUB
// Created by NAUMAN ANWAR (WMD BATCH 48 Q1)
//  1. Install Node.js, TypeScript and VS Code on your computer.
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var myName = "Nauman";
console.log("Hello" + " " + myName + "," + " would you like to learn some Python today?");
//   ===========================
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lower, upper & titlecase.
var nameCase = "Nauman Anwar";
console.log(nameCase.toUpperCase()); // to upper case
console.log(nameCase.toLowerCase()); // to lower case
// titleCase
function titleCase(str) {
    // Created a function called titleCase
    str = str.toLowerCase(); // First the parameter 'srt' will be converted into lowerCase.
    var strArray = str.split(" "); // Now all the words will be splitted and stored into an array.
    for (var i = 0; i < strArray.length; i++) {
        // In this for loop  we are running this loop array-1 times.
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1); // Here the first character of a word is set to uppercase. While the slice(1) removing the first character of each word in the array and returning the remaining characters as a new string.
    }
    return strArray.join(" ");
}
console.log(titleCase(nameCase));
//   ===========================
// 4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D"); // Escaped Characters with single Quote.
//   ===========================
// 5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var writer = "Albert Einstein";
var wQuote = ' once said, "A person who never made a mistake never tried anything new."';
var myCont = writer + wQuote;
console.log(myCont);
//   ===========================
// 6 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var strStripe = "\t Nauman \n Anwar";
console.log(strStripe);
// Striping the white Spaces in the variable strStripe
strStripe = strStripe.trim();
console.log(strStripe); // trim() method only removed white spaces from the beginning and end of the string.
strStripe = strStripe.replace(/\s/g, ""); //now we have removed the whitespaces between the string
console.log(strStripe);
//   ===========================
// 7,8 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log("Addition");
console.log(5 + 3);
console.log("Subtraction");
console.log(12 - 4);
console.log("Multiplication");
console.log(2 * 4);
console.log("Division");
console.log(16 / 2);
//Your output should simply be four lines with the number 8 appearing once on each line.
//   ===========================
// 9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var myNum = 47;
var myMsg = "Hello, my favourite number is ".concat(myNum); // ${variable} method allows us to insert a variable value inside string
console.log(myMsg);
//   ===========================
// 10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Comments can be made within JavaScript or TypeScript using // before the text. I have already added comments to each program.
//   ===========================
// 11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friendNames = ["Adnan", "Jalal", "Danial", "Arsalan", "zahoor"];
console.log(friendNames[0]); // at index 0 we have Adnan. So only adnan will be printed.
console.log(friendNames[1]);
console.log(friendNames[2]);
console.log(friendNames[3]);
console.log(friendNames[4]);
// another method is iterating the array through For loop. Here is the example:
for (var i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
}
//   ===========================
// 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i = 0; i < friendNames.length; i++) {
    console.log("Greetings! my friend" + " " + friendNames[i] + ".");
}
//   ===========================
// 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = [
    "car",
    "motorcycle",
    "bicycle",
    "train",
    "helicopter",
];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i] + ".");
}
//   ===========================
// 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Adnan", "Danial", "Nabeel"];
guests.forEach(function (arr) {
    // The forEach() method calls a function once for each array element.
    console.log("Greetings! " + arr + ", I cordially invite you to my birthday party.");
});
//   ===========================
// 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("Unfotunately," + guests[2] + "can't make it to the party");
guests[2] = "Arsalan"; // at index [2] we have Nabeel, now we have replaced it with Arsalam.
guests.forEach(function (arr) {
    // The forEach() method calls a function once for each array element.
    console.log("Greetings! " + arr + ", I cordially invite you to my birthday party.");
});
//   ===========================
// 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var newGuests = ["Inayat", "Jalal", "Zaman", "Omar"];
newGuests.forEach(function (frnd) {
    console.log("I have a new Friend" + " " + frnd + " " + "to invite to my party.");
});
// Add one new guest to the beginning of your array.
guests.unshift(newGuests[3]);
console.log(guests);
// Add one new guest to the end of your array.
guests.push(newGuests[0]);
console.log(guests);
// Add one new guest at the center of your array.
guests.splice(3, 0, "Jalal"); // splice() mehod is used to enter an item at a given index of an array wihout deleting any item from array.
//Print a new set of invitation messages, one for each person in your list.
guests.forEach(function (frnd) {
    console.log("Greetings! " + frnd + ", I cordially invite you to my birthday party.");
});
//   ===========================
// 17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guests.forEach(function (frnd) {
    console.log("Dear " +
        frnd +
        ", unfortunately I'm at full capacity at my party and can only invite 2 guests.");
});
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
guests.shift(); // Shift method will remove first item of the array.
console.log(guests);
guests.shift();
console.log(guests);
guests.shift();
console.log(guests);
guests.shift();
console.log(guests); // Here we have only two names left in the array.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach(function (friend) {
    console.log("Greetings! " + friend + ", I cordially invite you to my birthday party.");
});
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests.shift();
guests.shift();
console.log(guests);
//   ===========================
// 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
var myplaces = [
    "Bora Bora",
    "Venice",
    "Helsenki",
    "Moscow",
    "Athens",
];
// Print your array in its original order.
console.log(myplaces);
// Print your array in alphabetical order without modifying the actual list.
var sortedArray = myplaces.slice().sort(); // Here we made a copy of the array and sorted it without modifying the original.
console.log(sortedArray);
// Show that your array is still in its original order by printing it.
console.log(myplaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
var reversedSortedArray = sortedArray.slice().reverse();
console.log(reversedSortedArray);
// Show that your array is still in its original order by printing it again.
console.log(myplaces);
// Reverse the order of your list. Print the array to show that its order has changed.
myplaces = myplaces.reverse();
console.log(myplaces);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
myplaces = myplaces.reverse();
console.log(myplaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
myplaces = myplaces.sort();
console.log(myplaces);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myplaces = myplaces.reverse();
console.log(myplaces);
//   ===========================
// 19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guests1 = ["Adnan", "Danial", "Nabeel"];
var numGuest = 0;
for (var i = 0; i < guests1.length; i++) {
    numGuest += i; // Here the variables numGuest will increment on each iteration of the loop.
}
console.log("The number of guests joining our party is:" + " " + numGuest);
//   ===========================
// 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var itemArr = [
    ["k2", "NangaParbat", "Trichi Mir", "Elum", "Himaliya"],
    ["Indus", "Sutjel", "Ravi", "Chanab", "Jehlum"],
    ["Pakistan", "China", "Afghanistan", "India", "Iran"],
];
console.log(itemArr);
//   ===========================
// 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var myObject = {
    Mountains: "k2",
    Rivers: "Indus",
    Countries: "Pakistan",
};
console.log(myObject);
//   ===========================
// 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var myNewArr = [1, 2, 3];
console.log(myNewArr[3]);
// instead of error, it's returning undefined.
//   ===========================
// 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var x = 57;
console.log("Is x == 57 ? I predict True.");
console.log(x == 57);
var y = 73;
console.log("Is y != 12 ? I predict True.");
console.log(y != 12);
var z = 54;
console.log("Is z == 54? I predict True.");
console.log(z == 54);
var a = 23;
console.log("Is a == 23? I predict True.");
console.log(a == 23);
var b = 22;
console.log("Is b == 22? I predict True.");
console.log(b == 22);
// Now lets predict false statements
var c = "Nauman";
console.log("Is c == 'nauman' ? I predict False.");
console.log(c == "nauman");
var d = "Baloon";
console.log("Is d == 'dice' ? I predict False.");
console.log(d == "dice");
var e = "car";
console.log("Is e == 'bus' ? I predict False.");
console.log(e == "bus");
var f = "bat";
console.log("Is f == 'ball' ? I predict False.");
console.log(f == "ball");
var g = "desktop";
console.log("Is g == 'laptop' ? I predict False.");
console.log(g == "laptop");
//   ===========================
// 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
var newStr = "Nauman";
console.log("Is newStr == 'Nauman' ? I predict True.");
console.log(newStr == "Nauman");
console.log("Is newStr not equal to (!=) 'Nauman' ? I predict False.");
console.log(newStr != "Nauman");
// Tests using the lower case function
var newStr1 = "Computer";
console.log("Is newStr == lower case newStr1? I predict False.");
console.log(newStr == newStr.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var myNum1 = 99;
console.log("Is myNum1 == 99 ? I predict True.");
console.log(myNum1 == 99);
console.log("Is myNum1 != 99 ? I predict False.");
console.log(myNum1 != 99);
console.log("Is myNum1 < 99 ? I predict False.");
console.log(myNum1 < 99);
console.log("Is myNum1 > 10? I predict True.");
console.log(myNum1 > 10);
console.log("Is myNum1 smaller than or equal to 100 ? I predict True.");
console.log(myNum1 <= 100);
console.log("Is myNum1 equal to or greater than 120 ? I predict False.");
console.log(myNum1 >= 120);
// Tests using "and" and "or" operators
var ourString = "Bus";
console.log("comparison with AND operator will always evaluate to false because a single variable cannot hold two different values at the same time, therefore it is throwing an error.\n");
// console.log(ourString == 54 && ourString == "Bus")
console.log("is ourString = Bus OR Truck? I predict True");
console.log(ourString == "Bus" || ourString == "Truck");
// Test whether an item is in a array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Does Mango exists in fruits Array? I predict True");
console.log(fruits.includes("Mango"));
// Test whether an item is not in a array
var cars = ["Ford", "Toyota", "GMC", "Honda"];
console.log("Nissan does not exists in Cars Array? I predict True");
console.log(!cars.includes("Nissan"));
console.log("\n");
//   ===========================
// 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
var alien_color = "green";
if (alien_color == "green") {
    console.log("You have earned 5 points");
}
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var myCar = "Toyota";
if (myCar == "Toyota") {
    console.log("Correct");
}
if (myCar == "suzuki") {
}
console.log("\n");
//   ===========================
// 26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
var alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("You have earned 5 points");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log("You have earned 10 points");
}
// Write one version of this program that runs the if block and another that runs the else block.
var alien_color2 = "Yellow";
if (alien_color2 == "green") {
    console.log("You have earned 5 points");
}
else {
    console.log("You have earned 10 Points\n");
}
//   ===========================
// 27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
var alienCol = "green";
if (alienCol == "green") {
    console.log("You have earned 5 points");
}
else if (alienCol == "yellow") {
    // If the alien is yellow, print a message that the player earned 10 points.
    console.log("You have earned 10 points");
}
else {
    console.log("You have earned 15 points"); // If the alien is red, print a message that the player earned 15 points.
}
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
//2nd version
alienCol = "yellow";
if (alienCol == "green") {
    console.log("You have earned 5 points");
}
else if (alienCol == "yellow") {
    console.log("You have earned 10 points");
}
else {
    console.log("You have earned 15 points");
}
// 3rd version
alienCol = "red";
if (alienCol == "green") {
    console.log("You have earned 5 points");
}
else if (alienCol == "yellow") {
    console.log("You have earned 10 points");
}
else {
    console.log("You have earned 15 points");
}
console.log("\n");
//   ===========================
/* 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
 If the person is less than 2 years old, print a message that the person is a baby.
 If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
 If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
 If the person is at least 20 years old but less than 65, print a message that the person is an adult.
 If the person is age 65 or older, print a message that the person is an elder.*/
var age = 23;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
console.log("\n");
//   ===========================
/* 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favourite_fruits = ["Apple", "Mango", "Cherry"];
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mangos\n");
}
if (favourite_fruits.includes("Grapes")) {
    console.log("I really like Grapes\n");
}
if (favourite_fruits.includes("Cherry")) {
    console.log("I really like Cherry\n");
}
if (favourite_fruits.includes("Apple")) {
    console.log("I really like Apples\n");
}
if (favourite_fruits.includes("Coconut")) {
    console.log("I really like Coconuts\n");
}
//   ===========================
/* 30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
  If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
  Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var adminArr = ["admin", "user1", "user2", "user3", "user4"];
for (var i = 0; i < adminArr.length; i++) {
    if (adminArr[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + adminArr[i] + ",", "thank you for logging in again.");
    }
}
console.log("\n");
//   ===========================
/* 31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
If the list is empty, print the message We need to find some users!
 Remove all of the usernames from your array, and make sure the correct message is printed.*/
adminArr = [];
if (adminArr.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("we have users");
}
console.log("\n");
//   ===========================
/* 32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Make a list of five or more usernames called current_users.
Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = [
    "Nauman97",
    "john",
    "Razzak",
    "Salman",
    "Farhan",
];
var new_users = ["Nauman97", "JOHN", "Fayyaz", "Saleem", "Ali"];
// for (var i = 0; i < new_users.length; i++) {
//   if (current_users.includes(new_users[i])) {
//     console.log(new_users[i] + "has been take. Choose another username");
//   } else {
//     console.log(new_users[i] + " username is available.");
//   }
// }
for (var i = 0; i < new_users.length; i++) {
    var lowerCaseUser = new_users[i].toLowerCase();
    if (current_users.includes(new_users[i])) {
        console.log(new_users[i] + " has been taken. Choose another username.");
    }
    else if (current_users.includes(lowerCaseUser)) {
        console.log(new_users[i] +
            " has been taken (case-insensitive). Choose another username.");
    }
    else {
        console.log(new_users[i] + " username is available.");
    }
}
console.log("\n");
//   ===========================
/* 33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
 Store the numbers 1 through 9 in a array.
 Loop through the array.
 Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] == 1) {
        console.log("".concat(myNumbers[i], "st"));
    }
    else if (myNumbers[i] == 2) {
        console.log("".concat(myNumbers[i], "nd"));
    }
    else if (myNumbers[i] == 3) {
        console.log("".concat(myNumbers[i], "rd"));
    }
    else {
        console.log("".concat(myNumbers[i], "th"));
    }
}
console.log("\n");
//   ===========================
/* 34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.*/
var myPizza = ["Fajita", "Chicken Supreme", "Pepperoni"];
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}
console.log("\n");
/* Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.*/
for (var i = 0; i < myPizza.length; i++) {
    console.log("I like ".concat(myPizza[i], " pizza."));
}
/* Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
console.log("I really love Pizza");
console.log("Pepperoni Pizza for Tuesday");
console.log("I like Fajita pizza in winters.");
console.log("Hawaian pizza having pineapple on top is the best!");
console.log("\n");
//   ===========================
/* 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.*/
var myAnimals = ["Cat", "Dog", "Parrot"];
for (var i = 0; i < myAnimals.length; i++) {
    console.log(myAnimals[i]);
}
// Modify your program to print a statement about each animal, such as A dog would make a great pet. Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
for (var i = 0; i < myAnimals.length; i++) {
    if (myAnimals[i] == "Cat") {
        console.log("".concat(myAnimals[i], " is such a calm pet."));
    }
    else if (myAnimals[i] == "Dog") {
        console.log("".concat(myAnimals[i], " is such a playful pet."));
    }
    else {
        console.log("".concat(myAnimals[i], " mimics everyone."));
    }
}
console.log("All these animals are consdered to be a great domestic pets!");
console.log("\n");
//   ===========================
// 36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, msg) {
    var Mysize = size;
    var myTxt = msg;
    return "The size of this shirt is ".concat(Mysize, ".\nThe text to be printed on the shirt is: ").concat(myTxt, ".");
}
console.log(make_shirt(34, "I'm a coder!"));
console.log("\n");
//   ===========================
// 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function new_shirt(size, txt) {
    if (size === void 0) { size = "large"; }
    if (txt === void 0) { txt = "Standing on the shoulder of giants"; }
    return "The size of this shirt is ".concat(size, ".\nThe text to be printed on the shirt is: ").concat(txt, ".");
}
/*Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
console.log(new_shirt());
console.log(new_shirt("medium"));
console.log(new_shirt("small", "Make passion, strength"));
console.log("\n");
//   ===========================
// 38 Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(city, " is in ").concat(country, ".");
}
console.log(describe_city("Karachi"));
console.log(describe_city("Peshawar"));
console.log(describe_city("Delhi", "India"));
console.log("\n");
//   ===========================
/* 39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"  */
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Swat", "Pakistan"));
console.log(city_country("Tehran", "Iran"));
console.log(city_country("Bejing", "China"));
console.log("\n");
//   ===========================
/* 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.*/
function make_album(name, title, trackNum) {
    if (trackNum === void 0) { trackNum = 0; }
    var myObject = {};
    myObject["artist"] = name;
    myObject["Album"] = title;
    if (trackNum > 0) {
        myObject["Track Numbers"] = trackNum;
    }
    return myObject;
}
console.log(make_album("Cat Stevens", "Strings"));
console.log(make_album("Atif Aslam", "Adaat"));
console.log(make_album("Arjit Singh", "Mashup"));
console.log(make_album("Arjit Singh", "Mashup", 5));
//   ===========================
// 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function magician_Name(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
var Arr2 = ["David Copperfield", "Harry", "Criss Angel", "Dymano"];
magician_Name(Arr2);
//   ===========================
// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(Arr) {
    for (var i = 0; i < Arr.length; i++) {
        Arr[i] += " The Great";
    }
    return Arr;
}
console.log(make_great(Arr2));
magician_Name(Arr2);
//   ===========================
// 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Arr2 = ["David Copperfield", "Harry", "Criss Angel", "Dymano"];
// function new_arr(Arr:string[]){ // duplicate functions not allowed
//   let newArray = [...Arr];
// for (var i=0;i<Arr.length;i++){
//   Arr[i] = Arr[i]+ " The Great"
// }
// return newArray;
// }
// let modifiedArray:string[] = new_arr(Arr2);
// console.log(modifiedArray)
Arr2 = ["David Copperfield", "Harry", "Criss Angel", "Dymano"];
function new_arr(Arr) {
    var newArray = __spreadArray([], Arr, true);
    for (var i = 0; i < Arr.length; i++) {
        newArray[i] = Arr[i] + " The Great";
    }
    return newArray;
}
var modifiedArray = new_arr(Arr2);
console.log(modifiedArray);
magician_Name(Arr2);
console.log("\n");
//   ===========================
// 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time
function mySandwich() {
    var Arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arg[_i] = arguments[_i];
    }
    //Rest parament allows unlimited arguments
    var sandwich = __spreadArray([], Arg, true);
    for (var i = 0; i < sandwich.length; i++) {
        console.log(sandwich[i]);
    }
    return "".concat(sandwich.join(","), " are the ingredient.");
}
console.log(mySandwich("lettuce", "beef", "tomato"));
console.log(mySandwich("lettuce", "tunna", "tomato", "corn", "Pickle"));
console.log(mySandwich("lettuce", "beef", "tomato", "chipotle Sauce", "sausage"));
//   ===========================
// 45 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var i_1 = 0; i_1 < options.length; i_1 += 2) {
        var key = options[i_1];
        var value = options[i_1 + 1];
        car[key] = value;
    }
    return car;
}
console.log(createCar("Honda", "City"));
console.log(createCar("Honda", "City", "Mileage", 300000));
// ========================The End ===============================

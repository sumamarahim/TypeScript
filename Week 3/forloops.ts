/**
 * For Loops can used if we need to run same code over and over again, each time with diff val
 * Syntax:
 * =========
 * for (expression1; expresson2; expression3)
 * {
 *      code block that can be executed 
 * }
 */

// Example

for (let a = 0; a < 10; a++)
{
    console.log(`Good Morning ${a+1}`);
}


for (let a = 0; a < 10; a++)
{
  console.log(`A = ${a}`);
}


console.log("********Back Counting*********");
for (let a = 10; a > 0; a--)
{
  console.log(`A2 = ${a}`);
}



console.log("*****************");


for (let a = 1; a <= 5 ; a++)
{
  for (let b = 1; b <= a; b++)
  {
    console.log(`a: ${a}: b: ${b}`);
  }
}



/**

// example

const beautifulCities: string = ["Islamabad", "Karachi", "Lahore", "Peshawar", "Quetta"];
for (let index = 0; index < beautifulCities.length; index++) 
{
    const element = beautifulCities[index];   
    console.log("We are: ", element);
}

// example: quiz which is beautifull city?

for (let index = 0; index < beautifulCities.length; index++)
{
    if ("Islamabad" === beautifulCities[index]) 
    {
        console.log("It's one of the cleanest city!");
    }
}



var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

for (var i = 0; i <= 4; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    console.log("It's one of the cleanest cities");
    break;
  }
}









var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var matchFound = "no";

for (var i = 0; i <= 4; i++){
if ("Islambad" === cleanestCities[i]) {
  matchFound = "yes";
  console.log("It's one of the cleanest cities");
}
}

if (matchFound === "no") {
  console.log("It's not on the list");
}








var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var numElements = cleanestCities.length;
var matchFound: boolean = false;

for (var i = 0; i < numElements; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  console.log("It's not on the list");
}





// Nested loops
// loops within loops

let firstName = ["Ali", "Dost", "Asad", "Suleman"];
let lastName = ["Ahmed", "Muhammad", "Khan", "Sami"];
let fullName = [];

for (let i = 0; i < firstName.length; i++)
{
    for (let j = 0; j < lastName.length; j++) 
    {
        fullName.push(firstName[i] + lastName[j]);
        console.log(fullName);
        
    }
   
}

console.log(`Our student's full names are ${fullName}\n`);





var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}



console.log(fullNames);







// nested for loop

for (let i = 0; i < 10; i++) 
{
  //console.log(`I out side inner loop: ${i}`);
    for(let j = 0; j < 10; j++)  
    {
      let n = 7;
      console.log(`${n} x ${i} = ${n * j}`);
      //console.log("I am j: ",j);
    }
//  console.log(`I out side iner loop ${i}`);
}









*/

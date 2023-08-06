/**
 * IF, ELSE, ELSE IF
 * 1: if 
 * it can be used to specify a block of code if condition is true
 * 
 * Syntax:
 * if (conditionTrue)
 * {
 *      block of code
 * }
 * 
 * 
 * 2: else
 * it can be used to specify a block of code if same conditions is false
 * 
 * Syntax:
 * if (Condition)
 * {
 *      block of code for this condition
 * }
 * else
 * {
 *      block of code if condition is false
 * }
 * 3: else if
 * it can be used to specify a block of code if first condition is false then the next condition will be checked
 * 
 * 
 * Syntax:
 * 
 * if (condition)
 * {
 *      block of code for this condition
 * }
 * else if (condition)
 * {
 *      block of code for this condition if the above conditin is false
 * }
 * 
 * else
 * {
 *      block of code if all the above conditions are false
 * }
 */



// IF
console.log("if statement!");

let x = 3;
let y = 5;
if (x<y)
{
    console.log("X is less then Y");// shows if conditions is true
}
// same as above but false in condition
if (x>y)
{
    // shows nothing because condition is false
    console.log("X is less then Y");// shows if conditions is true
}










/**
// Real example of the above
// prints Yes if Student is Gold Medalist

let totalMarks = 100;
let obtainedMarks = 96;
let targetMarks = 95.6;

//console.log("Are you Gold Medalist: ", yesNo);


function yesNo(option: boolean)
{
    if (obtainedMarks>targetMarks)
{
     console.log("YES");
}
}

console.log("Are you Gold Medalist: ", yesNo(true));




*/

// else
// example 1

function entryPass(haveCard: boolean)
{
    if(haveCard == true)
    {
        return "Allowed to enter!";
    }
    else 
    {
        return "Not allowed!";
    }
}

console.log(entryPass(true));

console.log(entryPass(false));



// example 2
// if marks = or > 90% then appear in test else not

function examAppear(marksPercent: number): "You are allowed to appear in exam" | "Sorry you are not allowed!"
{
    if(marksPercent>=90 || marksPercent <=100 && marksPercent >= 90)
    {
        return "You are allowed to appear in exam";
    }
    else
    {
        return "Sorry you are not allowed!";
    }
}

console.log(examAppear(97));
console.log(examAppear(78));
// same the above can be applied for else if




// else if
// Example 1
// if a person have NIC or Student ID card then allow to enter 

function entryPass2(haveCard: string)
{
    if(haveCard == "Student ID Card")
    {
        return "Allowed! Please Enter";
    }
    else if (haveCard == "NIC")
    {
        return "Allowed! Please verify you NIC";
    }
    else if (haveCard == "Passport")
    {
        return "Allowed! Please verify your Passport";
    }
    else
    {
        return "Sorry NOt Allowed!";
    }
}

console.log("I have Driving Card: ",
entryPass2("Driving Card"));
console.log("I have Passport: ", 
entryPass2("Passport"));
console.log("I have NIC: ", entryPass2("NIC"));
console.log("I have Student ID Card: ", 
entryPass2("Student ID Card"));







// Example 2
// Students Grading System

function grading(marks: number)
{
    if(marks<=0 && marks >100)
    {
        return "Sorry wrong input please input b/w 0 and 100 percentage";
    }
    else if(marks>=90 && marks<=100)
    {
        return "Wow! you have Grade A+";
    }
    else if (marks >= 80 && marks < 90)
    {
        return "Wow! you have Grade A";
    }
    else 
    {
        return "Sorry no Grade";
    }
}


console.log(`marks is : 44%: `,grading(44));
console.log(`marks is : 88%: `,grading(88));
console.log(`marks is : 96%: `,grading(96));





// example 3 
// percentage to gpa conversion



// example 4
// gpa to percentage conversion





// example 5 
// grading system for students with use input


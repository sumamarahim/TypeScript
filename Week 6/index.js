import chalk from "chalk";
const log = console.log;
// // myName without type
// let myname = "Sumama";
// // myName with type
// let myname0: string = "Sumama";
// myName0 = 354; // we cann't reassign any other type
// union literals
// let age : number | string = "Dead"; // age can be num and string
// age = 19; // now we can re assign
// FROM CLASS
/*
let myName: null | string;
myName = null;
log(myName);

myName = "Sumama";
log(myName);

// myName = undefined; // gives error , we have just null and string
// myName = 19; //



let userName = "Sumama";
userName.toUpperCase();

*/
// ===============================================
// function cashWithdraw(amount : string | number | boolean){
//     // 20000
//     // twenty thousand
//     //amount.toString();
//     // amount = "Thirty K";
//     // amount.toLowerCase();
//     // amount = 10000
//     // amount / 100;
//     if(typeof amount == 'string'){
//         amount.toLowerCase();
//     }
//     else if(typeof amount == 'number')
//     {
//         amount / 100;
//     }
//     else{
//         !amount
//     }
// }
// log(cashWithdraw("Thirty Thousands"));
// // ==================================================
// let newAge : string | number;
// let newAge = Math.random() > 0.6 ? "Khan": 60;
// // Syntax of ternary operator
// // condition ? true statement : False statement
//  if(newAge == "Khan"){
//     console.log(newAge);
//  }
//  else{
//     newAge / 2;
//  }
// log(newAge);
console.log(chalk.bgYellow("********UNION LITERALS****************"));
let myname;
myname = null;
console.log(myname); // prints null
myname = "Sumama";
console.log(myname); // prints Sumama
// =============================
let userName = "Sumama Rahim";
let upper = userName.toUpperCase();
console.log("name in uppercase: ", upper);
// *************************************************
console.log(chalk.bgBlue("********CASHWITHDRAWAL****************"));
// ====================================
// my cashwithdraw function
function myCashWithdraw(amount) {
    console.log("=====================================");
    // if figure then find % else convet to uppercase
    if (typeof amount == "string") {
        let strAmount = amount.toUpperCase();
        console.log("Str Amount is: ", strAmount);
    }
    else if (typeof amount == "number") {
        let numAmount = amount / 100;
        let amountStr = amount.toString(); // convert int to string
        console.log("Num Amount is: ", numAmount);
    }
    else if (typeof amount == "boolean") {
        let boolAmount = amount;
        console.log("Bool Amount is: ", boolAmount);
    }
    else {
        console.log("Sorry error in amount");
    }
    console.log("Amount withdraw is: ", amount);
    console.log("=====================================");
}
// function calling with different parameters and different data types
console.log(myCashWithdraw(10000));
console.log(myCashWithdraw("Ten thousand"));
console.log(myCashWithdraw(false));
console.log(myCashWithdraw(true));
console.log(myCashWithdraw(1000.3));
console.log(chalk.bgGreen("********TERNARY OPERATORS****************"));
// ternary operators in typesscript
// syntax
// condition ? true statement : false statement ;
let rand = Math.random();
let myAgeIs = rand > 0.5 ? "Greater 0.5" : false;
console.log("Ternary Op is: ", myAgeIs, " and Random is: ", rand);
let newAge = rand > 0.5 ? "SRY" : 19;
console.log(newAge);
//  ====================================
console.log(chalk.bgYellow("********USER DEFINED TYPES****************"));
let amount;
// amount = 10000; // gives error
// amount = 250 K; // gives error
amount = 200000;
log("Amount is : ", amount);
amount = "200 K";
log("Amount is : ", amount);
let trafficLights;
trafficLights = "Red";
log("Traffic light is : ", chalk.bgRed(trafficLights), " STOP PLEASE");
trafficLights = "Yellow";
log("Traffic light is : ", chalk.bgYellow.bold(trafficLights), " Ready Now");
trafficLights = "Green";
log("Traffic light is : ", chalk.bgGreen.bold(trafficLights), " Please Go");
let trafficSignals;
trafficSignals = "Green";
log("Self made type is: ", trafficSignals);
let commands;
commands = "RIGHT";
log("Command is : ", commands);
let age;
age = 19; //OK
age = "died"; //OK
age = "unknown"; //OK
let secVar;
secVar = true;
secVar = null;
//secVar = undefined; //error
secVar = 150;
secVar = "abc";
// ===============================================
console.log(chalk.bgYellow("********OBJECTS****************"));
/**
 *
 *
 *
console.log("Objects");
let obj = {
  cls1: "Class 1",
  cls2: "Class 2",
  cls3: "Class 3",
  cls4: "Class 4",
};


 *
 *
 *
 */
// Real example
let car = {
    car1: "Toyota",
    car2: "Honda",
    car3: "Ferrari",
};
log("I have car: ", car.car3);
// console.log(chalk.bgYellow("********NESTED OBJECTS****************"));
/**
 *
 *
 *
 *
// Nested objects method 1
let nestedObj = {
  cls01: "Class 1 NEsted",
  cls02: "Class 2 NEsted",
  cls03: obj, // obj is an object declared above as an another object
};

log("NEsted Objects: ", nestedObj.cls03);


let nestedObj2 = {
    cls01: "Class 1 NEsted Method 2",
    cls02: "Class 2 NESteD MethoD 2",
    cls03: {
        cls0301: "nested Item 1",
        cls0302: "NEsted iteM 2",
    }
}

log("NESTED OBJ method 2: ", nestedObj2.cls03);


 *
 *
 *
 *
 */
// Real examples
let carColors = {
    color1: "White",
    color2: "Black",
    color3: "Gray",
    color4: "Red",
};
let carModels = {
    model1: "Revo",
    model2: "CH-R",
    model3: "Corolla",
    model4: "S",
    model5: "C2000",
    model6: "X",
};
let carNames = {
    car1: "Toyota",
    car2: "Tesla",
    car3: "Honda",
    car4: "BMW",
    car5: "Mercedes",
};
let cars = {
    name: carNames,
    color: carColors,
    model: carModels,
};
// method 2 of nested modules
let carsMethod2 = {
    name: {
        car1: "Toyota",
        car2: "Tesla",
        car3: "Honda",
        car4: "BMW",
        car5: "KIA",
    },
    model: {
        model1: "Revo",
        model2: "CH-R",
        model3: "BRV",
        model4: "S",
        model5: "C2000",
        model6: "Sportage",
    },
    color: {
        color1: chalk.bgWhite.bold("White"),
        color2: chalk.bgBlue.bold("Blue"),
        color3: chalk.bgGray.bold("Gray"),
        color4: chalk.bgRed.bold("Red"),
    },
};
log("I have car: ", cars.name.car1);
log("Hey, I have ", carsMethod2.name.car5, " in ", carsMethod2.color.color2, " color ");
let shelfBook = {
    Author: {
        firstName: "Sumama",
        lastName: "Rahim",
    },
    Name: "Learn TS Programming",
    Publisher: {
        Name: "Sumahim Publishers",
    },
};
log("in my shelf I have book of", chalk.bgBlueBright(shelfBook.Name), "By", chalk.bgGreenBright(shelfBook.Author.firstName.toUpperCase(), shelfBook.Author.lastName.toUpperCase()));
// type declaration
let student;
student = {
    name: "Ali",
    age: 20,
    class: 13,
};
// the above is same as following
let student2 = {
    name: "Sumama",
    age: 19,
    class: 12,
};
// we can call obj as following methods
log(`Student ${student["name"]}, is ${student.age} Years old`);
log(`Student2 ${student2.name} is ${student2["age"]} Years old`);
let std = {
    name: "Ahmed",
    age: undefined,
};
let storeManager = {
    name: "Asad",
    areaCont: "IS-902-120",
    role: "Product Manager",
};
log(storeManager.name, " is controller of area ", storeManager.areaCont);
function studInfo(std) {
    std.firstName;
    std.age;
    std.gender;
}
function employeeInfo(emp) {
    emp.firstName, emp.age, emp.gender;
}
// =============================
// Nested Object
let addressObj = {
    HNo: 4,
    stNo: 15,
    city: "ISB",
    postCode: 46000,
};
let teacher = {
    name: "any Name",
    age: 50,
    gender: "M",
    //    address : addressObj
    address: {
        HNo: 4,
        stNo: 15,
        city: "ISB",
        postCode: 46000,
    },
};
console.log(teacher.address.postCode);
console.log(teacher["address"]["city"]);

// data types
/**
 * TypeScript can support some simple types (primitives) you may know.
 * There  are 3 main primitives in JS and JS
 * 1: Boolean
 * 2: Number -> whole numbers and float values
 * 3: String
 * There are also 2 less common primitives 
 * 1: bigint -> same as number type, but allows larger -/+ve num then number type
 * 2: symbol -> used to create a globally unique identifier
 * 
 * Type Assignment
 * There are 2 types
 * 1: Explicit -> writing out the types
 * Example:
 * let myName: string = "Somama"; 
 * 2: Implicit (also called "Infer") -> TypeScript will guess the data type, based on val
 * Example:
 * let myName - "Somama";
 * 
 * Error in Type Assignment
 * TypeScript will throw an error if type are not matched
 * Example:
 * let fName = "Amir";
 * fName = 324; // it shows error
 * 
 * */


console.log("---------------\nData Types\n---------------");
console.log("Boolean\n---------------");
let isPakNational = true;
let isAdult = false;
console.log(isPakNational,isAdult);



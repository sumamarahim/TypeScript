//==================================

// ENUM

// enum Color {
//   Red,
//   Green,
//   Blue,
// } //starts with 0
// var c: Color = Color.Green;

// //0  1      2
// enum matchResult {
//   win2 = "win",
//   lose = "lose",
//   draw = "draw",
// }

// let indScore = 200;
// let pakScore = 201;

// if (pakScore > indScore) {
//   console.log(`Pakistan ${matchResult["win"]}`);
// } else if (indScore > pakScore) {
//   console.log(`Pakistan ${matchResult.lose}`);
// } else {
//   console.log("Match" + matchResult.draw);
// }

// enum Color1 {
//   Red = 1,
//   Green,
//   Blue,
// }
// var colorName: string = Color1[2];
// // console.log(colorName);

// enum Color2 {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// } //can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

enum Color1 {
  Red,
  Green,
  Blue,
}
Color1[1];
const enum Color {
  Red,
  Green,
  Blue,
}

// Color[1]

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 3,
  purple = 2,
  skyBlue,
}

console.log("indexes of Color2 ", Color2[3]);

// =======================================================
// Self Coded
// =======================================================

// topics
// 1: enum
// 2: const enum
// 3: explicit casting

let myname = 2343;
//  if(typeof myname == "string"){
//      myname.length;
//  }

console.log("myname num as string", (myname as unknown as string).toLowerCase);

console.log(typeof myname);
console.log(typeof (myname as unknown) as string);

let num = "15";

num.length;

console.log("num: ", num);
console.log("Num length", num.length);

console.log(myname as unknown as string);
// let myname = 5555;
let newValue = myname.toString(); // "5555"  // type converstion

console.log("newValue typeof", typeof newValue);

console.log("Typeof myname is: ",typeof myname)
console.log("typeof myname after type conversion to string is: ", typeof (myname as unknown) as string);
console.log("typeof myname after casting to string is: ", typeof myname.toString);

let name1 = 54655;

console.log("Typeof name1: ", typeof name1);
name1.toString();
console.log("name1: ", name1);
console.log("Typeof name1 after casting", name1.toString);

// any and unknown difference

// any doesn't require type checking while unknown requires

// Casting


let a: unknown = 19;

// cast with as

console.log("number as string", (a as unknown as string).length);

// cast with <>, this type of casting is not working on TSX when
// working with react files

console.log(
  "cast using < >: this will not work in react files / TSX",
  (<string>a).length
);

let firstName: unknown = "Sumama";

console.log(typeof (firstName as unknown as number));

console.log(typeof (<string>firstName).length);

console.log(typeof (<any>firstName));

console.log(typeof (firstName as unknown as undefined));

console.log(typeof (<null>firstName));

//// Class 09 and 10 Assignment# 1
// arrays and methods

// push: adding index to the last
let push = [1, 2, 3];
console.log("Before push: ", push); // 1, 2, 3
push.push(4); // 1, 2, 3, 4

console.log("After push: ", push); // 1, 2, 3, 4

// pop: removing last index

let pop = [1, 2, 3];
console.log("Before pop: ", pop); // 1, 2, 3
pop.pop(); // 1, 2

console.log("After pop: ", pop); // 1, 2

// shift: removing first index
let shift = [1, 2, 3];
console.log("Before shift: ", shift); // 1, 2, 3

shift.shift(); // 2, 3
console.log("Afer shift: ", shift); // 2, 3

// unshift: adding to the first index
let unshift = [1, 2, 3, 4];
console.log("Before unshift: ", unshift);

unshift.unshift(0); // 0, 1, 2, 3, 4

console.log("After unshift: ", unshift);

// concat: adding string to the last index

let concat = ["a", "b", "c"];
console.log("Before concat", concat);

let concated = concat.concat("d"); // a, b, c, d
console.log("After concat: ", concated);

let concat1 = [1, 2, 3, 4];
let cont = concat1.concat(67);
console.log(cont);

// join: joins with anything to anything

let join = ["1", "2", "3", "4"];
console.log("Before join: ", join);

let joined = join.join("-");
console.log("Afer Join: ", joined);
console.log("After joining: ", join.join(" or "));

let join1 = [1, 2, 3, 4];
console.log("Before join1:  ", join1);

let joined1 = join1.join("-");
console.log("Afer Join1:  ", joined1);

const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); // Fire,Air,Water

console.log(elements.join("")); // FireAirWater

console.log(elements.join("-")); // Fire-Air-Water

console.log(elements.join(" or ")); // Fire-Air-Water

// slicing:

let slice = [1, 2, 3, 4];
console.log("Slice: ", slice);

console.log("Sliced after 3: ", slice.slice(3));
console.log("Sliced after 2: ", slice.slice(2));
console.log("Sliced after 1: ", slice.slice(1));
console.log("Sliced after 2,3: ", slice.slice(2, 3)); // start, end
console.log("Sliced after 1,3: ", slice.slice(1, 3)); // start, end

let slicing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Before slicing: ", slicing);

let sliced = slicing.slice(2, 5);
console.log("After slicing 2, 5: ", sliced);

let sliced2 = slicing.slice(2) && slicing.slice(5, 8).slice(2, 6);

console.log("After slicing 2: ", sliced2);

// slicing of string/char

let charSlice: string[] = ["a", "b", "c", "d", "e", "f", "g"];
console.log("before slicing: ", charSlice);

console.log('After slicing "c": ', charSlice.slice());

// ========================================================

// indexOf: to find index of element

let indexOf = [1, 2, 3, 4, 5, 6, 7];
console.log("IndexOf 4 is: ", indexOf.indexOf(4));

let char = ["a", "b", "c", "d"];
console.log('IndexOf "b" is: ', char.indexOf("b"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// includes: to find if particular elemet exist or not in array

console.log('let\'s find "c" is exist or not: ', char.includes("c"));
console.log('let\'s find "a" is exist or not: ', char.includes("a"));
console.log('let\'s find "y" is exist or not: ', char.includes("y"));

// ========================================
// every: it tells us that are all the elements true for specified condition

let Arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Array having 1 to 8", Arr);
console.log(
  "are all elements less than 10: ",
  Arr.every((x) => x < 10)
);
console.log(
  "are all elements greater than 0: ",
  Arr.every((x) => x > 0)
);
console.log(
  "are ",
  Arr.every((Arr) => Arr)
);
console.log(
  "are all elements less then 0: ",
  Arr.every((b) => b < 0)
);

// ========================================
// some: finding if some elements falls under specific/defined condition

console.log(
  "Checking for elements if some of them are below 5: ",
  Arr.some((x) => x < 5)
);
console.log(
  "Checking for elements if some of them are above 5: ",
  Arr.some((x) => x > 5)
);
console.log(
  "Checking for elements if some of them are below 0: ",
  Arr.some((x) => x < 0)
);
console.log(
  "Checking for elements if some of them are above 10: ",
  Arr.some((x) => x > 10)
);

// ==========================================
// at:

let arr1 = [1, 2, 3, 4, 5, 6, 7];

console.log("finding ", arr1.at(-2));

// ========================================
// reverse
console.log("Reversing of elements: ", arr1.reverse());
let arrNum = [1, 23, 46, 5, 7, 9, 12, 57, 86, 87, 99, 101];
console.log("Arranging in Descending order: ", arrNum.reverse());

let arr2 = ["a", "b", "c", "d"];
console.log("Reversing of elements: ", arr2.reverse());

let arr3 = ["a", "b", "c", "d", "p", "q", "r", "s", "x", "y", "z"];
console.log("Arranging: Reversing of elements: ", arr3.reverse());

let arr4 = [
  "a",
  "b",
  "c",
  "d",
  "p",
  "q",
  "r",
  "s",
  "x",
  "y",
  "z",
  1,
  23,
  46,
  5,
  7,
  9,
  12,
  57,
  86,
  87,
  99,
  101,
];
console.log("Let me arrange alphaNumeric elements: ", arr4.reverse());
// =========================================
// filter: filtering elements

let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  "Finding all even num: ",
  arr11.filter((y) => y % 2 == 0)
);

console.log(
  "Finding all odd num: ",
  arr11.filter((y) => y % 2 == 1)
);

// =================================================
// find: returns first element if condition met

let findArr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
  "first number before 4 in array is: ",
  findArr.find((x) => (x < 4 ? "good" : "bad"))
);

console.log(
  "first number after 4 is: ",
  findArr.find((x) => x > 4)
);

console.log(
  "first even number in array is: ",
  findArr.find((x) => x % 2 == 0)
);

console.log(
  "first even number in array is: ",
  findArr.find((x) => x % 2 == 1)
);

let findArr1 = [3, 4, 6, 7, 9];
console.log(
  "first even number in array[3, 4, 6, 7, 9] is: ",
  findArr1.find((y) => y % 2 == 0)
);

// ============================

// reduce: used to apply for a function against two values to reduce and make it one value

let newArr = [1, 2, 5, 3, 7, 8];

console.log(
  "reduce method [1, 2, 5, 3, 7, 8] adds all",
  newArr.reduce((x, y) => x + y)
);

console.log(
  "reduce method [1, 2, 5, 3, 7, 8] minus all",
  newArr.reduce((x, y) => x - y)
);

console.log(
  "reduce method [1, 2, 5, 3, 7, 8] mul all",
  newArr.reduce((x, y) => x * y)
);

console.log(
  "reduce method [1, 2, 5, 3, 7, 8] div all",
  newArr.reduce((x, y) => x / y)
);

// etc

////////////////////////////////

// map

let mapArr = [3, 4, 6, 8, 9];
console.log(
  "map method to multiply all elements with any number, let say 3:",
  mapArr.map((x) => x * 3)
);

console.log(
  "add 2 to all ele:",
  mapArr.map((x) => x + 2)
);

console.log(
  "div with 2 of all ele:",
  mapArr.map((x) => x / 2)
);

console.log(
  "mul with 2 of all ele:",
  mapArr.map((x) => x * 2)
);
// etc

////////////////////////////////////////////

// findIndex

let findInd = [2, 3, 6, 7, 9];
let findInd1 = [2, 4, 3, 5];
console.log(
  "findIndex: ",
  findInd1.findIndex((x) => x % 2 !== 0)
);

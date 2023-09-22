"use strict";
// function task01(task3: () => void){
//     console.log("do Task 01");
//     task3();
// }
// function task02(){
//     console.log("do Task 02");
// }
// function task03(): any{
//     console.log("do Task 03");
// }
// let task4: any = setTimeout( () => {
//     function task04(): any{
//         console.log("do Task 04");
//     }
//     task04();
// }, 1000
// )
// task01(task03()); // passing task03 as a parameter of task01
// task01(task4); // passing task03 as a parameter of task01
// **************************************************
// function task1(anyfunction: any) {
//     console.log("1: 1 do something");
//     anyfunction("2: 3 passing values to callback");
// }
// task1(function secondtask(text: string) {
//     console.log("3: 2 callback function.. ", text);
// })
// function t1(t2: any){
//     console.log("t1");
//     t2;
// }
// function t2(t1: any){
//     console.log("t2");
//     t1;
// }
// t1(t2("2t"));
// t2(t1("1t"));
// t2(
//     t1(
//         t2("2t")
//     )
// )
// t2(
//     function t1(t2: any){
//         console.log("t1");
//         t2;
//     }
// )
// ***********************************************************
// function task1a(task2aCalled: any) {
//     console.log("0: do something else :3"); // run3
//     task2aCalled("1: task2aCalled variable text");
// }
// function task2a(task1aCalled: any) {
//     console.log("2: do callback :1", task1aCalled); // run1 , run2
//     task1aCalled;
// }
// task1a(task2a("3: task1aCalled variable text :2")); // run2  stores in task1aCalled
// ***************************************************************
// function myDisplayer(some: any) {
//     console.log(some);
//   }
// function myFirst() {
//     myDisplayer("Hello");
//   }
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   myFirst();
//   mySecond();
//   function myCalculator(num1:number, num2:number) {
//     let sum = num1 + num2;
//     return sum;
//   }
//   let result = myCalculator(5, 5);
//   myDisplayer(result); 
function myDisplayer(anyfunc) {
    console.log(anyfunc);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
setTimeout(function () {
    myCalculator(5, 5, myDisplayer);
}, 10);
function carMaintenance() {
    console.log("I leave my car at 9 in workshop");
    setTimeout(() => {
        console.log("Car is fixed...");
        return "Your car is ready";
    }, 2000);
}
function pickDress() {
    setTimeout(() => {
        return "Your Dress is ready";
    }, 100);
}
let mechanicResponse = carMaintenance();
console.log("mechanicResponse... ", mechanicResponse);
setTimeout(() => {
    console.log("Do grocery");
}, 0);
let laundryResponse = pickDress();
console.log("laundryResponse ...", laundryResponse);
setTimeout(() => {
    console.log("Attend Event");
}, 2000);

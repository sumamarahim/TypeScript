// Class Tasks
// 1: Find even numbers in an Array -> DONE
// 2: Find odd numbers in an Array -> DONE
// 3: Find sum of Array Element -> DONE
// 4: Find Maximum Number in an Array -> DONE with the help of internet somehow
// 5: Filter Positive numbers from an Array and their Sum -> DONE
// 6: Filter Negative numbers from an array and their Sum -> DONE
// Used TOPICS
// 1: Functions
// 2: For Loop
// 3: If Else IF statements
// 4:
var arr1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 20, 16, 15, 17, -18];
// Find even numbers
function evenNumber() {
    console.log("Even Numbers are: ");
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 0) {
            console.log(arr1[i]);
        }
    }
}
// find odd number in array
function oddNum() {
    console.log("Odd numbers are: ");
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 == 1) {
            console.log(arr1[i]);
        }
    }
}
// find sum of  array's elements
function sumOfArrayElements() {
    var sumOfArrEle = 0;
    for (var i = 0; i < arr1.length; i++) {
        // let arrayElements = arr1[i];
        //let sumOfArrEle = arr1[i]
        sumOfArrEle = sumOfArrEle + arr1[i];
    }
    console.log("Sum of elements are: ".concat(sumOfArrEle));
}
// filter positive numbers in an array and find their sum
function positiveNumAndSum() {
    var sumPosEle = 0;
    console.log("Positive numbers are: ");
    for (var i = 0; i < arr1.length; i++) {
        // finding positive number
        if (arr1[i] > 0) {
            sumPosEle += arr1[i];
            console.log(arr1[i]);
        }
    }
    console.log("Sum of Positive elements are: ".concat(sumPosEle));
}
// filter negative nums and find their sum
function negativeNumAndSum() {
    console.log("Negative numbers are: ");
    var sumNegEle = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            sumNegEle += arr1[i];
            console.log(arr1[i]);
        }
    }
    console.log("Sum of negative elements are: ", sumNegEle);
}
// Finding max number in array
function maxNum() {
    // with help of internet
    // iterative approach
    var maxNumber = arr1[0];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > maxNumber) {
            maxNumber = arr1[i];
        }
    }
    console.log("Max num is: ", maxNumber);
}
// SAME for finding Min number in an array
// Finding max number in array
function minNum() {
    // with help of internet
    // iterative approach
    var maxNumber = arr1[0];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] < maxNumber) {
            maxNumber = arr1[i];
        }
    }
    console.log("Min num is: ", maxNumber);
}
console.log(evenNumber());
console.log(oddNum());
console.log(sumOfArrayElements());
console.log(positiveNumAndSum());
console.log(negativeNumAndSum());
console.log(maxNum());
console.log(minNum());

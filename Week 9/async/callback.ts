setTimeout(() => {
    console.log('first but runs lastly');
}, 3000)

setTimeout(() => {
    console.log('2nd and runs secondly');
}, 300)

setTimeout(() => {
    console.log('last but runs first');
}, 100);

const timeOut = () => {
    console.log('last but runs first it\' stored in variablet');
}
setTimeout(timeOut,10);



function myCallBackFunc(text: string){
    console.log('inside myCallBackFunc', text);
}

function myCallingFunction(startText: string, callBack: (text: string) => void){
    callBack(startText);
}

myCallingFunction('Hello', myCallBackFunc);


// function func1 (text: string){
//     console.log('function 1', text);
// }

// function func2 (text: string){
//     console.log('function 2', text);
// }

// function func1and2 (){
//     console.log('function 1'+ func1 + 'func2' + func2);
// }

// console.log('call: ', func1("func1"));
// console.log('func1and2', func1and2);


setTimeout(function() {
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10000; ++i) {
    doSomeStuff();
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}


let timer = setInterval(function(counter) {
    console.log('I am an asynchronous message');

    counter += 1;

    // if (counter >= 5) {
    //     clearInterval(timer);
    // }

    
    if (counter <= 5) {
        clearInterval(timer);
    }
}, 1000);
console.log('timer: ', setInterval);


console.log('I am a synchronous message');
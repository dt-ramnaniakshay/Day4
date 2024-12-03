/*

jS normal js
ES5 version of JS 
Ecma Script JS 2012 

2015 JS ES6 heavily in the market
->you can use ES5 functions
-> hoisting let , var , const keyword 
-> template literals
-> arrow function
-> rest and spread operator
-> promise 
-> fetch () API handling part
-> map , filter and reduce function

*/

var myName = "Akshay"
var myAge = 90
var myNativePlace = "Anand"
var myNation = "India"

// backtiq sign can be found between esc and tab key of your keyboard
console.log(`My name is ${myName} \n My age is ${myAge}
    \n my native place is ${myNativePlace}
    \n my nation is ${myNation}
    `);

    //arrow function normal function with some advance syntax

function addTwo(a,b){
    return a+b
}

const addition = (a,b) => a+b

console.log("-------------------------------------");
console.log(addTwo(9,9));
console.log(addition(9,4));


const subtraction = (a,b) => {
    //here you are writing whole code
    return a-b
    //a-b
}
// annoymus function

console.log(subtraction(5,5));

const ComplexOutput = function(a,b){
    return a*b
}

console.log(ComplexOutput(5,5));

/*
 Exception handling : an exception occurs which at run time

try catch block => handle errors garcefully

//zero division error, input type error , array index out of range
//mongoDB string => connection string @ username and password incorrect
=> you dont have enough permission



www.ramnaniakshay.com

cant reach to page or some error screen would be shown


*/

// if you divide any number with zero answer is infinte

/* function divide(a,b){
    try {
        if (b==0){
            throw new Error ('can not divide by zero')
        }
        var result = a/b;
        console.log("REsult is ", result);
        
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

divide(10,8)
divide(10,0) */

//i want to make an exception on driving license eligibilty
// Exception: if person's age is 16 and 17 then they should eligible for gearless licence
// those who are above 18 and above are allowed to have normal licence
// below 16 are not eligible for licence

// finally block => which will execute everytime we are running code

// file operation you want to close that file , database connection

try {
    let add = 10 +10 ;
    console.log("addition is ",add);

    let myName = Akshay
    console.log(myName);
    
} catch (error) {
    console.log("An error has occured", error.message);
} finally{
    console.log("this block will execute no matter what happens");
}

//apis with db connections
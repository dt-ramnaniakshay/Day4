/*
promise will be useful if you want to async code

Promise => pending ,resolve , rejected


chaining

*/

// you will not create promise 
// you will be consuming the promise

/* 
Syntax of promise
let customPromise = new Promise(function(resolve,reject){

    if(){
        resolve(value);
    }else {
        reject(error);
    }

})
*/

// we have created promise

let fetchData = new Promise((resolve,reject)=> {

        let dataAviailable = false;
        if(dataAviailable){
            resolve("data fetched successfully")
        }else{
            reject("data not found")
        }
})

//use the promise

fetchData
.then( (msg) => {
    console.log("Success", msg);   
})
.catch( (error) => console.log("ERROR: ", error))

//api fetching works with promise
// you can handle apis (filter, map and reduce)



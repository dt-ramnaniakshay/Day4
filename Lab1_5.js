/*
filter => this method allows you to print array items with specific condition
map => this method allows you to print array items to add any logic on item
reduce => useful in array if you want to do all sum or you want to calculate some total

*/

const myNums = [4,7,8,34,90,87,60,34,17,82]

// goal : to print numbers which are above 50

/* 
for(let i =0; i<myNums.length; i++){
    if(myNums[i] > 50 ){
        console.log(myNums[i]);
    }
}
*/

var output = myNums.filter( (num) => num> 50 )

console.log(output);

console.log("----------------------------------------------");

const books = [
    {
        title: 'Rich dad poor dad',
        genere: 'finance',
        publish: 1990,
        edition: 2005,
        author: 'author1'
    },
    {
        title: '7 habits',
        genere: 'development',
        publish: 1995,
        edition: 2015,
        author: 'author2'
    },
    {
        title: 'Bhawadgita',
        genere: 'history',
        publish: 1985,
        edition: 2000,
        author: 'author2'
    },
    {
        title: 'Rich dad poor dad',
        genere: 'finance',
        publish: 1999,
        edition: 2007,
        author: 'author2'
    },
    {
        title: '7 habits',
        genere: 'development',
        publish: 2005,
        edition: 2019,
        author: 'author3'
    },
    {
        title: 'Bhawadgita',
        genere: 'history',
        publish: 1985,
        edition: 2000,
        author: 'author4'
    }
]

//filter to one field
let userbooks = books.filter( (book) => book.edition> 2000 )

let customFields = books.filter( (book) => {
    return book.genere =='finance' && book.publish>1990 
})


console.log(customFields);
console.log("----------------------------------------------");

console.log(userbooks);

/*

I want you guys to create multi objects within [] for product p_name, p_qty, p_price, p_gst

there should be at least 6 items and based on that 
->you need to print product whose amount is greater than 100
-> whose GST amount is > 5 and p_qty is less than 5 that you need to print it

*/

//map: to iterate through elements of array

const myMarks = [60,80,90,34,56,90,2]

// one question we want to provide gracing of 2 marks each student

let updatedMarks = myMarks.map( (mark) => mark + 2 )
console.log("----------------------------------------------");

console.log(updatedMarks);

console.log("----------------------------------------------");
// goal is to put up ,multiple map function

updatedMarks = myMarks.map( (mark) => mark + 2 ).map( (mark) => mark - 1)

console.log(updatedMarks);

console.log("----------------------------------------------");
//reduce function

let myNum= [1,2,3,4]

const myTotal = myNum.reduce( function (acc, curvalue){
    console.log(" accumalator value ",acc," current value",acc);
    return acc+curvalue
},0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'JS course',
        price: 3000
    },
    {
        itemName: 'Java course',
        price: 6000
    },
    {
        itemName: 'Python course',
        price: 2000
    },
    {
        itemName: 'React JS course',
        price: 3500
    }
]

var result = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(result);

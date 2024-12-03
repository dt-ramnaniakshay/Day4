/*

promise => resolve , reject

// handling APIs

fetch => useful if you want to access some API content


*/

const api_url =  "https://randomuser.me/api/?results=5"

fetch(api_url)
.then( response => response.json())
.then( data => {
    const users = data.results;
    //console.log(users);
    const userDetails = users.map( user => {
        return `Name: ${user.name.first} ${user.name.last}
        Email : ${user.email}`
    })
    console.log(userDetails);
})
.catch( (err) => console.log("error in fteching data ", err))

// username, date and city of 3 user's details
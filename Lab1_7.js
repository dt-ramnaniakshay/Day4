/*
async , await: keywords which helps you to run your api response in async manner
*/

const API_URL = "https://randomuser.me/api/?results=5"
//function a  => 0.5
// function b => 0.6
//function c => 0.6
// function fetchuser =>2 second

async function fetchUser(){

    try{

    const response = await fetch(API_URL)
    const data = await response.json()
    const users = data.results;

    const userDetails = users.map( (user) => {
        return `Name: ${user.name.first} ${user.name.last}`
    })

    console.log(userDetails);
}
catch(error){
    console.log("error n fetching data: ", error);
}

}

fetchUser()
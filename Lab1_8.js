/*

rest operator is used for collecting elements ( array)

spread operator can be used if you want to expand elements (array)


*/

//array

const frontend_course = ["HTML","CSS", "Bootstrap"]

const backend_course= ["node.js","python","java"]

const fullstack = [...frontend_course,...backend_course]

console.log(fullstack);

//object

const user = {
    name: 'akshay',
    dob: "27/10/90",
    email: "demo@demo.com"
}

const rolebasedUser = {...user,role: 'normaluser'}

console.log(rolebasedUser);

//rest operator

const myUser = {
    id: 1,
    username : 'aks',
    email: 'nomail2nomail.com',
    password: 'Admin@123'
}

const {id, username, ...otherdetails} = myUser;

console.log(id,username);
console.log(otherdetails);




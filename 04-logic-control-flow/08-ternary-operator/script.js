const age = 14;

// Using an if statement

if (age>=18) {
    console.log('You can use Chrome');
}else{
    console.log('You can not use Chrome');
}

// Using a ternary oprator

age>=18 ? console.log('You can Vote') : console.log('You can no Vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple statements

const auth = true;
// let redirect;

// if(auth) {
//     alert('Wellcome to the dashboard');
//     redirect = '/dashboard';
// }else {
//     alert('Access Denied');
//     redirect = '/login'
// }

// const redirect = auth ? (alert('Welcome to the dashboard'),'/dashboard') : (alert('Access Denied'),'/login');

// console.log(redirect);

// auth ? console.log('Welocome to the dashboard'): null;

auth && console.log('Welcome to dashboard');
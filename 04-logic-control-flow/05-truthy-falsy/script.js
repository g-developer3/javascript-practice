const email = 'test@test.com';

if (email) {
    console.log('You passed in an email');
}
console.log(Boolean(email));

// Falsy values:

// false
// 0
// "" or '' (empty string)
// null
// undefinded
// NaN


// Truthy values:
// Everything else that is not falsy
// true
// '0' 0 is a string
// ' ' space is a string
// 'false' false is a string
// [] empty array 
// {} empty object
// function (){} empty function

const x = ' ';

if (x) {
console.log('This is truthy');
}else{
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and Falsy caveats

const children = 3;

if (!isNaN(children)/*children !== undefined*/) {
console.log(`You have ${children} children`);
}else{
    console.log('please enter correct answer');
}

// Checking for empty arrays

const posts = [];

if (posts.length>0) {
console.log('list posts');
}else{
    console.log('No posts');
}

// Checking for empty objects

const user = {
    name:'Simon bao'
};

if (Object.keys(user).length>0) {
    console.log('list user');
}else {
    console.log('no list user');
}

// Loose Equality(==)



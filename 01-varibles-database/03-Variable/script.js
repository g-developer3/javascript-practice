// Declare Variable in javascript

// var,let,const

let $ = 'Gopal';
let _ = 'patel';

console.log(`${$} ${_} `);
console.log($+' '+_ );
console.log($, _);
let age = 30;
console.log(age);

// In naming conversion we can use only
// letter, numbers, underscore, doller sign
// we can't start with a number

// multi-word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = pascalCase
// firstname = lowercase

// Reassign variable
age = 35;

console.log(age);

let score = 1;

console.log(score);

if (true) {
    score = score+1;
}

console.log(score);

const arr = ['simon', 'bairan','j-malan'];

console.log(arr);
arr.push('helen');
console.log(arr);
console.log(arr[3]);

const friends = {
    name1: 'simon',
    name2: 'bairan',
    name3: 'j-malan'
}
console.log(friends);
friends.name4 = 'harry';
console.log(friends);
console.log(friends.name3);

// declare multiple value at once

let a,b,c;
const d=10,e=12,f=69;

console.log(d);

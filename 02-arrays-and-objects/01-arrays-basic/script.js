// Array Literal
const numbers = [12,24,33,29,39];

// console.log(numbers);

// Array Constructor

const fruits = new Array('apple','grapes','orange');
let x;
console.log(fruits);

x = numbers[0];

x = numbers[0] + numbers[3];
console.log(x);

x = `My Favorite fruit is ${fruits[1]}.`;


console.log(x);

const mixed = [12,'hello',true,null];
 
x = numbers.length;

fruits[3]='strabarry';
fruits[fruits.length] = 'bluebarry';
fruits[fruits.length] = 'peach';

fruits[2] = 'pear';
console.log(fruits);
fruits.length = 2;
console.log(fruits);
console.log(x);
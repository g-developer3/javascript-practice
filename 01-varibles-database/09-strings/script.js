// inishlitation
let x;

const name= 'Simon';
const age = 24;

x = 'hello, my name is ' + name +' '+ 'and I am ' + age +' '+'year old collage student.';

// Template Literals
x = `hello, my name is ${name} and I am ${age} year old collage student.`;

x =`It's me ${name}, age is ${age}.`;

// console.log(x);

// String Properties and Methods

const s =new String('hello world');

// Access value by key
x = s.length;
x = s[0];
x = s.__proto__;
x = s.toUpperCase();
x = s.charAt(0);
x = s.indexOf('w');
x = s.substring(2);
x = s.substring(2,6);
x = s.slice(0,5);
x = '    hello world';
x = x.trim();
x = s.replace('world','Gopal');
x = s.includes('world');
x = s.valueOf();
x = s.split(' ');

console.log(x);
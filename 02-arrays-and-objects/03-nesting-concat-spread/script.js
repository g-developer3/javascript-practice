let x;

const fruits = ['apple','pear','orange'];

const barries = ['straberry','bluebarry','resberry'];

// fruits.push(barries);
// console.log(fruits);
// x = fruits[3][1];

// console.log(x);
const allfruits = [fruits,barries];
x = allfruits[1][0];
// console.log(x);
x = allfruits[0][2];
// console.log(x);
// console.log(allfruits);
x = fruits.concat(barries);
// console.log(x);

// Spread oprator(...)
x = [...fruits,...barries];

// console.log(x);

//Flatten Arrays
const arr = [1,2,[3,4],5,[6,7],8];

x = arr.flat();

// console.log(x);

// Static method on Array object

x = Array.isArray(fruits);
x = Array.from('12345');
// console.log(x);

const a = 1;
const b = 2;
const c = 3;
const d = 4;

x = Array.of(a,b,c,d);

console.log(x);
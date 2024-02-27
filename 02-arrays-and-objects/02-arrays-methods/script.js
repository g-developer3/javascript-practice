let x;
const arr = [34,55,95,20,15];

arr.push(100);
// console.log(arr);
arr.pop();
// console.log(arr);
arr.unshift(99);
// console.log(arr);
arr.shift(99);
// console.log(arr);
arr.reverse();
// console.log(arr);
x = arr.includes(20);
// console.log(x);
x = arr.indexOf(15);
// console.log(x);
x = arr.slice(1,4);
// console.log(x);
x = arr.splice(1,4)
// console.log(x);
let arre = [34,55,95,20,15];
// console.log(arre);
x = arre.splice(3,1);
// console.log(x);
console.log(arre);
console.log(typeof x);
console.log(x);
arre[2] = 'hello';
console.log(arre);
x = arre.splice(1,4).reverse().toString();
console.log(x);


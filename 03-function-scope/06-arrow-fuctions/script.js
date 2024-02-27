/*function add(a,b) {
    return a+b;
}*/

// Arrow function syntex
const add = (a,b)=> {
    return a+b;
};
// Arrow function shortcut / Implicit return
let subtract = (a,b) => a-b;
// Can leave off () with a single param
const double =a=>a*2;

//Returning an Object
const creatObj = () => ({
    name:'bard',
});

const numbers = [1,2,3,4,5];

numbers.forEach(function(n){
    // console.log(n);
});
// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(double(12));
console.log(add(1,2));
console.log(subtract(10,5));
console.log(creatObj());

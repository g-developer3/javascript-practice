// Chanllange 1
const arr = [1,2,3,4,5];
arr.push(6);
// console.log(arr);
arr.unshift(0);
// console.log(arr);
arr.reverse();
// console.log(arr);

// Challange 2
let x;
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
let arr3;
//Spread method
arr4 = [...arr1, ...arr2];
arr4.splice(5,1);
// console.log(arr4);
// slice method
arr3 = arr1.slice(0,4).concat(arr2);
// console.log(arr3);
//splice method
arr3 = arr1.splice(4,1);
arr3 = arr1.concat(arr2);
console.log(arr3);
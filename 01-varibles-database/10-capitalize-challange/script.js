// 1. Convert this variable first letter to toUpperCase;

const myString = 'developer';


// solution 1;
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// soluition 2;

myNewString;
myNewString = myNewString.toUpperCase();
my = myString.substring(1);
my = myString.slice(1);
myNewString = myNewString+my;

// solution 3;

myNewString = myString[0].toUpperCase() + myString.slice(1);

// solution 4;

myNewString =`${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
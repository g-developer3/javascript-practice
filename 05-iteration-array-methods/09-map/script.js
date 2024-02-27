const numbers = [1,2,3,4,5,6,7,8,9,10];

const dblnmbr = numbers.map((number)=>'Number'+number);

// console.log(dblnmbr);

// Same with forEach
let x = [];
numbers.forEach(number=>{
x.push('Number'+number);
});

// console.log(x);

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end:2004},
    { name: 'Company Two', category: 'Retail', start: 1992, end:2008},
    { name: 'Company Three', category: 'Auto', start: 1999, end:2007},
    { name: 'Company Four', category: 'Retail', start: 1989, end:2010},
    { name: 'Company Five', category: 'Technology', start: 2009, end:2014},
    { name: 'Company Six', category: 'Finance', start: 1987, end:2010},
    { name: 'Company Seven', category: 'Auto', start: 1986, end:1996},
    { name: 'Company Eight', category: 'Technology', start: 2011, end:2016},
    { name: 'Company Nine', category: 'Retail', start: 1981, end:1989},
];

// Create an array of company names


const companyName = companies.map(company=>company.name);

// console.log(companyName);

// Create an array with just company and category
const CompanyCatagory = companies.map(number=>{return {name:number.name,
category: number.category
}});

// console.log(CompanyCatagory);

// Create an array of the length of each company in years 

const CompanyLength = companies.map(company=>
{ return {
    Name: company.name,
    Years:company.end-company.start 
}});

// console.log(CompanyLength);

// Chain map methods
const squareAndDouble = numbers.map(number=>Math.sqrt(number)).map(sqrt=>sqrt*6);
// console.log(squareAndDouble);

const numberToFindRoot = 9;
const iterations = 5;
const initialGuess = 5;
function squareRootApproximation(x,initialGuess, iterations) {
    let guess = initialGuess;
    for (let i = 0; i<iterations; i++){
        guess = (guess + x / guess) / 2;
    }
    return guess;
}


const approximateRoot = squareRootApproximation(numberToFindRoot, initialGuess, iterations);
// console.log(approximateRoot);

const dlnnumber = numbers.map(number=>number*2);

// console.log(dlnnumber);

// Chaining diffrent method

const evenDouble = numbers.filter(number=>number%2===0).map(nuber=>nuber*2)
console.log(evenDouble);
const arr = [1,2,3,4,5,6,7,8,9,10];

let evenNumber = arr.filter(number=> number % 2 === 0);
console.log(evenNumber);

// Same with forEach
/*
const x = [];
arr.forEach(function(number) {
if(number % 2 === 0){
x.push(number);
}
});

console.log(x);
*/

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

// Get only Retail companys
const retailCompany = companies.filter((Company)=>Company.category === 'Retail');
// console.log(retailCompany);

// Get companies that started in or after 1980 and ended in or before 2005

const startend = companies.filter(str=>str.start>= 1981 && str.end <= 2005);

// console.log(startend);

// Get companies that lasted 10 years or more
const avg = companies.filter(avrg=>avrg.end-avrg.start>=10);

console.log(avg);


// Same with forEach 
let companyarr = [];
companies.forEach((Company)=>{
if (Company.category ==='Retail') {
    companyarr.push(Company.name)
}
    }
);
// console.log(companyarr);
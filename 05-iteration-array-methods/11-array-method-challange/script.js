// Challange 1

const people = [
    {
        firstName: 'John',
        lastName:'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age:30
    },
    {
        firstName: 'Jane',
        lastName:'Poe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age:25
    },
    {
        firstName: 'Bob',
        lastName:'Foe',
        email: 'bob@gmail.com',
        phone: '333-333-3333',
        age:45
    },
    {
        firstName: 'Sara',
        lastName:'Soe',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age:19
    },
    {
        firstName: 'Jose',
        lastName:'Koe',
        email: 'jose@gmail.com',
        phone: '555-555-5555',
        age:23
    }
];
// 25 first and last name in object
/*
[
    {name:'Jane Poe', email:'jane@gmail.com'},
    {name:'Sara Soe', email:'sara@gmail.com'},
    {name:'Jose Koe', email:'jose@gmail.com'},
]*/


// forEach method
let youngPeople = [];
people.forEach((age)=>{
    if (age.age<=25){
 youngPeople.push({
   Name: `${age.firstName} ${age.lastName}`,
   email: age.email
})}});
console.log(youngPeople);

// filter and map Arrays 

const youngPeople1 = people.filter(age=>age.age<= 25).map(person=>{
    return{
        name:`${person.firstName} ${person.lastName}`,
        email:person.email
    }});

console.log(youngPeople1);


const eh = people.filter(per=>
per.age <= 25).map(person=>{
    return {
        Name:`${person.firstName} ${person.lastName}`,
        email: person.email
    }});

console.log(eh);


// Challange 2

const numbers = [2,-30,50,20,-12,-9,7];

// 79

const positiveSum = numbers.filter(number=>number >0).reduce((acc,cur)=>{ return acc+cur},0);

console.log(positiveSum);

// Challange 3

const words = ['coder', 'programmer','developer'];
// ['Coder', 'Programmer', 'Developer'];
 
const capitalizedWords = words.map((helen)=>{ return helen[0].toUpperCase() + helen.substring(1)});
    
console.log(capitalizedWords); 

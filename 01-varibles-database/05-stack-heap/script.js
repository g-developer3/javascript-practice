// We have a two type data value 
// 1.stack 
// 2.heap

// These values are store in the Stack
const name = 'Brian';
const age = 30;

// Reference value are store in the heap
const person = {
    name:'Simon',
    age:20
}

let newName = name;
newName = 'Brian bao';

let newperson = person;
newperson.name = 'Jalandar';

console.log(name,newName);
console.log(person,newperson);

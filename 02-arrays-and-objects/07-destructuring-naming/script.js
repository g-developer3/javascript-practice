const firstName = 'Simon';
const lastName = 'Bao';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

person.age = 25;
// console.log(person.age);       
// Desturecturing

const todo = {
    id: 1,
    title: 'take out trash',
    user:{
        name:'john'
    }
};

const { id: todoid,title,user: { name }} = todo;

// console.log(todoid);

// Destructring Arrays

const numbers = [23,67,33,49];

const [first,second, ...rest] = numbers;

console.log(first,second, rest); 
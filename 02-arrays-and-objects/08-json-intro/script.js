const person = {
    name:'simon',
    lastName:'bao',
    age:25,
    aim:'computer science'

};

let x;
// convert to JSON string
x = JSON.stringify(person);

// convert string to object
x = JSON.parse(x);

const betch1 = [
    {
        name:'simon',
        lastName:'bao',
        age:25,
        aim:'computer science'
    
    },
    {
        name:'simon1',
        lastName:'teraki',
        age:25,
        aim:'computer science'
    
    }
];

const str1 = JSON.stringify(betch1);
console.log(str1);



console.log(x);
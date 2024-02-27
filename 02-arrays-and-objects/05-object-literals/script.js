let x;

const person = {
    name: 'Simon',
    age: 25,
    isAdmin: true,
    adress:{
        street:'123 main st',
        city: 'Hyedrabad',
        state: 'Telangana'
    } ,
    hobbies: ['reading','learning','writing','laughing']
};

x = person.name;
x = person['age'];
x = person.adress.city;
x = person.hobbies[3];

person.name= 'Siman Bao';
person.age= 30;
person.isAdmin=false;
person.adress.street= '3301 circle st';
person.adress.city= 'bangalore';
person.adress.state= 'Karnataka';
person.hobbies[0]= 'drinking';
person.hobbies[1]= 'dancing';
person.hobbies[2]= 'watching';
person['hobbies'][4]='criying';

// delete key and value
delete person.adress;

// create object key and value
person.hasChildren = true;

person.greet = function () {
    console.log(`hello, my name is ${this.name}`);
};

person.greet();

const person1 = {
    'first name': 'simon',
    'last name' : 'bao'
};


x = person1["first name"];

console.log(x);
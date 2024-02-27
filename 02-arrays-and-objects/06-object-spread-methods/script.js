let x;

const todo =new Object();

todo.id = 1;
todo.name = 'buy Milk';
todo.completed = false;

x = todo

const person = {
    address: {
        coodrs:{
            lat:42.3984,
            lng: -71.3232
        }
    }
}

x = person.address.coodrs.lat;

const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
// spread method 1
const obj3 = {...obj1,...obj2};
// console.log(obj3);

// spread method 2
const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);
const todos = [
    {id:1,name:'buy milk'},
    {id:2,name:'pickup kids from school'},
    {id:3,name:'take out trash'},
]
x = obj3;
x = obj4;
x = todos[0].name;
x = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
// console.log(x);
x = todo.hasOwnProperty('age');

console.log(x);
//Loop through arrays
const items = ['book','table','chair','kite'];
const users = [
    {name:'Brad'},
    {name:'Simon'},
    {name:'Malan'}
];
/*
for (let i=0; i<items.length; i++){
console.log(items[i]);
}
*/

// Of loop
/*
for (const item of items){
    console.log(item);
    }
*/
/*
for (const user of users) {
    console.log(user.name);
}
*/
// Loop over string

const str = 'hello World';
/*
for (const letter of str) {
console.log(letter);
};
*/
// Loop over Maps
const map = new Map();
map.set('name','John');
map.set('age','30');

for (const [key,value] of map) {
console.log(key,value);
}
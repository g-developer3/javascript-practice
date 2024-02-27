// chanllange 1
const library = [
{title:'book1',auther:'auther1',status:{own:true, reading:false,read:false}},
{title:'book2',auther:'auther2',status:{own:true, reading:false,read:false}},
{title:'book3',auther:'auther3',status:{own:true, reading:false,read:false}}
];

// chanllange 2

library[0].status.read= true;
library[1].status.read= true;
library[2].status.read= true;
// console.log(x);
// console.log(library);

// challange 3

const { title: firstBook }= library[0];

// console.log(firstBook);
// console.log(library);

//challange 4
x = JSON.stringify(library);
console.log(x);
d = new Date().getDate();

e = new Date().getMonth();

f = new Date().getFullYear();

g = new Date().getHours();

h = new Date().getMinutes();

i = new Date().getSeconds();

console.log(`Your Date is ${d}-${e}-${f}
Your Time is ${g}:${h}:${i}
`);
d = new Date();
d =new Intl.DateTimeFormat('default').format();
console.log(d);
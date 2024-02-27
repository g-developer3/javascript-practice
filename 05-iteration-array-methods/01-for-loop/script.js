// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// statement;
/*
for (let i=0; i<=10; i++) {
if (i === 3) {
    console.log('My favroit Number '+i);
}else{
    console.log('Number '+i);
}
}
*/
// Nests Loops
/*
for(let i=1; i<=10; i++) {
console.log('Number'+i);
 for (let j=1; j<=10; j++){
    console.log(`${i}*${j} = ${i*j}`);
 }
}
*/

// Loop thought an array
const names = ['Brad','Sam','Sara','John','Tim'];
for (let i=0; i<names.length; i++) {
if (names[i] === 'Tim') {
console.log(names[i] + ' is Beautiful Girl.');
}else{
    console.log(names[i]);
}
}
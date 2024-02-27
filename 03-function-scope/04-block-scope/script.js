const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 50;
    console.log(x+y);
}

for (let i=0; i<=10; i++) {
    // console.log(i);
}

// console.log(i);

if (true) {
    const a= 500;
    let b = 600;
    var c = 700;
}

console.log(c);

function run() {
    var d = 100;
    console.log(d);
}
run();
// console.log(d);

// Nested scope

function first() {
    const x = 100;
       
    function second(){
        const y = 200;
        console.log(x+y);
    }
second();
}
first();

if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x+y);
    }
}

// challange 1
const getCelsius=(F)=> (F-32) * 5/9;
console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// immidiate invoked function
(name=(f)=>console.log((f-32)*5/9))(50);

// challange 2

function minMax(num) {
const min = Math.min(...num);
const max = Math.max(...num);

return {
     min,
    max
}
}
let a = minMax([1,2,3,4,5]);
console.log(a);


// challange 3

((length,width)=>{
console.log(length*width);
})(20,10);
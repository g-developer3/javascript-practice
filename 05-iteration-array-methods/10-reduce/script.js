const numbers = [1,2,3,4,5,6,7,8,9,10];

const sum = numbers.reduce((accumulator,currentValue)=>{return accumulator+currentValue},0);

// console.log(sum);

// Using a for loop
const sum3 = ()=>{
    let acc = 0;
    for (const cur of numbers){
        acc += cur;
    }
    return acc;
}

// console.log(sum3());

// h
const num = [2,2,2,2,2];

const sum1 = num.reduce((acc,cur)=>{return acc+cur},0);
// console.log(sum1);

const cart = [
    {id:1, name:'product 1', price: 130},
    {id:2, name:'product 3', price: 150},
    {id:3, name:'product 3', price: 175}
];

const cartqty = cart.reduce((acc,cur)=>{ return acc + cur.price },0);

console.log(cartqty);

const arr = ()=> {
    let acc = 0;
    for(let cur of cart){
        acc += cur.price;
    }
    return acc;
};

// console.log(arr());

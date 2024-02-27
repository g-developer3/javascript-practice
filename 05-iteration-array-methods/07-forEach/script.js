const socials = ['Twitter','LinkedIn','Facebook','Instagram'];

// console.log(socials.__proto__);

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`,arr));
/*
function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);
*/

const socialObjs = [
    { name: 'Twitter', url: 'https://www.twitter.com'},
    { name: 'Facebook', url: 'https://www.facebook.com'},
    { name: 'Linkedin', url: 'https://www.linkedin.com'},
    { name: 'Instagram', url: 'https://www.instagram.com'},

];

// socialObjs.forEach((item)=>console.log(item.name));

const foo = [1,2,3,4,5,6,7];

const foo1 =[ {
    name: 'Jalpari',
    age:18,
    birthPlace:'Ocean'
},
{
    name:'Simon',
    age:25,
},
{
    name:'Brian',
    age:24
}
];

let x;

foo1.forEach((item)=>{
console.log(
    item.name,
    item.age,
    )  
});

const brif = ['hello','world','shrimp','pie'];

function hell(str){
    if (str==='shrimp' || str==='pie') {
console.log(`hello ${str}`);
    }else{
        console.log(str);
    }
};

brif.forEach(hell);




const d = new Date(2023,1,10,19,0,0);
const month = d.getMonth();
const hour = d.getHours();

switch(month){
case 1:
console.log('it is January');
break;
case 2:
console.log('it is february');
break;
case 3:
console.log('it is march');
break;
default:
    console.log('it is not Jan,Feb or March');
}

switch (true) {
    case hour<12:
        console.log('Good Morning.');
        break;
    case hour < 18:
        console.log('Good Afternoon');
    break;
    default:
        console.log('Good Night');
        break;
}



if(month===1) {
console.log('it is january');
}else if(month===2) {
    console.log('it is february');
}else if (month===3) {
console.log('it is march');
}else{
    console.log('it is not Jan,Feb or March');
}
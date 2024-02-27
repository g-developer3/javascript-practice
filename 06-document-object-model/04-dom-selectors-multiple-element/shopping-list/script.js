// quarySelectorAll()

const listItem = document.querySelectorAll('li');

// console.log(listItem[1].innerText);

/*
listItem[0].style.color='red';

listItem.forEach((helen,index)=>{
    helen.style.color='red';
    if(index===1){
        helen.style.color='blue'
    }else if(index===2){
        helen.style.color='purple'
    }else if (index===3){
    helen.style.color='green'
}
});

listItem.forEach((helen,index)=>{
    switch(index){
        case 1:
        helen.remove();
        break;
        case 2:
        helen.style.color='green';
        break;
        case 3:
        helen.style.color='blue';
        break;
        default:
        helen.style.color='red';
    }
});
*/
// getElementByClassName()
const listItem2 = document.getElementsByClassName('item');

console.log(listItem2);

const listItemArray=Array.from(listItem2);

listItemArray.forEach((item) => {
console.log(item.innerText);
});

// getElementByTagName()

const listItem3 = document.getElementsByTagName('li');

console.log(listItem3[0].innerText);

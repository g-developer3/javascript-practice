// doucument.getElementById();

console.log(document.getElementById('app-font'));
console.log(document.getElementById('app-font').id);
console.log(document.getElementById('app-font').className);
console.log(document.getElementById('app-font').getAttribute('id'));

// Set Attribute

document.getElementById('app-font').title = 'Shopping-List';
document.getElementById('app-font').setAttribute('class','title');

const title = document.getElementById('app-font');

// Get / change content
console.log(title.textContent);
title.textContent= 'Text saying Hello';
title.innerText='Nothing to say';
title.innerHTML= '<strong>Shopping List</strong>';


// Change Styles

title.style.color='yellow';
title.style.backgroundColor='black';
title.style.padding='10px';
title.style.borderRadius='10px';

// document.quarySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-font'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));

const secondItem =document.querySelector('li:nth-child(2)');

secondItem.innerText= 'Apple Juice';
secondItem.style.color='red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color='blue';
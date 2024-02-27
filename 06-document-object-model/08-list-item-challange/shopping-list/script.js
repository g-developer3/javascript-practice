// Quick & Dirty
function createListItem(item) {
const li = document.createElement('li');
li.innerHTML= `${item}`;
let hel = document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    console.log(button);
}


createListItem('Egges');
createNewItem('Cheese');
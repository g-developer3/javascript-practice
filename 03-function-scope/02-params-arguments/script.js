// Default Paramiters
function registerUser(user='Bot') {
/* if (!user){
    user='Bot';
}*/

    return user + ' is registerd';
}

console.log(registerUser());

//Rest Paramiters

function sum(...numbers) {
    let total = 0;
    for (const num of numbers){
        total += num;
    }
    return total;
}
console.log(sum(1,2,3,4,5));

// Object as Parameter

function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id:1,
    name: 'Simon',
};

console.log(loginUser(user));
console.log(loginUser({id:2, name:'Sara'}));

// Arrays as parameter 

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random()* arr.length);

    const item = arr[randomIndex]

    console.log(item);
}
getRandom([1,2,3,4,5,6,7,8,9,10]);
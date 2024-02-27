// function declaration
function addDollerSign(value) {
    return '$' + value;
}
let a = addDollerSign(100);
console.log(a);

// Fuction Expression
const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(200));
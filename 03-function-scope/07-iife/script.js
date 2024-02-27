
(function () {
    const user = 'Simon';
    console.log(user);
    const hello = () => console.log('hello from the iife');
    hello();
})();

(function (name){
console.log('hello '+name);
})('Helen');

(function hello() {
    document.write('<h1>Hello</h1>');
    // alert('hello');
    console.log('hello');
})();


($=()=>{console.log('show me');})();
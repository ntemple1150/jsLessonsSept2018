/*
EXPRESSIONS
*/
console.log(typeof hi); //expecting this to be a function; output: undefined
var hi = function hi() {
    console.log('hello');
}
hi(); // output -> 'hello'
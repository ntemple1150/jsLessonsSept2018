/*
HOISTING
*/
console.log(scissors); //undefined because the var got hoisted but the value did not
var scissors = 'blue';

console.log(scissors); //blue, because it can read the value now.

hello();
function hello(){
    console.log('hoisting is... interesting')
}

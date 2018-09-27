/*
RECAP
*/
let stringExample = 'string'; //string literal
let numberExample = 0;
let boolExample = true;

let conditionExample = 0; //if you omit "let" it actas as a var

//if else example
if (typeof conditionExample === 'string') {
    console.log('yep, it\'s a string');
} else if (typeof conditionExample === 'number'){
    console.log('yep, it\'s a number'){
        else if (typeof conditionExample === boolean){
    console.log ("yep, it's a boolean");
        }
}

console.log(typeof conditionExample);


//switch
switch (typeof conditionExample) {
    case 'string':
    console.log('this is a string');
    break;
    case 'number':
    console.log ('this is a number');
    break;
    default:
    console.log('this variable is not a string or number');
    break;
}









//ternary below
(typeof conditionExample === 'string') ? console.log('our variable is a string') 
: (typeof conditionExample === 'number') ? console.log('our var is a number') 
: (typeof conditionExample === 'undefined') ? console.log('our var is undefined') 
: console.log('this is our default case');



let fb = 15;

// if (fb % 3 === 0 && fb % 5 === 0) {
//     console.log('fizz buzz');
// } else if (fb % 5 === 0) {
//     console.log('buzz');
// } else if (fb % 3  === 0){
//     console.log('fizz');
// }

switch (true){
    case(fb % 15 === 0):
    console.log('fizz buzz');
    break;
    case (fb % 5 === 0);
    console.log('buzz');
    break;
    case (fb % 3 === 0):
    console.log('fizz');
    break;
}


let FB = 15;

(FB % 15 === 0) ? console.log('fizz buzz')
: (FB % 5 === 0) ? console.log ('buzz')
: (FB % 3 === 0) ? console.log ('fizz')
: console.log('your num isnt fizzy or buzzy');










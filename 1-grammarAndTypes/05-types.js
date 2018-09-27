/*
TYPES
*/

//Booleans 
let on = true;
console.log(on);  //output -> true

let off = false;
console.log(off);  //putput-> false

//boolean can represent: true/false , on/off , yes/no

//Null
/*
Null = empty value (not 0 ; not undefined)

it is like an empty container; nothing is in it but it still exists as a space to fill
*/

let empty = null;
console.log(empty);

//Undefined
/*
Undefined = no value assigned (not even an empty container)

Undefined is not an error
*/

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

/*
Think of undefined and null as packages in UPS
null -> is a package sent out empty
undefined -> is a package that was forgotten, or a package that has not yet been used
*/

//Numbers
let degrees = 65;
console.log(degrees);

let precise = 999999999999999;
console.log(precise)

let rounded = 9999999999999999;
console.log(rounded)


let notQuite = 0.2 + 0.1
console.log(notQuite)

let num = 0.3;
console.log(num);

//(2 + 1)/10
let numbersAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numbersAreHard);

/*
just beware that if you use a number over 15 concecutive numbers you will get a funky answer
*/


//STRINGS
//strings = any value within quotes; JS spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne , stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first); //number
console.log(second); //string

console.log(typeof first); //number
console.log(typeof second); //string

//Whats going on here?
// + -> does addition when given two numbers, concatenation when given two strings

let third = 1050 + 'abab';

console.log(third);



let fn = 'Nic'
let ln = 'Temple'
let hn = 47
let st = 'meadow Drive'
let ct = 'New Palestine'
let state = 'IN'
let zip = 46163

console.log(fn, ln + ',', hn, st + ',', ct + ',', state, zip);



//Objects
/*
What is an object?

a container that can hold multiple datatypes

denoted by the {}
has keys and values (color (key): 'blue' (value)), seperated with a colon
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
}

console.log(burritosNow);
console.log(typeof burritosNow);

//Arrays
/*
Arrays are great for lists

these are denoted by the []
have values seperated by commas -> ['blue', 'green', 'yellow']
*/

let burritos = ['large', 4, true];

console.log(burritos);
console.log(typeof burritos);


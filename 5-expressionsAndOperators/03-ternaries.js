/*
TERNARIES
*/

var x = 6;

(x > 0) ? console.log("x is greater than 0.") : console.log("x is not greater than 0");

//Above sode line is able to replace lines 10-14
// if (x>0){
//     console.log("greater")
// } else {
//     console.log("lesser")
// }

let x = -10;

(x == 0) ? console.log("x equals 0") : (x < 0) ? console.log("x is less than zero") : console.log("x is greater than 0")


let age = 22;

( age <= 17) ? console.log("too young for fun") : (age >= 18 && <=21) ? console.log ('you can vote, but cant drink')
: (age  >= 21) ? console.log ('lets party') : Console.log('whoa, how old')





let yep = 10;

(yep < 0 && yep > -10) ? console.log('yep is between 0 and -10') : (yep > 0) ? console.log('yep is greater than 0') : console.log('yep is greater than 0');
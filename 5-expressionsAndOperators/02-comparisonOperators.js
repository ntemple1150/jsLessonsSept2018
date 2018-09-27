/*
Comparison Operators
*/

//equality
console.log('3' == 3); //type coercion
console.log('three' == 3); //false
console.log('3' == 3); // true
console.log(0 == false);
//strict equality -> checks value and type
console.log(3 === 3);
console.log(3 === '3'); // false because they arent the same. One is a number and the other is a string

//not equal
console.log('3' != 4); // doesnt care about type. output -> True

//strict not equal
console.log('3' !== 3); //checks type and value

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or equal to
console.log(3 >= 3);

// less than or equal to
console.log(4 <= 4);

//And: returns true if the left and right are both true

console.log(true && true); //output -> true
let x = 5;
console.log(x < 10 && x > -5); //  output -> true
console.log(x < 10 && x > 15); // output -> false

let str = 'a';
console.log(str < 'p');

//or; return true if the left or the right are true
console.log(true || false); //true
let x = 5
console.log(x < 10 || x > 15); //true
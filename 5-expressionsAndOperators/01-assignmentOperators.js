/*
AssignmentOperators
*/

//assignment operator
let x = 5;
console.log(x); // 5

// x = x + 1;
// console.log(x);

//addition operator
x += 1; //x = x + 1
console.log(x); // 6

x -= 1; //x = x - 1
console.log(x); // 5

//multiplication operator
x *= 1; // x = x * 1
console.log(x); // 5

//division operator
x /= 1; //x = x / 1
console.log(x); //5


console.log(7%5); //output -> 2, remember that 7/5 = 1 & 2/5..... "modulus" is the top number in the remainder
console.log(x % 5);
x = x % 5; //assign x to 0
x %= 5; //the sme as the above line

//exponential assignment
let x = 5;
x = x ** 2; // x = x^2
x **= 1;
console.log(x);

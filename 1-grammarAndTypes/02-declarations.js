/*
VARIABLES

Notes on variables:
1) variables must begin with a letter, underscore, or a dollar sign
2) you can use numbers but they must follow one of the above
3) JavaScript is case sensitive--'hello' and 'Hello' are different

*/

var a =1;
var b =2;
console.log(a+b); //3

/*
DECLARATIONS

Declarations are the LEFT SIDE of a variable
    It is simply var x
    It is on the LEFT SIDE of the assignment operator (=)


Initializations are the RIGHT SIDE of a variable
    Set the value of the variable
    Includes the variable name (x), the assignment operator (=), and the value (10) => x = 10

*/

var x;
console.log('Declartion', x)

x = 10;
console.log('initialization 1;' , x);

x = 33;
console.log('initialization 2:' , x);

/*
Var, Let, and Const:
var = 'old' js keyword for variables
let = 'new' js keyword for variables (introduced in ES6)
const = also 'new' ; declares unchageable variables
*/

let today = 'Great!';
const elevenfifty = 'Wonderful!';
console.log(today, elevenfifty);

today = 'Lovely!';
console.log(today,elevenfifty);


// elevenfifty = 'Super'
console.log(today,elevenfifty)


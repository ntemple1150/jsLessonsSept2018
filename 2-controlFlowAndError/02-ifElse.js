/*
IF ELSE
*/

weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log('No jacket necessary');
}

let name = 'Nic';

if (name == 'Nic'){
    console.log('Hello, my name is Nic');
} else {
    console.log('Hello, what is your name?');
}



function name(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    // return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(name('nIc'));

let name = 'niCOLaS';

if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}









 let age = 22

if (age < 18) {
    console.log("Sorry, you are too young")
} else if (age >= 18){
    console.log('Yay, you can vote')
} else if (age >= 21){
    console.log('Turn up, you can drink')
} else if (age >= 25){
    console.log('Sweet, lets rent a car')
}



let age = 17;

if (age >= 25){
    console.log ('yay, you can rent  car')
} else if (age >= 21){
    console.log('yay, you can drink')
} else if (age >= 18){
    console.log('you need to vote')
} else {
    console.log('sorry, you are too young')
}



/*
CLASSIC FOR LOOPS
*/

//lets you duplicate code a certain number of times.
//shortcut for code redudency

//Loop Variations
//For Statement
//Do While Statement
//While Statement
//Labeled Statement
//Break Statement
//Continue Statement
//For In Statement
//For Of Statement

//counted from 0-9 by 1s
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//count from 0-20 by 2s
for (let i = 0; i <= 20; i = i + 2){
    console.log(i)
}


for (let i = 10; i>= 0; i--){
    console.log(i)
}



let name = "nicolas temple";
//n: 0, i: 1, c: 2, o: 3, l: 4, a: 5, s: 6

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

let sum=0;

for (let i = 1; i<=50; i++){
    sum = sum +i
}
console.log(sum);
/*
INTRO TO ARRAYS

have square brackets [], comma seperators, multiples data types (can use numbers or strings or others), great for listing

Arrays have value for listing large numbers
objects have a value for every variable
*/

//overview/calling
let students = ['Tony','Marshall', 'Rhys', 'Ray', 23, true, ['Ryan' , 'Iesha']];

console.log(typeof students); //object because its contains multiple date types
console.log(students[2]);


console.log(students[3]);
console.log(students[6]);

console.log(students[6][1]);
console.log(`hello ${students[6][1]} you look nice today`);



//lines 27-31 are the same as 33-37. using the FOR OF mothod is easier to type out

let food= ['pecan pie', 'Shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

for (let i = 0; i < food.length; i++){
    console.log(food [i])
}

let food= ['pecan pie', 'Shrimp', 'quesadilla', 'cheesecake', 'hotdog'];

for (let f of food){
    console.log(f);
}
food.push('Pizza')
console.log(food);

food.splice(1, 1, 'bananas');  //first num: the index to start at, second num: number of things to remove, third num: is the replacement value
console.log(food)

food.splice(2, 0, "SP Pie");
console.log(food)

food.pop(); //removes the last value
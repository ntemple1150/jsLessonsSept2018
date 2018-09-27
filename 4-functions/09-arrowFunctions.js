//ARROW FUNCTIONS   CANNOT BE HOISTED
function coffee(){
    console.log("coffee rules.")
}

let tea = () => {
    console.log("tea is awesome.")
}

coffee();
tea();



var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`)
}

cats(2,3)

//arrow function body styles

//concise
let apples = x => console.log(`there are ${x} apples`)
apples(5);


//block
let peaches = (x) => { console.log (`there are ${x} peaches`)}
peaches(6);


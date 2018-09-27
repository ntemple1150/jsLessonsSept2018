let friend = 'Tom'

switch (friend) { 
    case 'Tom' :
        console.log('Hey Tom, when are you rock climbing?');
        break;
    case 'Kenn':
        console.log("hey Kenn, wanna play catan");
        break;
    case 'Carolyn':
        console.log('Hey carolyn, when are you leaveing us?');
        break;
    default:
        console.log(`Im sorry, ${friend}, but do i know you?`);
}




let dessert = 'flan'

switch (dessert) {
    case 'Pie':
    console.log('pie, pie oh me oh my');
    break;
   case 'cake':
     console.log('cake is great');
    break;
   case 'Ice Cream':
   console.log('I Scream for ice cream');
    break;
   default:
   console.log(`sorry, ${dessert} not on the menu`);
}



let yep = -18;

switch(true){
    case (yep <0 && yep > -10):
        console.log('worked')
        break;
    case (yep > 0):
        console.log('worked here');
        break;
    default:
        console.log('didn\'t work')
}
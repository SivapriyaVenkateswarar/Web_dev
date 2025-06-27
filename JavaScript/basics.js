/* Javascript: Used to create websites. 
-> Giving instructions to computer*/

/* Variable name can't start with number.
cant use special characters except: $ */
var x=Math.round(2.2)
console.log(x);
var s="Hello";
console.log(s+"hello");
console.log(typeof(s));
s=s+3;
console.log(s); //Type coercion (Automatic type conversion)
console.log("$"+(22+30)); //To maintain order of operation

/* When including single quotes inside a 
sting it can be done in two ways: */

console.log("hello, I'm here"); //using double quotes
console.log('hello, I\'m here'); //using escape sequence

/* uses of template strings */

//Interpolation:
console.log(`Items: (${90+1}): $${1+1}`) //allows us to type integer calculations within strings
//Multi-line string feature
console.log(`some test`); /*JS automatically gives semi colon for the last statement */

//function: creates new function
// function name similar to normal identifier
function function1(){
    //function body
    console.log('hello');
    console.log(1+2);
}

function1(); //calling the function

//objects
const product= {
    name:'bello', //property value pair
    // seperated by comma
    price: 1200
}
                
product.name='change';
console.log(product.name);
product.newproperty='hii'
delete product.name;

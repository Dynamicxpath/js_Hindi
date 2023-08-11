//Symbol DataType====> return type symbol
const Id= Symbol('123');
const anotherId=Symbol('123');
console.log(typeof anotherId);
console.log(Id===anotherId);// Strict comparison

//BigInt====> return type bigint
let bigNumber= 314255587933689458796n;
console.log(typeof bigNumber);
const bigNumber1= 314255587933689458796n;
console.log(typeof bigNumber1);

//Array=======> return type object
const heros=["Shaktiman","nagraj","doga"];
console.log(typeof heros);

// Object======> return type object
let myObj={
    "name":"Girija",
    "Address":"Jspur"
}
console.log(typeof myObj);

// Function======> return type function
const myFunction= function(){
    console.log("Hello");
}
console.log(typeof myFunction);

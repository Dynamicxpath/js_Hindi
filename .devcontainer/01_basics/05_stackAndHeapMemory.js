//Primitive Datatypes====> Stack Memory ==> Here you will get a copy of Declared Variable
let myChannel="DynamicXpath";
let anotherChannel= myChannel;
console.log(anotherChannel);
anotherChannel= "Xpath";
console.log(myChannel);
console.log(anotherChannel);

//NonPremitive DataTypes====> Heap Memory====> Here you will get a reference of Original value in heap and variable will be in stack.
let userOne=
{
    email: "xyz@gmail.com",
    upi: "123@ybl"
}
let userTwo= userOne;
userTwo.email="abc@gmail.com";
console.log(userOne.email);     // abc@gmail.com
console.log(userTwo.email);    // abc@gmail.com
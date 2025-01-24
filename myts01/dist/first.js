console.log("Hello World!!!");
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//console.log(add('2','3'));
//ES5 var 
//let and const 
let myString = 'String Value';
myString = 'Modified Value';
//myString=9; // gives compilation error due to type mismatch
//Type Inference
let number1 = 2;
//Tuple
const person = {
    name: 'Jack',
    age: 30,
    hobbies: ['Reading', 'Music'],
    role: [2, 'admin']
};
console.log(person.name);
//any
let activities;
activities = ['Sports', 'Music', 2, 5, true];

console.log("Hello World!!!");
//We need to write additional code to handle the different type scenario
//The js code will become complicated and hence we need TypeScript which 
//provide default type safety
function add(num1, num2){
    if(typeof num1 === "number" && typeof num2=="number")
        return num1 + num2;
    else 
        return +num1 + +num2;
}

console.log(add(2,3));

console.log(add('2', '3'));
console.log(add("Suresh","D"));

var number = 10;
console.log(number);

number = "Suresh";
console.log(number);
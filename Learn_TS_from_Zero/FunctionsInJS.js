// Function is a block of code designed to perform a particular task.

// Function Syntax
function functionName(parameters) {
  // code to be executed
}
// calling the function
functionName(arguments);

// Example of a function that adds two numbers
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum); // Output: Sum: 15

function greet(name) {
    return "Hello, " + name + "!"; 
}
let message = greet("Developer");
console.log(message); // Output: Hello, Developer
// 

// Perameters vs Arguments
// Parameters are the names listed in the function definition.
// Arguments are the real values passed to the function.

function greetUser(firstName, LastName) { // firstName and LastName are parameters
    console.log("Hello , " + firstName  + LastName);
}
greetUser("Mujaddid ", "Chowdhury"); // "Mujaddid" and "Chowdhury" are arguments
    
// default parameters
function multiply(a, b = 2) { // b has a default value of 2
   console.log(a * b);
   
}   

// IF THE SECOND ARGUMENT IS NOT PROVIDED, THE DEFAULT VALUE WILL BE USED

multiply(5, 5); // b will be 2

// Function Retunrs
// A function can return a value using the return statement.
//If we add return statement, additionally we have to print the function using console.log

// PRACTICE EXERCISE

function fn1(a) {
    function fn2(b) {
        return a *b;
    }
    return fn2;
}

let result = fn1(5); // returns fn2
console.log(result); // Output: [Function: fn2]
console.log(result(4)); // Output: 20 (5 * 4)

// Arrow Functions
// Arrow functions provide a more concise syntax for writing functions. 

const sayHello = () => {
    console.log("Hello!");
}

sayHello(); // Output: Hello!


// One-liner arrow function

const addNum = (x, y) => x + y;

console.log(addNum(3, 7)); // Output: 10


// Arrow function
const square = n => n * n; // single parameter doesn't need parentheses

console.log(square(4)); // Output: 16

// Arrow function with no parameters
let getCurrentTime = () => new Date().toLocaleTimeString();
console.log(getCurrentTime()); // Output: current time in HH:MM:SS format

// arrow function with multiple statements
const factorial = n => {
    let result = 1;
    
}

console.log(factorial(5)); // Output: 120

// IIFE - Immediately Invoked Function Expression
// A function that runs as soon as it is defined.   

(function() {
    console.log("This function runs immediately upon definition!");
})();


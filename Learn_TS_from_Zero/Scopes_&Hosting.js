// Scopes in JavaScript

// 1. Global Scope
// Variables declared outside of any function or block have global scope
let globalVar = "I am a global variable";
function showGlobalVar() {
    // console.log(globalVar); // Accessible here
}

showGlobalVar();
// console.log(globalVar); // Accessible here too

// 2. Function Scope
// Variables declared within a function are only accessible within that function
function myFunction() {
    let functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}
// myFunction();
// console.log(functionVar); // Unaccessible here, will throw an error

// 3. Block Scope
// Variables declared with let or const within a block (e.g., inside { }) are only accessible within that block
if (true) {
    let blockVar = "I am a block variable";
    // console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Unaccessible here, will throw an error

// 4. Lexical Scope 
function outerFunction() {
    let outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar); // Accessible here due to lexical scope
    }
    // innerFunction();
}

// outerFunction();

if (true) {
    const username = "Mujaddid";
    if (username === "Mujaddid") {
        const welcomeMessage = "Welcome back, " + username + "!";
        // console.log(welcomeMessage); // Accessible here
    }
    // console.log(welcomeMessage);
}
// console.log(username);

// 5. Hoisting
// In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope

console.log(addOne(5)); // Outputs: 6
function addOne(number) {
    return number + 1;
}

const addTwo = function(number)
{
    return number + 2;
}
console.log(addTwo(5)); // Outputs: 7




// Lexical Scoping

// Lexical scoping means that the accessibility of variables is determined by the physical structure of the code (i.e., where the variables are declared in the source code).
function outer() {
    let outerVar = "I am from outer function";
    function inner() {
        console.log(outerVar); // Accessible here due to lexical scope
    }
    inner();
}
outer();

// Example of lexical scoping with nested functions

function outerFunction() {
    let outerVariable = "I am from outer function too";
    function innerFunction() {
        let innerVariable = "I am from inner function";
        console.log(outerVariable); // Accessible due to lexical scope
        console.log(innerVariable); // Accessible here
    }
    innerFunction();
}
outerFunction();

// Closures

// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

let counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

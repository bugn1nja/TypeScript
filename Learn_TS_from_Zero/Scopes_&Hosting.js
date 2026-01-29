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





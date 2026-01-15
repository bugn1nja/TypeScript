// There is two types of data types in JavaScript
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// Primitive Data Types
// 1. Number
// let Roll = 42;         // A numeric value

//what is let in javascript
    // let is a keyword used to declare variables in JavaScript. It was introduced in ECMAScript 6 (ES6) as a block-scoped variable declaration,
    // meaning that the variable is only accessible within the block, statement, or expression where it is defined.
    // This is different from the var keyword, which declares variables with function scope or global scope.
    // Using let helps to avoid issues related to variable hoisting and makes the code more predictable and easier to understand.


// 2. String
// let FirstName = "Hello";      // A string value 
// 3. Boolean
// let Raining = true;   // true or false value
// 4. Null                      
// let Box = null;         // Represents the intentional absence of any object value
// 5. Undefined                 
// let Address = undefined; // A variable that has not been assigned a value
// 6. Symbol                    
// let Excited = Symbol("id"); // A unique and immutable primitive value
// 7. BigInt                    
// let Phone = 018000000000n; // Represents whole numbers larger than 2^53 - 1

// Non-Primitive Data Types
// 1. Object
// let obj: { name: string; age: number } = { name: "Alice", age: 30 }; // A collection of key-value pairs    
// 2. Array
// let arr: number[] = [1, 2, 3, 4, 5]; // An ordered list of values
// 3. Function
// let func: (x: number, y: number) => number = function (x: number, y: number): number {
//    return x + y;
// }; // A block of code designed to perform a particular task
// 4. Date
// let date: Date = new Date(); // Represents a single moment in time  
// 5. RegExp
// let regex: RegExp = /ab+c/; // Represents a regular expression pattern

// Note: In TypeScript, we can explicitly define the data types of variables using type annotations as shown above.
// In JavaScript, data types are determined dynamically at runtime.

// all the examples above are created using Ai
// ..............................................................................................................
// below are some prectice examples by me

let FirstName = "Mujaddid";
console.log("Hello, My name is : " + FirstName); //will print Hello, My name is : Mujaddid

let age = 25;
console.log("I am " + age + " years old."); //will print I am 25 years old.

let cgpa = 3.75;
console.log("My CGPA is " + cgpa); //will print My CGPA is 3.75

// typeof 
// to know the data type of a variable
console.log(typeof FirstName); //will print string
console.log(typeof age);//will print number
console.log(typeof cgpa);//will print number


let isGoogleEmployee = false;
let goalisBecomeAGoogleEmployee = true;
console.log(isGoogleEmployee); //will print false
console.log(goalisBecomeAGoogleEmployee); //will print true

let a = 20 > 14; // will return true
// its a boolean data type
console.log(typeof a);
console.log(a);
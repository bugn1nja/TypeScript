// Operators in JavaScript
// This file covers various operators available in JavaScript

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Ternary Operator

// 1. Arithmetic Operators

// Addition
 let a = 10;
 let b = 5;
 let sum = a + b; // 15
console.log("Sum:", sum); // Output: Sum: 15

// Subtraction
let difference = a - b; // 5
console.log("Difference:", difference); // Output: Difference: 5

// Multiplication
let product = a * b; // 50  
console.log("Product:", product); // Output: Product: 50

// Division
let quotient = a / b; // 2
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulus
let a1 =50;
let b1 =5;
let remainder = b1 % a1 ; // 5
console.log("Remainder:", remainder); // Output: Remainder: 5

// Exponentiation
let power = a ** 2; // 100
console.log("Power:", power); // Output: Power: 100

// Increment
a++;    // a is now 11
console.log("Incremented a:", a); // Output: Incremented a: 11

// Decrement
b--;    // b is now 4
console.log("Decremented b:", b); // Output: Decremented b: 4

// 2. Assignment Operators
let c = 20; // Simple assignment

// += called addition assignment
c += 5; // c = c + 5; c is now 25
console.log("c after += 5:", c); // Output: c after += 5: 25

// -= called subtraction assignment

let d = 20;
d -= 10; // d = d - 10; d is now 10
console.log("d after -= 10:", d);   // Output: d after -= 10: 10


// *= called multiplication assignment
let e = 20;
e *= 2; // e = e * 2; e is now 40
console.log("e after *= 2:", e);   // Output: e after *= 2: 40

// /= called division assignment
let f = 20;
f /= 4; // f = f / 4; f is now 5
console.log("f after /= 4:", f);   // Output: f after /= 4: 5

// %= called modulus assignment
let g = 20;
g %= 6; // g = g % 6; g is now 2
console.log("g after %= 6:", g);   // Output: g after %= 6: 2

// 3. Comparison Operators
let x = 10;
let y = 20; 
console.log("x == y:", x == y); // false
console.log("x != y:", x != y); // true
console.log("x === y:", x === y); // false
console.log("x !== y:", x !== y); // true
console.log("x > y:", x > y); // false
console.log("x < y:", x < y); // true
console.log("x >= y:", x >= y); // false
console.log("x <= y:", x <= y); // true

// 4. Logical Operators
let p = true;
let q = false;

console.log("p && q:", p && q); // false 
// && all must be true

console.log("p || q:", p || q); // true
// || at least one must be true

console.log("!p:", !p); // false    
// ! flips the value

console.log("!q:", !q); // true
// ! flips the value

// Operator Precedence
let result = 3 + 5 * 2; // Multiplication has higher precedence than addition
console.log("Result of 3 + 5 * 2:", result); // Output: Result of 3 + 5 * 2: 13

// Operators Associativity
let assocResult = 100 / 5 / 2; // Left to right associativity
console.log("Result of 100 / 5 / 2:", assocResult); // Output: Result of 100 / 5 / 2: 10

// Right to left associativity
let assignResult;
assignResult = 4 ** 3 ** 2; // Equivalent to 4 ** (3 ** 2)    
console.log("Assign Result:", assignResult); // Output: Assign Result: 262144


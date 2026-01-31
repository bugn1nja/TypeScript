// Objects in JavaScript

// An object is a collection of key-value pairs
// It is used to store related data and functionality together

// Creating an Object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// accessing Object Properties
 
console.log("The name of stored person is : " + person.name)
console.log("The age of stored person is : " + person.age)
console.log("The city of stored person is : " + person.city)

console.log("Persons All data is : ", person);

// Modifying Object Properties
person.age = 31;
console.log("After modifying, the age of stored person is : " + person.age)

// let person2 = {
//     greet: function() {
//         console.log("Hello!");
//     }
// }

// let student = Object.create(person2);
// student.name = "Alice";
// student.age = 22;

// // student.greet(); // Output: Hello!
// console.log(student.greet()); // Output: Hello, Alice!

let person2 = {
  greet: function() {
    return `Hello, ${this.name}!`;
  }
};

let student = Object.create(person2);
student.name = "Alice";
student.age = 22;

console.log(student.greet()); // Hello, Alice!

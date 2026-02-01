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


// Nested Objects
let company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        state: "CA"
    },
    employees: 100
};
console.log("Company Name: " + company.name);
console.log("Company Address: " + company.address.street + ", " + company.address.city + ", " + company.address.state);
console.log("Number of Employees: " + company.employees);

// Object Methods

// Static Methods

// 1. Object.keys() - returns an array of a given object's property names
let key_names = Object.keys(person);
console.log("Keys of person object : ", key_names); // Output: ["name", "age", "city"]

// 2. Object.values() - returns an array of a given object's property values
let value_names = Object.values(person);
console.log("Values of person object : ", value_names); // Output: ["John", 31, "New York"]

// 3. Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs
let entries = Object.entries(person);
console.log("Entries of person object : ", entries); 
// Output: [["name", "John"], ["age", 31], ["city", "New York"]]

// 4. Object.formEntries() - creates a new object from an array of [key, value] pairs
let new_person = Object.fromEntries(entries);
console.log("New Person Object from entries : ", new_person); 
// Output: {name: "John", age: 31, city: "New York"}

// 5. Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object
let target = {a: 1, b: 2};
let source = {b: 4, c: 5};
let returnedTarget = Object.assign(target, source);
console.log("Target after Object.assign : ", returnedTarget); 
// Output: {a: 1, b: 4, c: 5}

// Freezing & Sealing Objects

// 6. Object.freeze() - freezes an object, preventing new properties from being added to it and existing properties from being removed or changed
Object.freeze(person);
person.age = 35; // This will not change the age property
console.log("After freezing, the age of person is : " + person.age); // Output: 31

// 7. Object.seal() - seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable
let car = {
    make: "Toyota", 
    model: "Camry"
};
Object.seal(car);
car.model = "Corolla"; // This will change the model property
console.log("After sealing, the model of car is : " + car.model); // Output: Corolla
car.year = 2020; // This will not add a new property
console.log("After sealing, the car object is : ", car); // Output: {make: "Toyota", model: "Corolla"}

// 8. Object.preventExtensions() - prevents new properties from being added to an object
let bike = {
    brand: "Yamaha",
    type: "Sport"
};
Object.preventExtensions(bike);
bike.type = "Cruiser"; // This will change the type property
console.log("After preventExtensions, the type of bike is : " + bike.type); // Output: Cruiser
bike.color = "Red";
console.log("After preventExtensions, the bike object is : ", bike); // Output: {brand: "Yamaha", type: "Cruiser"}
// The color property will not be added

// Checking Object Methods

// 9. Object.hasOwn() - returns a boolean indicating whether the object has the specified property as its own property
console.log("Does person have own property 'name'? : ", Object.hasOwn(person, 'name')); // Output: true
console.log("Does person have own property 'country'? : ", Object.hasOwn(person, 'country')); // Output: false

// 10. Object.is() - determines whether two values are the same value
let obj1 = {a: 1};
let obj2 = {a: 1};
console.log("Are obj1 and obj2 the same? : ", Object.is(obj1, obj2)); // Output: false
let obj3 = obj1;
console.log("Are obj1 and obj3 the same? : ", Object.is(obj1, obj3)); // Output: true

// Property Descriptors

// 11. Object.defineProperty() - defines a new property directly on an object, or modifies an existing property on an object, and returns the object
Object.defineProperty(person, 'country', {
    value: 'USA',
    writable: false,
    enumerable: true,
    configurable: false
});
console.log("After defineProperty, the country of person is : " + person.country); // Output: USA
person.country = 'Canada'; // This will not change the country property
console.log("After attempting to change, the country of person is : " + person.country); // Output: USA

// 12. Object.getOwnPropertyDescriptor() - returns a property descriptor for a named property on an object
let descriptor = Object.getOwnPropertyDescriptor(person, 'country');
console.log("Property Descriptor for 'country' : ", descriptor); 
// Output: {value: "USA", writable: false, enumerable: true, configurable: false}

// Prototype Methods

// 13. Object.create() - creates a new object with the specified prototype object and properties
let animal = {
    speak: function() {
        console.log("Animal speaks");
    }
};
let dog = Object.create(animal);
dog.bark = function() {
    console.log("Dog barks");
}
dog.speak(); // Output: Animal speaks
dog.bark(); // Output: Dog barks
console.log("Dog Object : ", dog);

// 14. Object.getPrototypeOf() - returns the prototype (i.e. the internal [[Prototype]] property) of the specified object
let proto = Object.getPrototypeOf(dog);
console.log("Prototype of dog : ", proto); 
// Output: {speak: ƒ}

// 15. Object.getprototypeOf() - returns the prototype (i.e. the internal [[Prototype]] property) of the specified object
let isProto = Object.isPrototypeOf(animal, dog);
console.log("Is animal prototype of dog? : ", isProto); 
// Output: true

// This concludes the overview of Objects in JavaScript!

// Objects are fundamental to JavaScript and understanding them is crucial for effective programming in the language.